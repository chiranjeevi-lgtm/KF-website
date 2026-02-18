/* ============================================
   Kamala Farms - Site Constants
   Central place for all site-wide data.
   ============================================ */

export const SITE_CONFIG = {
  name: "Kamala Farms",
  tagline: "Making Sustainable Agriculture Easy and Rewarding",
  description:
    "Kamala Farms is a hydroponics company addressing food security, food transparency and accessibility to nutritious food.",
  url: "https://kamalafarms.com",
  founded: 2017,
};

export const CONTACT_INFO = {
  phone: "+91 906 339 7475", // TODO: Add actual phone number
  email: "info@kamalafarms.com", // TODO: Verify email
  address: `IDFC First Bank, Veer Chambers,
Co-karma, 4th Floor, 1-10-63/1/1,
Chikoti Garden Rd, Old Patigadda,
Prakash Nagar, Begumpet,
Pillar No: C1356,
Hyderabad, Telangana, 500016, India`,
  businessHours: "Monday - Saturday, 9:00 AM - 6:00 PM IST",
};


export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/kamalafarms", // TODO: Verify URL
  linkedin: "https://linkedin.com/company/kamalafarms", // TODO: Verify URL
  youtube: "https://youtube.com/@kamalafarms", // TODO: Verify URL
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Services",
    href: "/services",
    children: [
      { label: "Site Audit, DPR & Subsidy", href: "/services/site-audit-dpr-subsidy" },
      { label: "Turnkey Setup", href: "/services/turnkey-setup" },
      { label: "Training & Capacity Building", href: "/services/training" },
      // { label: "Farm Management", href: "/services/farm-management" },  // merged into turnkey-setup
      // { label: "Contract Farming & Buyback", href: "/services/contract-farming" },  // merged into turnkey-setup
      // { label: "Recycling", href: "/services/recycling" },
      // { label: "Soil Farming", href: "/services/soil-farming" },
    ],
  },
  { label: "Product", href: "/product" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Product", href: "/product" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

/** Stats displayed on the Home/About pages */
export const IMPACT_STATS = [
  { label: "Students Trained", value: 500, suffix: "+" },
  { label: "Sq Ft of Farms Built", value: 100000, suffix: "+" },
  { label: "Acres Covered", value: 50, suffix: "+" },
  { label: "Clients Served", value: 25, suffix: "+" },
];
