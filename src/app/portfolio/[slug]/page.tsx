import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { PORTFOLIO_PROJECTS } from "@/content/portfolio";
import { SectionWrapper } from "@/components/ui";

function parseMarkdown(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Kamala Farms`,
    description: `Kamala Farms portfolio: ${project.title}`,
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project || !project.background) {
    notFound();
  }

  return (
    <>
      {/* HERO BANNER */}
      <section className="relative flex h-[calc(70vh-88px)] min-h-[400px] mt-[88px] items-center justify-center bg-dark">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl uppercase mb-4">
            {project.title}
          </h1>
          {project.date && (
            <p className="text-lg text-white/80">{project.date}</p>
          )}
        </div>
      </section>

      {/* BACKGROUND */}
      <SectionWrapper compact>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-dark mb-6">
            Background
          </h2>
          <div className="text-gray-900 leading-relaxed text-lg space-y-4">
            {project.background.split("\n").map((paragraph, idx) => (
              <p key={idx}>{parseMarkdown(paragraph)}</p>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FARM SETUP */}
      {project.farmSetup.length > 0 && (
        <SectionWrapper background="light" compact>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl uppercase text-dark mb-8">
              Farm Setup by Kamala Farms
            </h2>
            <ul className="space-y-6">
              {project.farmSetup.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                  <div>
                    <span className="font-bold text-dark">{item.title}:</span>{" "}
                    <span className="text-gray-900 leading-relaxed">
                      {item.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </SectionWrapper>
      )}

      {/* OUTCOME (for projects using the simple structure) */}
      {project.outcome && (
        <SectionWrapper compact>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl uppercase text-dark mb-6">
              Outcome
            </h2>
            <div className="text-gray-900 leading-relaxed text-lg space-y-4">
              {project.outcome.split("\n").map((paragraph, idx) => (
                <p key={idx}>{parseMarkdown(paragraph)}</p>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* FLEXIBLE SECTIONS (for projects using sections array) */}
      {project.sections && project.sections.map((section, sIdx) => (
        <SectionWrapper key={sIdx} background={sIdx % 2 === 0 ? "light" : "white"} compact>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl uppercase text-dark mb-6">
              {section.heading}
            </h2>
            {section.paragraphs && (
              <div className="text-gray-900 leading-relaxed text-lg space-y-4">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{parseMarkdown(p)}</p>
                ))}
              </div>
            )}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-4">
                {section.bullets.map((item, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-3" />
                    <div className="text-gray-900 leading-relaxed">
                      {item.description ? (
                        <>{parseMarkdown(item.description)}</>
                      ) : (
                        <>{parseMarkdown(item.title)}</>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </SectionWrapper>
      ))}

      {/* CTA */}
      <SectionWrapper background="primary" compact>
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-5xl uppercase text-white mb-6">
            Want to See Your Farm Here?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Let&apos;s build something amazing together.
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
