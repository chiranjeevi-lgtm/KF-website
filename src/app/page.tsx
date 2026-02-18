// import { SectionWrapper, Heading, StatCounter, Card, Button } from "@/components/ui";
// import { IMPACT_STATS } from "@/lib/constants";

// /**
//  * HOME PAGE
//  * =========
//  * Collaborator: [Assign Name]
//  *
//  * Sections to build (reference: kamalafarms.com):
//  *
//  * 1. HERO SECTION
//  *    - Full-width slider/carousel with overlay text
//  *    - Headline: "Making Sustainable Agriculture Easy and Rewarding"
//  *    - CTA buttons: "Our Services" + "Contact Us"
//  *    - Use Swiper.js for the carousel (already installed)
//  *
//  * 2. ABOUT PREVIEW
//  *    - Two-column layout: image left, text right
//  *    - Brief company intro + "Learn More" link to /about
//  *
//  * 3. SERVICES OVERVIEW
//  *    - Grid of 8 service cards linking to /services/[slug]
//  *    - Use the <Card> component from @/components/ui
//  *    - Service data available in @/content/services
//  *
//  * 4. IMPACT STATISTICS
//  *    - Row of animated stat counters (scroll-triggered)
//  *    - Use the <StatCounter> component from @/components/ui
//  *    - Stats data available in @/lib/constants (IMPACT_STATS)
//  *
//  * 5. WHY CHOOSE US
//  *    - Feature list or icon grid
//  *    - Highlight unique selling points
//  *
//  * 6. TESTIMONIALS
//  *    - Carousel of client testimonials
//  *    - Use Swiper.js for rotation
//  *
//  * 7. BLOG PREVIEW
//  *    - Latest 3 blog posts in a grid
//  *    - Use the <Card> component
//  *    - Link to /blog for full listing
//  *
//  * 8. CTA SECTION
//  *    - Call-to-action banner with "Get a Quote" button
//  *    - Green background with white text
//  */

// export default function HomePage() {
//   return (
//     <>
//       {/* HERO SECTION - TODO: Implement full-width slider */}
//       <section className="relative flex min-h-[600px] items-center justify-center bg-dark">
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="font-heading text-5xl md:text-7xl uppercase mb-4">
//             Kamala Farms
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
//             Making Sustainable Agriculture Easy and Rewarding to Everyone
//           </p>
//           <div className="flex gap-4 justify-center flex-wrap">
//             <Button variant="primary" size="lg">
//               Our Services
//             </Button>
//             <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dark">
//               Contact Us
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT PREVIEW - TODO: Add image + company intro */}
//       <SectionWrapper>
//         <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
//           <div className="h-80 rounded-lg bg-light-gray flex items-center justify-center text-gray-900">
//             {/* TODO: Replace with actual image */}
//             [Company Image Placeholder]
//           </div>
//           <div>
//             <Heading as="h2" subtitle="Who We Are">
//               About Kamala Farms
//             </Heading>
//             <p className="text-gray-900 leading-relaxed mb-6">
//               Kamala Farms is a hydroponics company addressing food security, food
//               transparency and accessibility to nutritious food. Founded in 2017, we have
//               served 25+ clients across PAN India.
//             </p>
//             <Button variant="outline">Learn More</Button>
//           </div>
//         </div>
//       </SectionWrapper>

//       {/* IMPACT STATISTICS */}
//       <SectionWrapper background="primary">
//         <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
//           {IMPACT_STATS.map((stat) => (
//             <StatCounter
//               key={stat.label}
//               value={stat.value}
//               label={stat.label}
//               suffix={stat.suffix}
//               className="text-white [&>div]:text-white"
//             />
//           ))}
//         </div>
//       </SectionWrapper>

//       {/* SERVICES OVERVIEW - TODO: Import services data and render cards */}
//       <SectionWrapper background="light">
//         <Heading as="h2" subtitle="What We Offer" className="text-center">
//           Our Services
//         </Heading>
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {/* TODO: Map over services data from @/content/services */}
//           {["Site Design & Planning", "Turnkey Setup", "Farm Management", "Training"].map(
//             (service) => (
//               <Card
//                 key={service}
//                 title={service}
//                 description="Description of this service will go here. Update with actual content."
//                 href="/services"
//               />
//             )
//           )}
//         </div>
//       </SectionWrapper>

//       {/* TESTIMONIALS - TODO: Implement Swiper carousel */}
//       <SectionWrapper>
//         <Heading as="h2" subtitle="What Our Clients Say" className="text-center">
//           Testimonials
//         </Heading>
//         <p className="text-center text-gray-900">
//           [TODO: Add testimonial carousel using Swiper.js]
//         </p>
//       </SectionWrapper>

