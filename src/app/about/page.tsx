import type { Metadata } from "next";
import Link from "next/link";
import { Eye } from "lucide-react";
import { SectionWrapper, Heading } from "@/components/ui";
import ImpactStats from "./impact-stats";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Kamala Farms is a hydroponics company aimed to address food security, food transparency and accessibility to nutritious food. Founded in 2017.",
};

const TEAM_MEMBERS = [
  {
    name: "Meghana Rao",
    role: "Co-Founder, CEO",
    image: "/images/team/meghana-rao.jpg",
  },
  {
    name: "Sandeep Reddy",
    role: "Co-Founder, CSO",
    image: "/images/team/sandeep-reddy.jpg",
  },
  {
    name: "Dr Chenna Kesava Reddy Sangati",
    role: "Research and Development",
    image: "/images/team/chenna-kesava-reddy.jpg",
  },
  {
    name: "Alugadda Srinivasa Rao",
    role: "Mentor & Advisory",
    image: null,
  },
  {
    name: "Chiranjeevi Rayapudi",
    role: "Chief Technology Officer",
    image: "/images/team/chiranjeevi-rayapudi.jpg",
    objectPosition: "top",
  },
  {
    name: "Kandi Ashok",
    role: "Expert Advisory",
    image: null,
  },
];

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="relative flex h-[calc(90vh-88px)] min-h-[512px] mt-[88px] items-center justify-center bg-dark">
        <img
          src="/images/hero/about-us-hero.jpg"
          alt="About Kamala Farms"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Our Vision Is To Make Sustainable Agriculture Easy And Rewarding To Everyone.
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <SectionWrapper compact>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden bg-light-gray">
            <img
              src="/images/about/company-overview.png"
              alt="Kamala Farms - Who We Are"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Heading as="h2" subtitle="Founded in 2017">
              Who We Are
            </Heading>
            <p className="text-gray-900 leading-relaxed mb-4">
              Kamala Farms is primarily a Hydroponics company aimed to address challenges
              like food security, food transparency and accessibility to nutritious food.
              It is a dream venture built by Meghana Rao and Sandeep Reddy in 2017 with
              the intention of producing fresh, nutritious, pesticide-free food available
              to consume for everyone all around India to improve quality of life. Because
              a nation that eats healthy stays healthy.
            </p>
            <p className="text-gray-900 leading-relaxed">
              The company have since been crucial in changing the face of hydroponics and
              sustainable agricultural market. Successfully served more than 25+ clients
              (PAN India) in both tier 1 and tier 2 cities for their Hydroponic farm
              setups.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* OUR PURPOSE — VISION & MISSION */}
      <SectionWrapper background="light" compact>
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-900 mb-4">
            Our Purpose
          </p>
          <h2 className="font-heading text-3xl md:text-5xl uppercase text-dark">
            Transforming Agriculture — Simple,
            <br />
            Sustainable, Rewarding
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Vision */}
          <div className="group cursor-pointer text-center p-8">
            <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:rounded-[40%_60%_55%_45%/50%_40%_60%_50%]">
              <Eye className="h-14 w-14 text-primary transition-colors duration-500 group-hover:text-white" />
            </div>
            <h3 className="font-heading text-2xl uppercase mb-4 text-dark">
              Our Vision
            </h3>
            <p className="text-gray-900 leading-relaxed">
              To make sustainable agriculture simple, accessible, and rewarding for
              everyone — so that every meal in the future is rich in nutrients and free
              from harm.
            </p>
          </div>

          {/* Mission — target with leaf/arrow */}
          <div className="group cursor-pointer text-center p-8">
            <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:rounded-[40%_60%_55%_45%/50%_40%_60%_50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-14 w-14 text-primary transition-colors duration-500 group-hover:text-white"
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                <path d="M12 12L18 6" />
                <path d="M18 6c-1 1-2.5 1.5-3 2" />
                <path d="M18 6c-1 1-1.5 2.5-2 3" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl uppercase mb-4 text-dark">
              Our Mission
            </h3>
            <p className="text-gray-900 leading-relaxed">
              To empower growers and dreamers with end-to-end hydroponic solutions, expert
              guidance, and affordable services — making climate-smart farming a reality,
              one farm at a time.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* OUR STORY */}
      <SectionWrapper compact>
        <Heading as="h2">Our Story</Heading>
        <p className="text-gray-900 leading-relaxed text-lg mb-6">
          Kamala Farms was born out of a passion for farming and a vision to make
          agriculture smarter, sustainable, and future-ready. Since 2017, we&apos;ve
          been on a mission to transform Indian agriculture from climate-stressed
          practices to climate-smart solutions powered by hydroponics.
        </p>
        <p className="text-gray-900 leading-relaxed text-lg mb-10">
          From training over{" "}
          <strong className="text-dark">18,000+ learners</strong> to setting up{" "}
          <strong className="text-dark">110,000+ sq. ft. of farms</strong> and
          guiding <strong className="text-dark">600+ acres</strong> into sustainable
          cultivation, our journey has been about turning ideas into impact. Whether
          it&apos;s urban rooftops, commercial greenhouses, or community farms,
          we&apos;ve helped people grow more with less — less water, less land, and
          less uncertainty.
        </p>

        {/* IMPACT STAT CARDS */}
        <ImpactStats />

        {/* CLOSING STATEMENT */}
        <p className="text-gray-900 leading-relaxed text-lg mt-10 mb-4">
          Kamala Farms has become a trusted name in hydroponics, blending innovation
          with hands-on expertise. And{" "}
          <strong className="text-dark">this is just the beginning</strong>. With
          new projects in{" "}
          <strong className="text-dark">India and beyond</strong>, and a strong
          focus on R&D for niche crops and superfoods, we&apos;re shaping farming
          that works for both growers and the planet.
        </p>
        <p className="text-dark font-semibold text-lg">
          At Kamala Farms, we don&apos;t just grow crops — we grow possibilities.
        </p>
      </SectionWrapper>

      {/* MANAGEMENT TEAM */}
      <SectionWrapper compact>
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-dark">
            Management Team
          </h2>
          <p className="mt-3 text-lg text-gray-900 font-semibold">
            Meet The Minds Behind Kamala Farms
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="mx-auto mb-4 h-36 w-36 overflow-hidden rounded-full bg-light-gray">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: member.objectPosition || "center" }}
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-primary rounded-full">
                    <span className="text-white text-3xl font-bold tracking-wide">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="text-sm font-semibold text-dark">{member.name}</h3>
              <p className="text-xs text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA SECTION */}
      <SectionWrapper background="primary" compact>
        <div className="text-center">
          <Heading as="h2" className="text-white">
            Ready to Start Your Farm?
          </Heading>
          <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
            Get in touch with us today for a free consultation on your hydroponics
            project.
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