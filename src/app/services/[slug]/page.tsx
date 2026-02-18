import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionWrapper, Heading, Button } from "@/components/ui";
import { services, type ServiceSection } from "@/content/services";
import { ServiceContactForm } from "@/components/ServiceContactForm";
import { PolyhouseCarousel } from "@/components/PolyhouseCarousel";
import {
  IconGIFramework,
  IconCladdingSheets,
  IconCoolingSystems,
  IconIrrigationSystems,
  IconHydroponicChannels,
  IconPowerBackup,
  IconFarmSetup,
  IconAMC,
  IconCropCycle,
  IconProfitSharing,
} from "@/app/service-icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  IconGIFramework,
  IconCladdingSheets,
  IconCoolingSystems,
  IconIrrigationSystems,
  IconHydroponicChannels,
  IconPowerBackup,
  IconFarmSetup,
  IconAMC,
  IconCropCycle,
  IconProfitSharing,
};

// Helper function to parse simple markdown bold syntax
function parseMarkdown(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderSectionTextContent(section: ServiceSection) {
  return (
    <div className="flex flex-col justify-start">
      <h3 className="font-heading text-3xl md:text-4xl uppercase text-dark mb-6">
        {section.title}
      </h3>
      {section.description && (
        <div className="text-gray-900 leading-relaxed space-y-4 whitespace-pre-line">
          {section.description.split('\n').map((paragraph, pIndex) => (
            <p key={pIndex}>{parseMarkdown(paragraph)}</p>
          ))}
        </div>
      )}

      {/* Bullet Points */}
      {section.bulletPoints && section.bulletPoints.length > 0 && (
        <ul className={`mt-6 space-y-3 ${section.roundBullets || section.numberedPoints ? "list-none" : ""}`}>
          {section.bulletPoints.map((point, pIndex) => (
            <li key={pIndex} className="flex items-start gap-3">
              {section.numberedPoints ? (
                <span className="text-gray-900 flex-shrink-0 mt-0.5">{pIndex + 1}.</span>
              ) : section.roundBullets ? (
                <span className="w-1.5 h-1.5 rounded-full bg-dark flex-shrink-0 mt-2" />
              ) : (
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
              <span className="text-gray-900 leading-relaxed">{parseMarkdown(point)}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Bullet Items with sub-points */}
      {section.bulletItems && section.bulletItems.length > 0 && (
        <ul className="mt-6 space-y-3 list-none">
          {section.bulletItems.map((item, bIndex) => (
            <li key={bIndex}>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-dark flex-shrink-0 mt-2" />
                <span className="text-gray-900 leading-relaxed">{parseMarkdown(item.text)}</span>
              </div>
              {item.subPoints && item.subPoints.length > 0 && (
                <ul className="mt-2 ml-6 space-y-2 list-none">
                  {item.subPoints.map((sub, sIndex) => (
                    <li key={sIndex} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0 mt-2" />
                      <span className="text-gray-900 leading-relaxed">{parseMarkdown(sub)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Footer Note */}
      {section.footerNote && (
        <div className="mt-6 text-gray-900 leading-relaxed space-y-2">
          {section.footerNote.split('\n').map((line, lIndex) => (
            <p key={lIndex}>{parseMarkdown(line)}</p>
          ))}
        </div>
      )}

      {/* Crop Table */}
      {section.showCropTable && section.cropCategories && (
        <div className="mt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {section.cropCategories.map((category, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="font-heading font-bold text-dark text-lg uppercase tracking-wide mb-4 pb-2 border-b-2 border-primary">
                  {category.name}
                </div>
                <div className="space-y-2">
                  {category.crops.map((crop, cropIdx) => (
                    <div key={cropIdx} className={`py-2 px-3 text-sm text-gray-900 ${cropIdx % 2 === 1 ? "bg-gray-50" : ""}`}>
                      {crop}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {section.cropFooterText && (
            <p className="mt-8 text-gray-900 text-base">{section.cropFooterText}</p>
          )}
        </div>
      )}

      {/* Button */}
      {section.buttonText && section.buttonLink && (
        <div className="mt-8">
          <a
            href={section.buttonLink}
            className="relative inline-flex bg-primary hover:bg-primary/90 text-white font-heading text-lg uppercase tracking-wide py-4 px-12 transition-all duration-300 overflow-hidden group items-center gap-3"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
              <span>{section.buttonText}</span>
            </span>
            <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>
      )}
    </div>
  );
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Kamala Farms`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Preprocess sections for compact layout (pair non-fullWidth sections side by side)
  const sectionGroups: ServiceSection[][] = [];
  if (service.compactSections && service.sections) {
    let buffer: ServiceSection[] = [];
    service.sections.forEach((section) => {
      if (section.fullWidth) {
        if (buffer.length > 0) { sectionGroups.push([...buffer]); buffer = []; }
        sectionGroups.push([section]);
      } else {
        buffer.push(section);
        if (buffer.length === 2) { sectionGroups.push([...buffer]); buffer = []; }
      }
    });
    if (buffer.length > 0) sectionGroups.push([...buffer]);
  }

  return (
    <>
      {/* HERO BANNER */}
      <section className="relative flex h-[calc(90vh-88px)] min-h-[512px] mt-[88px] items-center justify-center bg-light-gray">
        {service.heroImage && (
          <img
            src={service.heroImage}
            alt={service.title}
            className={`absolute inset-0 h-full w-full object-cover ${(service.slug === "subsidy-support" || service.slug === "training") ? "object-top" : ""}`}
          />
        )}
        {service.heroOverlay !== false && (
          <>
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 text-center text-white px-4">
              <h1 className="font-heading text-5xl md:text-7xl uppercase mb-6">
                Our Services
              </h1>
              <p className="text-2xl md:text-3xl max-w-3xl mx-auto font-heading uppercase">
                {service.tagline || "Laying the foundation for your farm's success"}
              </p>
              {service.heroButtonText && service.heroButtonLink && (
                <div className="mt-8 flex justify-center">
                  <a
                    href={service.heroButtonLink}
                    className="inline-flex items-center gap-2 bg-primary px-5 py-2.5 font-heading text-sm uppercase tracking-wider text-white transition-colors hover:bg-primary-dark"
                  >
                    {service.heroButtonText}
                  </a>
                </div>
              )}
            </div>
          </>
        )}
      </section>

      {/* SERVICE SECTIONS */}
      {service.sections && service.sections.length > 0 && (
        service.compactSections ? (
          <>
            {sectionGroups.map((group, gIndex) => (
              <SectionWrapper key={gIndex} background={gIndex % 2 === 0 ? "white" : "light"} compact>
                {group.length === 1 && group[0].fullWidth ? (
                  <div className="w-full">
                    {renderSectionTextContent(group[0])}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {group.map((section, sIndex) => (
                      <div key={sIndex}>
                        {renderSectionTextContent(section)}
                      </div>
                    ))}
                  </div>
                )}
              </SectionWrapper>
            ))}
          </>
        ) : (
        <>
          {service.sections.map((section, index) => (
            <SectionWrapper key={index} background={index % 2 === 0 ? "white" : "light"} compact>
              {section.fullWidth ? (
                // Full-width layout without image
                <div key={index} className="w-full">
                  {/* Subtitle if provided */}
                  {section.subtitle && (
                    <p className={`text-sm uppercase text-gray-500 mb-2 tracking-wide ${
                      section.centerHeading ? "text-center" : ""
                    }`}>
                      {section.subtitle}
                    </p>
                  )}

                  <h3 className={`font-heading uppercase text-dark mb-6 ${
                    section.largeHeading
                      ? "text-4xl md:text-5xl"
                      : "text-3xl md:text-4xl"
                  } ${section.centerHeading ? "text-center" : ""}`}>
                    {section.title}
                  </h3>
                  <div className="text-gray-900 leading-relaxed space-y-4 whitespace-pre-line">
                    {section.description.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{parseMarkdown(paragraph)}</p>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className={`mt-6 space-y-3 ${section.roundBullets || section.numberedPoints ? "list-none" : ""}`}>
                      {section.bulletPoints.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-3">
                          {section.numberedPoints ? (
                            <span className="text-gray-900 flex-shrink-0 mt-0.5">{pIndex + 1}.</span>
                          ) : section.roundBullets ? (
                            <span className="w-1.5 h-1.5 rounded-full bg-dark flex-shrink-0 mt-2" />
                          ) : (
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                          <span className="text-gray-900 leading-relaxed">{parseMarkdown(point)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Bullet Items with sub-points */}
                  {section.bulletItems && section.bulletItems.length > 0 && (
                    <ul className="mt-6 space-y-3 list-none">
                      {section.bulletItems.map((item, bIndex) => (
                        <li key={bIndex}>
                          <div className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-dark flex-shrink-0 mt-2" />
                            <span className="text-gray-900 leading-relaxed">{parseMarkdown(item.text)}</span>
                          </div>
                          {item.subPoints && item.subPoints.length > 0 && (
                            <ul className="mt-2 ml-6 space-y-2 list-none">
                              {item.subPoints.map((sub, sIndex) => (
                                <li key={sIndex} className="flex items-start gap-3">
                                  <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0 mt-2" />
                                  <span className="text-gray-900 leading-relaxed">{parseMarkdown(sub)}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Process Gallery if enabled */}
                  {section.showProcessGallery && (
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-0 w-full">
                      {[
                        { number: "01", label: "Blueprint/Designs", image: "/images/services/turnkey-setup/blueprint.jpg" },
                        { number: "02", label: "Construction Phase", image: "/images/services/turnkey-setup/construction-phase.jpg" },
                        { number: "03", label: "Hydroponic System Setup", image: "/images/services/turnkey-setup/hydroponic-system-setup.jpg" },
                        { number: "04", label: "Training Session", image: "/images/services/turnkey-setup/training-session.jpg" },
                        { number: "05", label: "Final Look", image: "/images/services/turnkey-setup/final-look.jpg" },
                      ].map((step, idx) => (
                        <div
                          key={idx}
                          className="relative overflow-hidden flex flex-col items-center justify-center"
                          style={{ aspectRatio: "208/249" }}
                        >
                          <img
                            src={step.image}
                            alt={step.label}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40" />
                          <span className="relative text-7xl font-heading text-white mb-4">
                            {step.number}
                          </span>
                          <span className="relative absolute bottom-4 text-sm uppercase text-white font-heading tracking-wider text-center px-2">
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Carousel if enabled */}
                  {section.showCarousel && section.carouselItems && (
                    <PolyhouseCarousel items={section.carouselItems} />
                  )}

                  {/* Key Components if enabled */}
                  {section.showKeyComponents && section.keyComponents && (
                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                      {section.keyComponents.map((component, idx) => {
                        const IconComponent = iconMap[component.iconName];
                        const isLast = idx === section.keyComponents!.length - 1;
                        return (
                          <div
                            key={idx}
                            className={`flex flex-col items-center text-center px-4 py-4 ${
                              !isLast ? "border-r border-gray-300" : ""
                            }`}
                          >
                            <div className="w-20 h-20 mb-4 text-primary">
                              {IconComponent ? (
                                <IconComponent className="w-full h-full" />
                              ) : (
                                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                                  <span className="text-gray-400 text-xs">[Icon]</span>
                                </div>
                              )}
                            </div>
                            <h4 className="font-heading text-sm uppercase tracking-wide text-dark font-medium">
                              {component.title}
                            </h4>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Partnership Model if enabled */}
                  {section.showPartnershipModel && section.partnershipFeatures && (
                    <div className="mt-12">
                      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
                        {section.partnershipFeatures.map((feature, idx) => (
                          <div key={idx} className="flex flex-col items-center text-center">
                            {/* Icon */}
                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-6">
                              {feature.iconName && iconMap[feature.iconName] ? (
                                (() => {
                                  const FeatureIcon = iconMap[feature.iconName!];
                                  return <FeatureIcon className="w-12 h-12 text-primary" />;
                                })()
                              ) : (
                                <span className="text-gray-400 text-xs">[Icon]</span>
                              )}
                            </div>
                            {/* Title */}
                            <h4 className="font-heading text-base uppercase tracking-wide text-dark mb-4 font-bold">
                              {feature.title}
                            </h4>
                            {/* Description */}
                            <p className="text-sm text-gray-900 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
                      {/* Footer text */}
                      {section.footerText && (
                        <p className="mt-12 text-gray-900 text-lg">
                          {section.footerText}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Partner Logos if enabled */}
                  {section.showPartnerLogos && (
                    <div className="mt-10 flex flex-wrap items-stretch justify-center gap-8">
                      {[
                        { src: "/images/partners/niphm.jpg", name: "NIPHM", full: "National Institute of Plant Health Management" },
                        { src: "/images/partners/agbiotech.jpg", name: "AgBiotech", full: "AgBiotech India" },
                      ].map((partner) => (
                        <div key={partner.name} className="flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-xl px-8 py-6 shadow-sm w-[200px]">
                          <img
                            src={partner.src}
                            alt={partner.name}
                            className="h-[100px] w-[100px] object-contain"
                          />
                          <p className="text-sm font-semibold text-dark text-center leading-snug">{partner.full}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Government Logos if enabled */}
                  {section.showGovLogos && (
                    <div className="mt-10 flex flex-wrap items-stretch justify-center gap-8">
                      {[
                        { src: "/images/partners/midh.jpg", name: "MIDH", full: "Mission for Integrated Development of Horticulture" },
                        { src: "/images/partners/nabard.jpg", name: "NABARD", full: "National Bank for Agriculture and Rural Development" },
                        { src: "/images/partners/nhb.jpg", name: "NHB", full: "National Horticulture Board" },
                      ].map((org) => (
                        <div key={org.name} className="flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-xl px-8 py-6 shadow-sm w-[200px]">
                          <img
                            src={org.src}
                            alt={org.name}
                            className="h-[100px] w-[100px] object-contain"
                          />
                          <p className="text-base font-bold text-dark text-center">{org.name}</p>
                          <p className="text-xs text-gray-900 text-center leading-snug">{org.full}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Coming Soon if enabled */}
                  {section.showComingSoon && (
                    <div className="mt-10 flex flex-col items-center justify-center py-12 px-8 bg-white border border-dashed border-primary/40 rounded-xl text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                        </svg>
                      </div>
                      <h4 className="font-heading text-xl uppercase tracking-wide text-dark font-bold mb-2">Coming Soon</h4>
                      <p className="text-gray-500 text-sm max-w-sm">We&apos;re planning exciting programs. Check back soon or contact us to be notified.</p>
                    </div>
                  )}

                  {/* Footer Note for full-width sections */}
                  {section.fullWidth && section.footerNote && (
                    <div className="mt-8 text-gray-900 leading-relaxed space-y-2">
                      {section.footerNote.split('\n').map((line, lIndex) => (
                        <p key={lIndex}>{parseMarkdown(line)}</p>
                      ))}
                    </div>
                  )}

                  {/* Button if provided */}
                  {section.buttonText && section.buttonLink && (
                    <div className="mt-8">
                      <a
                        href={section.buttonLink}
                        className="relative inline-flex bg-primary hover:bg-primary/90 text-white font-heading text-lg uppercase tracking-wide py-4 px-12 transition-all duration-300 overflow-hidden group items-center gap-3"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                          </svg>
                          <span>{section.buttonText}</span>
                        </span>
                        <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                // Two-column layout with image
                <div
                  key={index}
                  className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-stretch"
                >
                  {/* Image Column */}
                  <div
                    className={`min-h-[320px] rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden ${
                      section.imagePosition === "right" ? "lg:order-2" : ""
                    }`}
                  >
                    {section.image ? (
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-light-gray flex items-center justify-center">
                        <span className="text-gray-500">[{section.title} Image]</span>
                      </div>
                    )}
                  </div>

                  {/* Text Column */}
                  <div className={`flex flex-col justify-start ${section.imagePosition === "right" ? "lg:order-1" : ""}`}>
                    <h3 className="font-heading text-3xl md:text-4xl uppercase text-dark mb-6">
                      {section.title}
                    </h3>
                    <div className="text-gray-900 leading-relaxed space-y-4 whitespace-pre-line">
                      {section.description.split('\n').map((paragraph, pIndex) => (
                        <p key={pIndex}>{parseMarkdown(paragraph)}</p>
                      ))}
                    </div>

                    {/* Bullet Points if provided */}
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className={`mt-6 space-y-3 ${section.roundBullets || section.numberedPoints ? "list-none" : ""}`}>
                        {section.bulletPoints.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start gap-3">
                            {section.numberedPoints ? (
                              <span className="text-gray-900 flex-shrink-0 mt-0.5">{pIndex + 1}.</span>
                            ) : section.roundBullets ? (
                              <span className="w-1.5 h-1.5 rounded-full bg-dark flex-shrink-0 mt-2" />
                            ) : (
                              <svg
                                className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                            <span className="text-gray-900 leading-relaxed">{parseMarkdown(point)}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Bullet Items with optional sub-points */}
                    {section.bulletItems && section.bulletItems.length > 0 && (
                      <ul className="mt-6 space-y-3 list-none">
                        {section.bulletItems.map((item, bIndex) => (
                          <li key={bIndex}>
                            <div className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-dark flex-shrink-0 mt-2" />
                              <span className="text-gray-900 leading-relaxed">{parseMarkdown(item.text)}</span>
                            </div>
                            {item.subPoints && item.subPoints.length > 0 && (
                              <ul className="mt-2 ml-6 space-y-2 list-none">
                                {item.subPoints.map((sub, sIndex) => (
                                  <li key={sIndex} className="flex items-start gap-3">
                                    <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0 mt-2" />
                                    <span className="text-gray-900 leading-relaxed">{parseMarkdown(sub)}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Footer Note if provided */}
                    {section.footerNote && (
                      <div className="mt-6 text-gray-900 leading-relaxed space-y-2">
                        {section.footerNote.split('\n').map((line, lIndex) => (
                          <p key={lIndex}>{parseMarkdown(line)}</p>
                        ))}
                      </div>
                    )}

                    {/* Crop Table if enabled */}
                    {section.showCropTable && section.cropCategories && (
                      <div className="mt-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                          {section.cropCategories.map((category, idx) => (
                            <div key={idx} className="flex flex-col">
                              {/* Category Header */}
                              <div className="font-heading font-bold text-dark text-lg uppercase tracking-wide mb-4 pb-2 border-b-2 border-primary">
                                {category.name}
                              </div>
                              {/* Crop List */}
                              <div className="space-y-2">
                                {category.crops.map((crop, cropIdx) => (
                                  <div
                                    key={cropIdx}
                                    className={`py-2 px-3 text-sm text-gray-900 ${
                                      cropIdx % 2 === 1 ? "bg-gray-50" : ""
                                    }`}
                                  >
                                    {crop}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* Footer Text */}
                        {section.cropFooterText && (
                          <p className="mt-8 text-gray-900 text-base">
                            {section.cropFooterText}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Button if provided */}
                    {section.buttonText && section.buttonLink && (
                      <div className="mt-8">
                        <a
                          href={section.buttonLink}
                          className="relative inline-flex bg-primary hover:bg-primary/90 text-white font-heading text-lg uppercase tracking-wide py-4 px-12 transition-all duration-300 overflow-hidden group items-center gap-3"
                        >
                          <span className="relative z-10 flex items-center gap-3">
                            <svg
                              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                            </svg>
                            <span>{section.buttonText}</span>
                          </span>
                          <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </SectionWrapper>
          ))}
        </>
        )
      )}

      {/* WHY IT MATTERS SECTION */}
      {service.whyItMatters && (
        <SectionWrapper background="light">
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-dark mb-8">
            Why It Matters
          </h2>
          <p className="text-lg text-gray-900 leading-relaxed">
            {service.whyItMatters}
          </p>
        </SectionWrapper>
      )}

      {/* CONTACT SECTION */}
      <SectionWrapper>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left Side - Quote and Image */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-heading uppercase text-dark mb-4">
                Contact Us
              </h3>
              <blockquote className="text-3xl md:text-4xl font-heading uppercase text-dark leading-tight">
                {service.contactQuote ||
                  "Great farms don't happen by chance. They're designed. Let's plan yours together."}
              </blockquote>
            </div>
            <div className="h-80 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
              {service.contactImage ? (
                <img
                  src={service.contactImage}
                  alt="Contact Kamala Farms"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-light-gray flex items-center justify-center">
                  <span className="text-gray-500">[Contact Image]</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-10 transition-all duration-300 lg:-ml-12">
            <ServiceContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
