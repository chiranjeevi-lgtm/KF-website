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
    description: "Vertical aeroponic growing systems for space-efficient farming",
    image: "/images/product/aerotowers.jpg",
  },
  {
    title: "Cocopeat",
    description: "Premium coco peat growing medium from natural coconut husk",
    image: "/images/product/cocopeat.jpg",
  },
  {
    title: "Net Pots",
    description: "Slotted mesh pots for optimal root aeration in hydroponics",
    image: "/images/product/net-pots.jpg",
  },
  {
    title: "Clay Balls",
    description: "Lightweight expanded clay aggregate for hydroponic systems",
    image: "/images/product/clay-balls.jpg",
  },
  {
    title: "Seeds",
    description: "High-quality seeds curated for hydroponic and soil cultivation",
    image: "/images/product/seeds.jpg",
  },
  {
    title: "Nutrients Mix",
    description: "Balanced macro and micronutrient blends for every growth stage",
    image: "/images/product/nutrients-mix.jpg",
  },
  {
    title: "Microgreens Grow Trays",
    description: "Purpose-built trays for growing nutrient-dense microgreens",
    image: "/images/product/microgreens-grow-trays.jpg",
  },
  {
    title: "Dutch Bucket",
    description: "Bato bucket systems ideal for vine crops and large plants",
    image: "/images/product/dutch-bucket.jpg",
  },
  {
    title: "NFT Systems",
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
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl uppercase text-dark mb-4">
            Our Product Range
          </h2>
          <p className="text-gray-900 max-w-2xl mx-auto">
            Everything you need to set up and run a successful hydroponic farm
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <Link
              key={product.title}
              href="/contact"
              className="group block"
            >
              <div className="border-t-4 border-transparent transition-all duration-300 group-hover:border-primary group-hover:-translate-y-2 group-hover:shadow-xl bg-white shadow-sm">
                {/* Square image */}
                <div className="relative overflow-hidden bg-light-gray" style={{ aspectRatio: "1/1" }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="font-heading text-base md:text-lg uppercase tracking-wide text-dark mb-1">
                    {product.title}
                  </h3>
                  <p className="text-gray-900 text-xs leading-relaxed mb-3">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-medium text-xs uppercase tracking-wider transition-colors group-hover:text-primary-dark">
                    Enquire Now
                    <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
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
