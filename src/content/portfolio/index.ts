export interface PortfolioSection {
  heading: string;
  paragraphs?: string[];
  bullets?: {
    title: string;
    description: string;
  }[];
}

export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  date: string;
  image: string;
  background: string;
  farmSetup: {
    title: string;
    description: string;
  }[];
  outcome: string;
  sections?: PortfolioSection[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "vikrams-high-tech-hydroponic-farm-setup",
    title: "Vikram's High-Tech Hydroponic Farm Setup",
    client: "Vikram's High-Tech Hydroponic Farm Setup",
    date: "August, 2019",
    image: "https://kamalafarms.com/wp-content/uploads/2025/09/irrigation-01-890x664.jpg",
    background:
      "Vikram, a 38-year-old businessman from Pune, had been successfully managing a chain of distribution businesses for over a decade. While his core business was profitable, he wanted to enter a sector that was future-focused, sustainable, and capable of delivering consistent income. During his research, he discovered hydroponics — a method of growing plants without soil, offering higher yields, faster growth cycles, and pesticide-free produce. Impressed by its potential, he approached **Kamala Farms** to design and execute a **complete turnkey hydroponic farm setup**.",
    farmSetup: [
      {
        title: "Polyhouse Construction",
        description:
          "A modern climate-controlled polyhouse was constructed to protect crops from extreme weather while providing optimal light, temperature, and humidity.",
      },
      {
        title: "Polybag Growing System",
        description:
          "High-grade UV-stabilized polybags filled with sterilized cocopeat were used to ensure uniform root development and minimize soil-borne diseases.",
      },
      {
        title: "Automated Drip Irrigation & Nutrient Delivery",
        description:
          "A precision drip irrigation system with automated nutrient dosing was installed, ensuring plants received the exact amount of water and nutrients they required.",
      },
      {
        title: "Professional Trellising & Crop Support",
        description:
          "Strong galvanized trellis structures were set up to support vine crops, allowing maximum vertical growth and ease of harvesting.",
      },
      {
        title: "Advanced Climate Automation",
        description:
          "Integrated exhaust fans, foggers, and climate sensors were implemented for round-the-clock monitoring and control of temperature and humidity.",
      },
      {
        title: "Power Backup & Efficient Layout",
        description:
          "The system was supported with power backup and an efficient farm layout to ensure uninterrupted operation.",
      },
      {
        title: "Training & Knowledge Transfer",
        description:
          "Kamala Farms provided extensive hands-on training for Vikram's team, covering everything from planting and pruning to pest management and harvesting.",
      },
      {
        title: "Agronomist Support",
        description:
          "A dedicated professional agronomist from Kamala Farms was assigned for regular visits and on-call support to guide crop cycles and troubleshoot issues.",
      },
    ],
    outcome:
      "Within **90 days**, Vikram's farm was fully operational and ready for the first planting cycle. The setup was capable of **year-round production** with minimal manual intervention, thanks to automation and professional guidance. By entering into a **buy-back agreement** with Kamala Farms, Vikram secured a guaranteed market for his produce, eliminating marketing risks. Today, his hydroponic farm not only generates a stable income but also positions him as a forward-thinking agripreneur contributing to sustainable food production in his region.",
  },
  {
    slug: "arun-meeras-hydroponic-cucumber-venture",
    title: "Arun & Meera's Hydroponic Cucumber Venture",
    client: "Arun & Meera's Hydroponic Cucumber Venture",
    date: "August, 2019",
    image: "https://kamalafarms.com/wp-content/uploads/2025/09/contract-farming.jpg",
    background:
      "Arun and Meera, a couple in their early 40s from Coimbatore, were determined to build a sustainable agribusiness together. With backgrounds in architecture and teaching, they had no prior farming experience but were drawn to hydroponics for its promise of year-round production and pesticide-free crops. They approached **Kamala Farms** for a **professional turnkey solution** to start large-scale cucumber cultivation.",
    farmSetup: [],
    outcome: "",
    sections: [
      {
        heading: "Challenges",
        bullets: [
          { title: "No practical knowledge of hydroponic farming", description: "" },
          { title: "Needed a high-yield crop for quick returns", description: "" },
          { title: "Wanted guaranteed buyers to avoid market price drops", description: "" },
          { title: "Required a system that could be managed efficiently with minimal labor", description: "" },
        ],
      },
      {
        heading: "Solutions",
        bullets: [
          { title: "2-acre turnkey hydroponic cucumber farm", description: "Kamala Farms developed a **2-acre turnkey hydroponic cucumber farm** using **polybag growing systems** filled with cocopeat." },
          { title: "Automated drip irrigation", description: "Installed **automated drip irrigation** for precise water and nutrient delivery." },
          { title: "4 crop cycles per year", description: "Designed the plan for **4 crop cycles per year** to maximize revenue potential." },
          { title: "Buy-back agreement", description: "Signed a **buy-back agreement** to purchase 100% of the cucumbers at a pre-agreed premium price." },
          { title: "Ongoing maintenance support", description: "Provided **ongoing maintenance support** including polybag replacement guidance, drip system servicing, and nutrient management advice." },
          { title: "Dedicated professional agronomist", description: "Assigned a **dedicated professional agronomist** from Kamala Farms to regularly visit the farm, monitor plant health, and provide expert guidance at every stage." },
          { title: "Team training", description: "Trained their local team on pruning, trellising, and harvest handling for consistent yields." },
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Established themselves as reliable large-scale hydroponic cucumber producers.",
          "Successfully harvested cucumbers **four times in the first year** with consistent quality.",
          "Sold the entire produce to Kamala Farms under the buy-back policy, ensuring **zero marketing effort**.",
          "Maintained smooth operations with minimal downtime thanks to regular maintenance and professional agronomist support.",
        ],
      },
    ],
  },
  {
    slug: "karthik-krishnas-hydroponic-turmeric-success",
    title: "Karthik & Krishna's Hydroponic Turmeric Success",
    client: "Karthik & Krishna's Hydroponic Turmeric Success",
    date: "August, 2019",
    image: "https://kamalafarms.com/wp-content/uploads/2025/09/Enhancing-Crop-Quality-and-quantity-Progressive-Hydroponic-Agriculture-Workshop-in-Hyderabad.jpg",
    background:
      "Karthik, a 35-year-old software engineer, and Krishna, a 34-year-old marketing professional from Hyderabad, had always dreamt of running a business together. Their search for a sustainable, high-value farming opportunity led them to hydroponics — a modern farming method that promised premium-quality crops with minimal chemical use. After learning about the high market demand for clean, residue-free turmeric, they approached **Kamala Farms** for a **turnkey hydroponics solution**.",
    farmSetup: [],
    outcome: "",
    sections: [
      {
        heading: "Challenges",
        bullets: [
          { title: "No prior experience with turmeric cultivation", description: "" },
          { title: "Wanted a **high-value crop** with strong market demand", description: "" },
          { title: "Needed **assured sales** without worrying about fluctuating market prices", description: "" },
        ],
      },
      {
        heading: "Solutions",
        bullets: [
          { title: "Turnkey hydroponic turmeric farm", description: "Kamala Farms designed and installed a **turnkey hydroponic turmeric farm** on their leased 1Acre plot." },
          { title: "Climate-controlled polyhouse", description: "Equipped with **climate-controlled polyhouse**, drip irrigation, and nutrient dosing systems." },
          { title: "One annual crop cycle training", description: "Trained Karthik & Krishna in **one annual crop cycle** management — from rhizome planting to harvest." },
          { title: "Buy-back agreement", description: "Entered into a **buy-back agreement** guaranteeing that Kamala Farms would purchase the entire turmeric harvest each year at a pre-agreed premium rate." },
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Successfully completed their **first one-year turmeric cycle**, producing high-curcumin, premium-grade turmeric.",
          "100% of the harvest sold to Kamala Farms under the buy-back policy, ensuring **predictable yearly income**.",
          "Established themselves as trusted growers in the hydroponic turmeric segment.",
          "Now planning to reinvest profits into expanding the turmeric farm for higher yearly output.",
        ],
      },
    ],
  },
];
