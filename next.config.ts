import type { NextConfig } from "next";

const securityHeaders = [
  {
    // Prevents clickjacking by blocking iframe embedding on other sites
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    // Stops browsers from MIME-type sniffing
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Controls Referer header — sends origin only on cross-origin requests
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Restricts access to browser features your site doesn't need
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    // Forces HTTPS for 1 year
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
