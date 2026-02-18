/**
 * API Route: POST /api/contact
 * ─────────────────────────────────────────────────────────────────────────────
 * Receives contact form submissions and creates a new Lead record in Zoho CRM
 * using OAuth 2.0 server-side authentication (refresh token flow).
 *
 * ALL Zoho credentials live exclusively in server-side environment variables —
 * they are NEVER exposed to the browser.
 *
 * Vercel environment variables to set in Project → Settings → Environment Variables:
 *   ZOHO_CLIENT_ID        — from Zoho API Console (Self Client or Web app)
 *   ZOHO_CLIENT_SECRET    — from Zoho API Console
 *   ZOHO_REFRESH_TOKEN    — long-lived token obtained once via OAuth callback
 *   ZOHO_API_BASE         — e.g. https://www.zohoapis.in/crm/v2  (use .in for India DC)
 *
 * About the Refresh Token:
 *   The refresh token is obtained ONCE by authorising the app through Zoho's
 *   OAuth flow (redirect to https://kamalafarms.com/oauth/callback).
 *   After that one-time step, the refresh token never expires unless revoked,
 *   so normal form submissions only ever exchange it for a short-lived access
 *   token — no redirect or user interaction needed.
 */

import { NextRequest, NextResponse } from "next/server";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ZohoTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  error?: string;
}

interface ZohoLeadPayload {
  Last_Name: string;
  Email: string;
  Description: string;
  Lead_Source: string;
  Company?: string;
  Phone?: string;
}

// ─── Helper: get a fresh Zoho access token ───────────────────────────────────

async function getZohoAccessToken(): Promise<string> {
  /**
   * Zoho access tokens expire after 1 hour.
   * We request a fresh one on every form submission using the long-lived
   * refresh token stored in environment variables.
   *
   * IMPORTANT: Use the correct Zoho accounts domain for your data centre:
   *   Global : https://accounts.zoho.com
   *   India  : https://accounts.zoho.in   ← most likely for kamalafarms.com
   *   EU     : https://accounts.zoho.eu
   */
  const tokenUrl = "https://accounts.zoho.in/oauth/v2/token";

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: process.env.ZOHO_CLIENT_ID!,
    client_secret: process.env.ZOHO_CLIENT_SECRET!,
    refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
  });

  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  const data: ZohoTokenResponse = await res.json();

  // Log the Zoho token response server-side for debugging (never reaches the browser)
  console.log("[Zoho] Token response:", JSON.stringify(data));

  if (!res.ok || data.error || !data.access_token) {
    throw new Error(`Failed to get Zoho access token: ${data.error ?? "unknown error"}`);
  }

  return data.access_token;
}

// ─── Helper: create a Lead in Zoho CRM ───────────────────────────────────────

async function createZohoLead(
  accessToken: string,
  lead: ZohoLeadPayload
): Promise<void> {
  /**
   * Zoho CRM Leads endpoint. The base URL is configurable via ZOHO_API_BASE
   * so you can switch data centres without changing code.
   *
   * Field mapping:
   *   Last_Name   → required by Zoho (we use the full name from the form)
   *   Email       → lead's email address
   *   Description → the message the user typed in the form
   *   Lead_Source → always "Website" so you can filter in Zoho CRM
   *   Company     → optional; defaults to "(not provided)" if empty
   *   Phone       → optional
   */
  const apiBase = process.env.ZOHO_API_BASE ?? "https://www.zohoapis.in/crm/v2";
  const url = `${apiBase}/Leads`;

  const body = {
    data: [
      {
        Last_Name: lead.Last_Name,
        Email: lead.Email,
        Description: lead.Description,
        Lead_Source: lead.Lead_Source,
        Company: lead.Company ?? "(not provided)",
        Phone: lead.Phone ?? "",
      },
    ],
    trigger: [], // prevents automation triggers if desired; remove to enable workflows
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  // Log the full Zoho CRM response server-side for debugging
  console.log("[Zoho CRM] Create lead response:", JSON.stringify(data));

  if (!res.ok) {
    throw new Error(`Zoho CRM API error: ${res.status} ${res.statusText}`);
  }

  // Zoho returns a "code" field per record; check for success
  const record = data?.data?.[0];
  if (record?.code && record.code !== "SUCCESS") {
    throw new Error(`Zoho CRM rejected the lead: ${record.code} — ${record.message}`);
  }
}

// ─── Main route handler ───────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    // ── 1. Parse request body ────────────────────────────────────────────────
    const body = await req.json();
    const { name, email, phone, subject, message } = body as {
      name: string;
      email: string;
      phone?: string;
      subject?: string;
      message: string;
      // honeypot field (not destructured; used only for spam check below)
      _gotcha?: string;
    };

    // ── 2. Honeypot spam check ───────────────────────────────────────────────
    // The hidden _gotcha field is left empty by real users but filled by bots.
    if (body._gotcha) {
      // Return a fake success so bots don't know they were blocked
      return NextResponse.json({ success: true });
    }

    // ── 3. Input validation ──────────────────────────────────────────────────
    const errors: string[] = [];

    if (!name || name.trim().length < 2) {
      errors.push("Name must be at least 2 characters.");
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.push("A valid email address is required.");
    }
    if (!message || message.trim().length < 10) {
      errors.push("Message must be at least 10 characters.");
    }
    // Sanitise: reject inputs that are suspiciously long
    if (name && name.length > 200) errors.push("Name is too long.");
    if (message && message.length > 5000) errors.push("Message is too long.");

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, error: errors.join(" ") },
        { status: 400 }
      );
    }

    // ── 4. Check required environment variables ──────────────────────────────
    if (
      !process.env.ZOHO_CLIENT_ID ||
      !process.env.ZOHO_CLIENT_SECRET ||
      !process.env.ZOHO_REFRESH_TOKEN
    ) {
      console.error("[Contact] Missing Zoho environment variables.");
      return NextResponse.json(
        { success: false, error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // ── 5. Get a fresh Zoho access token ────────────────────────────────────
    const accessToken = await getZohoAccessToken();

    // ── 6. Build the lead payload ────────────────────────────────────────────
    const lead: ZohoLeadPayload = {
      Last_Name: name.trim(),
      Email: email.trim().toLowerCase(),
      // Combine subject + message into Description so context is preserved in Zoho
      Description: subject?.trim()
        ? `Subject: ${subject.trim()}\n\n${message.trim()}`
        : message.trim(),
      Lead_Source: "Website",
      Phone: phone?.trim() ?? "",
    };

    // ── 7. Create the lead in Zoho CRM ───────────────────────────────────────
    await createZohoLead(accessToken, lead);

    // ── 8. Return success ────────────────────────────────────────────────────
    return NextResponse.json({ success: true });
  } catch (err) {
    // Log full error server-side; return a safe message to the client
    console.error("[Contact] Unexpected error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again or reach us directly via WhatsApp.",
      },
      { status: 500 }
    );
  }
}

// Reject non-POST methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
