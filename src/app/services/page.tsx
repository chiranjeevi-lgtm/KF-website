import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui";
import {
  IconSiteDesign,
  IconTurnkeySetup,
  IconFarmManagement,
  IconTraining,
  IconContractFarming,
  IconSubsidySupport,
  IconRecycling,
} from "../service-icons";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Kamala Farms services: site design, turnkey setup, farm management, training, contract farming, subsidy support, recycling, and soil farming.",
};

const SERVICES = [
  {
    title: "Site Design & Planning",
    description:
      "Smart planning for land utilization, irrigation, and greenhouse/hydroponic structures to maximize efficiency.",
    icon: IconSiteDesign,
    href: "/services/site-audit-dpr-subsidy",
  },
  {
    title: "Turnkey Setup",
    description:
      "From concept to completion\u2014we design, build, and hand over fully operational farms.",
    icon: IconTurnkeySetup,
    href: "/services/turnkey-setup",
  },
  {
    title: "Farm Management",
    description:
      "Professional farm operations and crop management support to ensure productivity and profitability.",
    icon: IconFarmManagement,
    href: "/services/turnkey-setup",
  },
  {
    title: "Training & Capacity Building",
    description:
      "Hands-on workshops and skill development programs to empower new and experienced farmers.",
    icon: IconTraining,
    href: "/services/training",
  },
  {
    title: "Contract Farming",
    description:
      "Secure partnerships with assured buyback models, giving farmers stability and guaranteed markets.",
    icon: IconContractFarming,
    href: "/services/turnkey-setup",
  },
  {
    title: "Smart Agri Subsidy Support",
    description:
      "End-to-end guidance on government schemes, subsidies, and approvals to maximize project returns.",
    icon: IconSubsidySupport,
    href: "/services/site-audit-dpr-subsidy",
  },
  // {
  //   title: "Recycling (Plastic Recycling)",
  //   description:
  //     "Innovative recycling solutions to promote sustainability and reduce farm waste.",
  //   icon: IconRecycling,
  //   href: "/services/recycling",
  // },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="relative flex h-[calc(90vh-88px)] min-h-[512px] mt-[88px] items-center justify-center bg-dark">
        <img
          src="/images/hero/our-services-hero.jpg"
          alt="Our Services"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Comprehensive hydroponics and agriculture solutions for every need
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <SectionWrapper background="light">
        <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl uppercase text-dark leading-tight mb-16">
          We Provide End-to-End Farming &amp; Hydroponic Solutions Tailored to
          Every Grower.
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block border-l border-gray-300 pl-6"
            >
              <service.icon className="h-16 w-16 text-primary mb-5" />
              <h3 className="font-heading text-lg uppercase tracking-wide mb-3 text-dark group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-900 text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="primary">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-5xl uppercase text-white mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Our experts will help you find the right solution for your farm.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-dark px-8 py-4 font-heading text-sm uppercase tracking-wider text-white transition-colors hover:bg-dark/80"
          >
            Contact Us
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}

