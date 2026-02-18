import type { Metadata } from "next";
import { SectionWrapper, Heading, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Kamala Farms portfolio of successful hydroponics and agriculture projects across India.",
};

/**
 * PORTFOLIO / CASE STUDIES PAGE
 * =============================
 * Collaborator: [Assign Name]
 *
 * Sections to build (reference: kamalafarms.com portfolio/case studies):
 *
 * 1. HERO BANNER
 *    - "Our Portfolio" title
 *
 * 2. PORTFOLIO FILTER (optional)
 *    - Filter by category: All, Hydroponics, Soil Farming, etc.
 *
 * 3. PROJECT GRID
 *    - Grid of project cards with images
 *    - Each card: project image, title, location, brief description
 *    - Use the <Card> component
 *
 * 4. CLIENT TESTIMONIALS
 *    - Testimonials specific to showcased projects
 *
 * 5. CTA SECTION
 *    - "Start your project with us" call-to-action
 */

// TODO: Move this to @/content/portfolio/index.ts when adding real data
const placeholderProjects = [
  {
    title: "Project Alpha",
    location: "Hyderabad, Telangana",
    description: "10,000 sq ft hydroponic farm setup with automated irrigation systems.",
  },
  {
    title: "Project Beta",
    location: "Bangalore, Karnataka",
    description: "Rooftop hydroponic farm for a corporate campus with 50+ crop varieties.",
  },
  {
    title: "Project Gamma",
    location: "Chennai, Tamil Nadu",
    description: "Community farming initiative training 100+ local farmers.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="relative flex h-[90vh] min-h-[600px] items-center justify-center bg-dark">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-5xl md:text-7xl uppercase mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Showcasing our successful projects across India
          </p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <SectionWrapper>
        <Heading
          as="h2"
          subtitle="Real projects, real results"
          className="text-center"
        >
          Our Projects
        </Heading>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderProjects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={`${project.location} — ${project.description}`}
            />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-900">
          [TODO: Replace with real project data and images]
        </p>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="primary">
        <div className="text-center">
          <Heading as="h2" className="text-white">
            Want to See Your Farm Here?
          </Heading>
          <p className="text-white/80 mb-8 text-lg">
            Let&apos;s build something amazing together.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