//       {/* CTA SECTION */}
//       <SectionWrapper background="primary">
//         <div className="text-center">
//           <Heading as="h2" className="text-white">
//             Ready to Start Your Farm?
//           </Heading>
//           <p className="text-white/80 mb-8 text-lg">
//             Get in touch with us today for a free consultation.
//           </p>
//           <Button variant="secondary" size="lg">
//             Get a Quote
//           </Button>
//         </div>
//       </SectionWrapper>
//     </>
//   );
// }

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui";
import TestimonialSlider from "./testimonial-slider";
import VideoPopup from "@/components/VideoPopup";
import {
  IconSiteDesign,
  IconTurnkeySetup,
  IconFarmManagement,
  IconTraining,
  IconContractFarming,
  IconSubsidySupport,
} from "./service-icons";

const END_TO_END_SERVICES = [
  {
    title: "Site Design & Planning",
    description: "Smart planning for land utilization, irrigation, and greenhouse/hydroponic structures to maximize efficiency.",
    icon: IconSiteDesign,
    href: "/services/site-audit-dpr-subsidy",
  },
  {
    title: "Turnkey Setup",
    description: "From concept to completion\u2014we design, build, and hand over fully operational farms.",
    icon: IconTurnkeySetup,
    href: "/services/turnkey-setup",
  },
  {
    title: "Farm Management",
    description: "Professional farm operations and crop management support to ensure productivity and profitability.",
    icon: IconFarmManagement,
    href: "/services/turnkey-setup",
  },
  {
    title: "Training & Capacity Building",
    description: "Hands-on workshops and skill development programs to empower new and experienced farmers.",
    icon: IconTraining,
    href: "/services/training",
  },
  {
    title: "Contract Farming",
    description: "Secure partnerships with assured buyback models, giving farmers stability and guaranteed markets.",
    icon: IconContractFarming,
    href: "/services/turnkey-setup",
  },
  {
    title: "Smart Agri Subsidy Support",
    description: "End-to-end guidance on government schemes, subsidies, and approvals to maximize project returns.",
    icon: IconSubsidySupport,
    href: "/services/site-audit-dpr-subsidy",
  },
];


const CLIENT_STORIES = [
  {
    title: "Vikram's High-Tech Hydroponic Farm Setup",
    image: "https://kamalafarms.com/wp-content/uploads/2025/09/irrigation-01-890x664.jpg",
    href: "/portfolio/vikrams-high-tech-hydroponic-farm-setup",
  },
  {
    title: "Arun & Meera's Hydroponic Cucumber Venture",
    image: "https://kamalafarms.com/wp-content/uploads/2025/09/contract-farming.jpg",
    href: "/portfolio/arun-meeras-hydroponic-cucumber-venture",
  },
  {
    title: "Karthik & Krishna's Hydroponic Turmeric Success",
    image: "https://kamalafarms.com/wp-content/uploads/2025/09/Enhancing-Crop-Quality-and-quantity-Progressive-Hydroponic-Agriculture-Workshop-in-Hyderabad.jpg",
    href: "/portfolio/karthik-krishnas-hydroponic-turmeric-success",
  },
];

