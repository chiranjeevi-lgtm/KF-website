export interface BlogPostData {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  coverImage: string;
  externalUrl?: string;
}

export const blogPosts: BlogPostData[] = [
  {
    id: 8,
    slug: "hydroponics-classes-india",
    title:
      "Hydroponics Classes in India: Growing Fresh, Nutrient-Rich Produce All Year Round",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/hydroponics-classes-india.jpg",
  },
  {
    id: 2,
    slug: "hydroponics-investment-hyderabad-beginners-guide",
    title: "Hydroponics Investment in Hyderabad: A Beginner's Guide",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/hydroponic-investment-hyderabad.jpg",
  },
  {
    id: 3,
    slug: "automated-hydroponic-farming-system",
    title: "What is Automated Hydroponic Farming System and How it Works?",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/automated-hydroponic-system.jpg",
  },
  {
    id: 4,
    slug: "environmental-benefits-hydroponic-farming",
    title: "Environmental Benefits of Hydroponic Farming",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/environmental-benefits-hydroponics.jpg",
  },
  {
    id: 5,
    slug: "improving-efficiency-contract-farming",
    title:
      "Improving Efficiency and Productivity in Agriculture with Contract Farming Services",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/contract-farming-efficiency.jpg",
  },
  {
    id: 6,
    slug: "maintaining-healthy-hydroponic-system",
    title: "Maintaining a Healthy Hydroponic System: Troubleshooting Tips",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/healthy-hydroponic-system.jpg",
  },
  {
    id: 7,
    slug: "investing-hydroponic-farming-india",
    title:
      "Investing in Hydroponic Farming: A Lucrative Business Opportunity in India",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/hydroponic-farming-investment.jpg",
  },
  {
    id: 1,
    slug: "benefits-of-starting-hydroponic-farming",
    title: "The Benefits of Starting Hydroponic Farming",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/benefits-hydroponic-farming.jpg",
  },
  {
    id: 9,
    slug: "investing-hydroponics-startups-hyderabad",
    title:
      "Investing in Hydroponics Startups: Hyderabad's Rising Crop of Opportunities",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/hydroponics-startups-hyderabad.jpg",
  },
  {
    id: 10,
    slug: "contract-farming-policies-india",
    title:
      "Contract Farming Policies in India: Facilitating Farmer Industry Collaboration",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/contract-farming-policies.jpg",
  },
  {
    id: 11,
    slug: "sustainable-farming-practices-hydroponics",
    title:
      "Sustainable Farming Practices: Exploring the Environmental Benefits of Hydroponics",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/sustainable-farming-hydroponics.jpg",
  },
  {
    id: 12,
    slug: "mastering-sustainability-hydroponic-farm-setup",
    title:
      "Mastering Sustainability: A Step by Step Guide to Hydroponic Farm Setup",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/hydroponic-farm-setup-guide.jpg",
  },
  {
    id: 13,
    slug: "hydroponic-nutrient-management-pune",
    title: "Hydroponic Nutrient Management for Pune Growers",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/hydroponic-nutrient-management.jpg",
  },
  {
    id: 14,
    slug: "enhancing-crop-quality-hydroponic-workshops-hyderabad",
    title:
      "Enhancing Crop Quality and Quantity: Progressive Hydroponic Agriculture Workshops in Hyderabad",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/hydroponic-workshops-hyderabad.jpg",
  },
  {
    id: 16,
    slug: "hydroponics-training-home-gardeners",
    title:
      "Hydroponics Training for Home Gardeners: Bringing the Farm Indoors",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/hydroponics-training-home.jpg",
  },
  {
    id: 17,
    slug: "aeroponic-farming-climate-change-india",
    title:
      "The Role of Aeroponic Farming in Mitigating Climate Change in India",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/aeroponic-farming-india.jpg",
  },
  {
    id: 19,
    slug: "hydroponic-fodder-cultivation",
    title:
      "Hydroponic Fodder Cultivation - A Sustainable Alternative to Conventional Farming",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/hydroponic-fodder-cultivation.jpg",
    externalUrl:
      "https://gubbagroup.com/hydroponic-fodder-cultivation-a-sustainable-alternative-to-conventional-farming/",
  },
  {
    id: 20,
    slug: "hydroponic-future-curcuma-longa",
    title: "The Hydroponic Future of Curcuma Longa Cultivation",
    date: "September 24, 2025",
    category: "KamalaFarms",
    coverImage: "/images/blog/hydroponic-curcuma-longa.jpg",
    externalUrl:
      "https://gubbagroup.com/the-hydroponic-future-of-curcuma-longa-cultivation/",
  },
];

export const POSTS_PER_PAGE = 9;

export function getBlogPostBySlug(slug: string): BlogPostData | null {
  return blogPosts.find((p) => p.slug === slug) || null;
}

export function getPaginatedPosts(page: number) {
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return {
    posts,
    currentPage,
    totalPages,
    totalPosts: blogPosts.length,
  };
}
