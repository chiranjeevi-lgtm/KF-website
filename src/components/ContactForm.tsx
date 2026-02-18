"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          // Honeypot — read from the hidden input; bots fill it, real users don't
          _gotcha: (e.currentTarget.elements.namedItem("_gotcha") as HTMLInputElement)?.value ?? "",
        }),
      });

      const json = await response.json();

      if (json.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      {/* CONTACT FORM */}
      <div>
        <h2 className="font-heading text-3xl md:text-4xl uppercase text-dark mb-8">Send Us a Message</h2>

        {submitStatus === "success" && (
          <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-800">
            ✓ Thank you! We'll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 rounded-lg bg-red-100 p-4 text-red-800">
            ✗ {errorMsg || "Something went wrong. Please try again."}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot — hidden from real users, catches bots that auto-fill all fields */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your@email.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+91 XXXXX XXXXX"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-dark mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              placeholder="How can we help?"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              placeholder="Tell us about your project and requirements..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="relative w-full inline-flex bg-primary hover:bg-primary/90 text-white font-heading text-lg uppercase tracking-wide py-4 px-12 transition-all duration-300 overflow-hidden group items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </span>
            <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
        </form>
      </div>

      {/* CONTACT INFO & MAP */}
      <div>
        <h2 className="font-heading text-3xl md:text-4xl uppercase text-dark mb-8">Get In Touch</h2>

        <div className="space-y-8 mb-10">
          {/* Address */}
          <div className="flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-dark text-lg mb-1">Office Address</h3>
              <p className="text-gray-600 leading-relaxed">{CONTACT_INFO.address}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-dark text-lg mb-1">Phone</h3>
              <p className="text-gray-600">
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary transition">
                  {CONTACT_INFO.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-dark text-lg mb-1">Email</h3>
              <p className="text-gray-600">
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition">
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Clock className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-dark text-lg mb-1">Business Hours</h3>
              <p className="text-gray-600">{CONTACT_INFO.businessHours}</p>
            </div>
          </div>
        </div>

        {/* MAP EMBED */}
        <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
         <iframe
  src="https://www.google.com/maps?q=IDFC%20First%20Bank%2C%20Veer%20Chambers%2C%20Co-karma%2C%204th%20Floor%2C%201-10-63%2F1%2F1%2C%20Chikoti%20Garden%20Rd%2C%20Begumpet%2C%20Hyderabad%2C%20Telangana%20500016&output=embed"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full rounded-lg"
/>

        </div>
      </div>
    </div>
  );
}