const BLOG_POSTS = [
  {
    title: "The Benefits of Starting Hydroponic Farming",
    image: "https://kamalafarms.com/wp-content/uploads/2025/09/benefits-starting-polyhouse.jpg",
    href: "/blog",
  },
  {
    title: "Hydroponics Investment in Hyderabad: A Beginner's Guide",
    image: "https://kamalafarms.com/wp-content/uploads/2025/09/healthy-poyhouse.jpg",
    href: "/blog",
  },
  {
    title: "What is Automated Hydroponic Farming System and How it Works?",
    image: "https://kamalafarms.com/wp-content/uploads/2025/09/hydroponics-investments-in-hyderabad.jpg",
    href: "/blog",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[90vh] min-h-[600px]">
        <img
          src="/images/hero/hero-banner.png"
          alt="Kamala Farms greenhouse at sunset"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </section>

      {/* ===== ABOUT KAMALA FARMS ===== */}
      <SectionWrapper compact>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          <div className="relative h-[400px] overflow-hidden bg-light-gray">
            <img
              src="/images/about/home-about.jpg"
              alt="Kamala Farms sustainable agriculture"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-5xl uppercase text-dark mb-6">
              About Kamala Farms
            </h2>
            <p className="text-gray-900 leading-relaxed text-lg mb-4 text-justify">
              Kamala Farms is a one-stop partner providing 360&deg; support from ideation
              and setup through to harvest and market success in sustainable agriculture.
            </p>
            <p className="text-gray-900 leading-relaxed text-lg mb-8 text-justify">
              At Kamala Farms, we make farming smarter with hydroponics and sustainable
              agriculture solutions. From building commercial hydroponic farms to offering
              training and support for new growers, we&apos;re on a mission to make
              healthy, profitable, and climate-smart farming accessible to everyone.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#FF6B35] px-6 py-3 font-heading text-sm uppercase tracking-wider text-white transition-colors hover:bg-[#e55a28]"
            >
              About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* ===== END-TO-END SOLUTIONS ===== */}
      <SectionWrapper background="light" compact>
        <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl uppercase text-dark leading-tight mb-8">
          We Provide End-to-End Farming &amp; Hydroponic Solutions Tailored to Every Grower.
        </h2>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-heading text-sm uppercase tracking-wider text-white transition-colors hover:bg-primary-dark"
        >
          Our Services
        </Link>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {END_TO_END_SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block border-l border-gray-200 pl-6"
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

      {/* ===== ISSUES BEFORE STARTING UP ===== */}
      <SectionWrapper compact>
        <h2 className="font-heading text-3xl md:text-5xl uppercase text-dark text-center mb-16">
          People Face These General Issues Before Starting Up.
        </h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 max-w-5xl mx-auto">
          {[
            { percent: 75, label: "Lack to Time for Farm Operations" },
            { percent: 89, label: "Fear of Crop Loss" },
            { percent: 95, label: "Unknown Process for Utilising Grants and Subsidies" },
            { percent: 80, label: "Unpredictable Market Selling Conditions" },
          ].map((item) => {
            const radius = 70;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (item.percent / 100) * circumference;
            return (
              <div key={item.label} className="flex items-center gap-6">
                <div className="relative flex-shrink-0">
                  <svg width="180" height="180" viewBox="0 0 180 180">
                    {/* Background track */}
                    <circle
                      cx="90"
                      cy="90"
                      r={radius}
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="14"
                    />
                    {/* Progress arc */}
                    <circle
                      cx="90"
                      cy="90"
                      r={radius}
                      fill="none"
                      stroke="#4BAF47"
                      strokeWidth="14"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      transform="rotate(-90 90 90)"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center font-heading text-2xl md:text-3xl text-dark">
                    {item.percent}%
                  </span>
                </div>
                <p className="font-heading text-base md:text-lg uppercase tracking-wide text-dark leading-snug">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>


      {/* ===== CLIENT SUCCESS STORIES ===== */}
      <SectionWrapper background="light" compact>
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-900 mb-4">
            Real Results
          </p>
          <h2 className="font-heading text-3xl md:text-5xl uppercase text-dark">
            Client Success Stories
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {CLIENT_STORIES.map((story) => (
            <Link
              key={story.title}
              href={story.href}
              className="group block overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative h-56 bg-gray-200 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg uppercase leading-snug text-dark">
                  {story.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== BLOGS ===== */}
      <SectionWrapper compact>
        <h2 className="font-heading text-3xl md:text-5xl uppercase text-dark text-center mb-12">
          Blogs
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group overflow-hidden bg-white shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-gray-900 mb-2">
                  Kamalafarms &middot;
                </p>
                <h3 className="font-heading text-lg uppercase leading-snug text-dark group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#FF6B35] px-8 py-4 font-heading text-sm uppercase tracking-wider text-white transition-colors hover:bg-[#e55a28]"
          >
            Read More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* ===== TESTIMONIALS + VIDEO ===== */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — Testimonials */}
        <div className="bg-dark px-8 py-16 md:px-16 md:py-20 flex items-center justify-center">
          <TestimonialSlider />
        </div>

        {/* Right — Video */}
        <div className="relative bg-black min-h-[400px] lg:min-h-0">
          <VideoPopup youtubeId="xA_utZ7NxS4" />
        </div>
      </section>

      {/* ===== WE FOCUSED AREAS ===== */}
      <section className="bg-[#FFF8F0] py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl uppercase text-primary mb-8">
            We Focused Areas
          </h2>
          <p className="font-heading text-sm md:text-base uppercase tracking-wide text-dark leading-relaxed">
            Hydroponics Farming in Telangana, Hydroponics Farming in Andhra Pradesh, Hydroponics Farming in Karnataka, Hydroponics Farming in Gujarat, Hydroponics Farming in Madhya Pradesh, Hydroponics Farming in Dubai &amp; Abu Dhabi
          </p>
        </div>
      </section>

      {/* ===== GET STARTED CTA ===== */}
      <SectionWrapper background="primary" compact>
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-5xl uppercase text-white mb-8">
            Get Started
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-dark px-8 py-4 font-heading text-sm uppercase tracking-wider text-white transition-colors hover:bg-dark/80"
          >
            Build Your Project Now
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}