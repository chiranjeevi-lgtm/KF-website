import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Kamala Farms",
  description:
    "Get in touch with Kamala Farms. We're here to help with consultations, quotes, and inquiries about hydroponics farming solutions.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex h-[calc(90vh-88px)] min-h-[512px] mt-[88px] items-center justify-center bg-dark">
        <img
          src="/images/hero/contact-us-hero.jpg"
          alt="Contact Us"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/5" />
      </section>

      {/* CONTACT SECTION */}
      <SectionWrapper>
        <ContactForm />
      </SectionWrapper>

      {/* FAQ OR ADDITIONAL INFO SECTION */}
      <section className="bg-light-gray py-16 md:py-20">
        <SectionWrapper>
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-dark text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-dark mb-2">What's your typical response time?</h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">Do you offer site consultations?</h3>
              <p className="text-gray-600">
                Yes! We provide free consultations for farm setup and planning. Contact us to schedule.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">What areas do you serve?</h3>
              <p className="text-gray-600">
                We serve Pan India with our services. Our office is based in Hyderabad, Telangana.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">How do I get a quote?</h3>
              <p className="text-gray-600">
                Submit the contact form with your project details, and our team will prepare a customized quote.
              </p>
            </div>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}