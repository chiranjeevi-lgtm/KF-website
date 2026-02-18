import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, Youtube } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS, FOOTER_QUICK_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Kamala Farms"
                className="h-12 w-auto"
              />
              <span className="font-heading text-3xl text-primary uppercase">
                Kamala Farms
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {SITE_CONFIG.description}
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-400 transition-colors hover:text-primary"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-xl uppercase tracking-wider">Our Services</h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Site Audit, DPR & Subsidy", href: "/services/site-audit-dpr-subsidy" },
                { label: "Turnkey Setup", href: "/services/turnkey-setup" },
                { label: "Training", href: "/services/training" },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm text-gray-400 hover:text-primary"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-gray-400 hover:text-primary"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-gray-400">{CONTACT_INFO.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}