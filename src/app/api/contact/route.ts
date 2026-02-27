/**
 * API Route: POST /api/contact
 * ─────────────────────────────────────────────────────────────────────────────
 * Receives contact form submissions and creates a new Lead in Bitrix24 CRM
 * via an inbound webhook — no OAuth or token refresh required.
 *
 * ALL credentials live exclusively in server-side environment variables —
 * they are NEVER exposed to the browser.
 *
 * Vercel environment variable to set in Project → Settings → Environment Variables:
 *   BITRIX24_WEBHOOK_URL  — full inbound webhook base URL from Bitrix24
 *                           e.g. https://yourcompany.bitrix24.in/rest/USER_ID/TOKEN/
 *
 * How it works:
 *   The webhook URL itself contains the authentication token (Bitrix24's design).
 *   We POST lead fields directly to crm.lead.add — no token exchange step needed.
 *   On success, the lead appears in Bitrix24 → CRM → Leads.
 */

import { NextRequest, NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Bitrix24LeadFields {
  TITLE: string;
  NAME: string;
  EMAIL: { VALUE: string; VALUE_TYPE: string }[];
  PHONE: { VALUE: string; VALUE_TYPE: string }[];
  COMMENTS: string;
  SOURCE_ID: string;
  SOURCE_DESCRIPTION: string;
}

// ─── Helper: create a Lead in Bitrix24 CRM ───────────────────────────────────

async function createBitrix24Lead(fields: Bitrix24LeadFields): Promise<void> {
  /**
   * Calls Bitrix24's crm.lead.add REST method via the inbound webhook.
   * The new lead will appear immediately in Bitrix24 → CRM → Leads.
   *
   * Field mapping:
   *   TITLE              → lead name shown in the CRM list view (required)
   *   NAME               → contact's full name
   *   EMAIL / PHONE      → arrays with VALUE and VALUE_TYPE ("WORK")
   *   COMMENTS           → subject + message from the contact form
   *   SOURCE_ID          → "WEB" identifies this as a website inquiry
   *   SOURCE_DESCRIPTION → human-readable source label
   *
   * Success response: { result: <lead_id> }
   * Error response:   { error: "...", error_description: "..." }
   */
  const webhookUrl = process.env.BITRIX24_WEBHOOK_URL!;
  const url = `${webhookUrl}crm.lead.add.json`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fields }),
  });

  const data = await res.json();

  // Only log in development — never log the webhook URL or sensitive fields
  if (process.env.NODE_ENV === "development") {
    console.log(
      "[Bitrix24] Lead creation result:",
      data.result ? `Lead ID ${data.result}` : data.error
    );
  }

  if (!res.ok || data.error) {
    throw new Error(
      `Bitrix24 API error: ${data.error ?? res.status} — ${data.error_description ?? res.statusText}`
    );
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
      _gotcha?: string;
    };

    // ── 2. Honeypot spam check ───────────────────────────────────────────────
    // The hidden _gotcha field is left empty by real users but filled by bots.
    // Return a fake success so bots don't know they were blocked.
    if (body._gotcha) {
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
    if (name && name.length > 200) errors.push("Name is too long.");
    if (message && message.length > 5000) errors.push("Message is too long.");

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, error: errors.join(" ") },
        { status: 400 }
      );
    }

    // ── 4. Check required environment variable ───────────────────────────────
    if (!process.env.BITRIX24_WEBHOOK_URL) {
      console.error("[Contact] Missing BITRIX24_WEBHOOK_URL environment variable.");
      return NextResponse.json(
        { success: false, error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // ── 5. Build the lead payload ────────────────────────────────────────────
    const fields: Bitrix24LeadFields = {
      // TITLE is what appears in the Bitrix24 CRM leads list view
      TITLE: `Website Inquiry — ${name.trim()}`,
      NAME: name.trim(),
      EMAIL: [{ VALUE: email.trim().toLowerCase(), VALUE_TYPE: "WORK" }],
      // Only include PHONE array if the user provided a number
      PHONE: phone?.trim()
        ? [{ VALUE: phone.trim(), VALUE_TYPE: "WORK" }]
        : [],
      // Combine subject + message so full context is visible in Bitrix24
      COMMENTS: subject?.trim()
        ? `Subject: ${subject.trim()}\n\n${message.trim()}`
        : message.trim(),
      SOURCE_ID: "WEB",
      SOURCE_DESCRIPTION: "Contact form submission from kamalafarms.com",
    };

    // ── 6. Create the lead in Bitrix24 CRM ───────────────────────────────────
    await createBitrix24Lead(fields);

    // ── 7. Return success ────────────────────────────────────────────────────
    return NextResponse.json({ success: true });
  } catch (err) {
    // Log full error server-side only; return a safe generic message to the client
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

// Reject non-POST methods explicitly
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
