import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Kamala Farms products: aerotowers, cocopeat, net pots, clay balls, seeds, nutrients mix, microgreens grow trays, dutch buckets, and NFT systems for hydroponics.",
};

const PRODUCTS = [
  {
    title: "Aerotowers",
    tag: "Aeroponics System",
    description: "Vertical aeroponic growing systems for space-efficient farming",
    image: "/images/product/aerotower.jpg",
  },
  {
    title: "Cocopeat",
    tag: "Growing Medium",
    description: "Premium coco peat growing medium from natural coconut husk",
    image: "/images/product/cocopeat.jpg",
  },
  {
    title: "Net Pots",
    tag: "Accessories",
    description: "Slotted mesh pots for optimal root aeration in hydroponics",
    image: "/images/product/net-pots.jpg",
  },
  {
    title: "Clay Balls",
    tag: "Growing Medium",
    description: "Lightweight expanded clay aggregate for hydroponic systems",
    image: "/images/product/clay-balls.jpg",
  },
  {
    title: "Seeds",
    tag: "Seeds & Inputs",
    description: "High-quality seeds curated for hydroponic and soil cultivation",
    image: "/images/product/seeds.jpg",
  },
  {
    title: "Nutrients Mix",
    tag: "Nutrients",
    description: "Balanced macro and micronutrient blends for every growth stage",
    image: "/images/product/nutrients-mix.jpg",
  },
  {
    title: "Microgreens Grow Trays",
    tag: "Equipment",
    description: "Purpose-built trays for growing nutrient-dense microgreens",
    image: "/images/product/microgreens-grow-trays.jpg",
  },
  {
    title: "Dutch Bucket",
    tag: "Hydroponics System",
    description: "Bato bucket systems ideal for vine crops and large plants",
    image: "/images/product/dutch-bucket.jpg",
  },
  {
    title: "NFT Systems",
    tag: "Hydroponics System",
    description: "Nutrient Film Technique channels for leafy green production",
    image: "/images/product/nft.jpg",
  },
];

export default function ProductPage() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="relative flex h-[calc(90vh-88px)] min-h-[512px] mt-[88px] items-center justify-center bg-dark">
        <img
          src="/images/hero/product-hero.jpg"
          alt="Our Products"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase mb-6">
            Our Products
          </h1>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Quality farming inputs to power your hydroponic and agricultural success
          </p>
        </div>
      </section>

      {/* PRODUCT CATALOG */}
      <SectionWrapper background="light">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-5xl uppercase text-dark mb-4">
            Our Product Range
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to set up and run a successful hydroponic farm
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <Link
              key={product.title}
              href="/contact"
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image with gradient overlay + title */}
              <div className="relative overflow-hidden bg-gray-200" style={{ aspectRatio: "4/3" }}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                {/* Dark gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                {/* Tag badge — top right */}
                <span className="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-md">
                  {product.tag}
                </span>
                {/* Product title over image */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                  <h3 className="font-heading text-sm md:text-base uppercase tracking-wide text-white leading-tight">
                    {product.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-4 pt-3 pb-4">
                <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">
                  {product.description}
                </p>
                <span className="flex items-center justify-center gap-1.5 w-full bg-primary hover:bg-primary/90 text-white font-heading text-xs uppercase tracking-wider py-2.5 rounded-xl transition-colors duration-200 shadow-sm">
                  Enquire Now
                  <svg
                    className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="primary">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-5xl uppercase text-white mb-6">
            Interested In Our Products?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Get in touch with our team for pricing, bulk orders, and custom requirements.
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
