"use client";

import { useState } from "react";

export function ServiceContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "farm-visit",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          serviceType: "farm-visit",
          message: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitStatus === "success" && (
        <div className="rounded-lg bg-green-100 p-4 text-green-800">
          ✓ Thank you! We'll get in touch with you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="rounded-lg bg-red-100 p-4 text-red-800">
          ✗ Something went wrong. Please try again.
        </div>
      )}

      <div className="relative style-line icon-name">
        <label htmlFor="name" className="sr-only">
          Name *
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Name"
            className="w-full border-0 border-b border-gray-300 bg-transparent pl-9 pr-0 py-3 text-sm text-gray-700 placeholder:text-gray-400 transition-all duration-300 focus:border-b focus:border-primary focus:outline-none"
          />
          <span className="line"></span>
        </div>
      </div>

      <div className="relative style-line icon-phone">
        <label htmlFor="phone" className="sr-only">
          Phone *
        </label>
        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="Phone"
            className="w-full border-0 border-b border-gray-300 bg-transparent pl-9 pr-0 py-3 text-sm text-gray-700 placeholder:text-gray-400 transition-all duration-300 focus:border-b focus:border-primary focus:outline-none"
          />
          <span className="line"></span>
        </div>
      </div>

      <div className="relative style-line icon-email">
        <label htmlFor="email" className="sr-only">
          Email Address *
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Email Address"
            className="w-full border-0 border-b border-gray-300 bg-transparent pl-9 pr-0 py-3 text-sm text-gray-700 placeholder:text-gray-400 transition-all duration-300 focus:border-b focus:border-primary focus:outline-none"
          />
          <span className="line"></span>
        </div>
      </div>

      <div className="relative style-line icon-subject">
        <label htmlFor="serviceType" className="sr-only">
          What are you interested in? *
        </label>
        <div className="relative">
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            className="w-full border-0 border-b border-gray-300 bg-transparent pl-9 pr-0 py-3 text-sm text-gray-700 transition-all duration-300 focus:border-b focus:border-primary focus:outline-none appearance-none cursor-pointer"
          >
            <option value="">Select</option>
            <option value="farm-visit">Farm Visit</option>
            <option value="business-consultation">Business Consultation</option>
            <option value="farm-setup">Farm Setup</option>
            <option value="workshop">Workshop</option>
          </select>
          <span className="line"></span>
        </div>
      </div>

      <div className="relative pt-4">
        <label htmlFor="message" className="block text-sm text-gray-600 mb-3">
          How can we help? Feel free to get in touch
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          placeholder=""
          className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 transition-all duration-300 focus:border-gray-400 focus:outline-none resize-none"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="relative bg-primary hover:bg-primary/90 text-white font-heading text-lg uppercase tracking-wide py-4 px-12 transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
        >
          <span className="relative z-10 flex items-center gap-3">
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
            <span>{isSubmitting ? "Submitting..." : "Get In Touch"}</span>
          </span>
          <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
      </div>
    </form>
  );
}
