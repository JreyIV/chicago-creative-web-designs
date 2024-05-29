import {
  responsive_icon,
  optimization_icon,
  custom_icon,
  nails_by_tay,
  personal_portfolio,
  studybnb,
} from "../assets/images";

import {
  keyword_optimization,
  catalog_magazine,
  on_page_seo,
  internal_linking,
  mobile_friendliness,
  page_load_speed,
  meta_descriptions,
  image_optimization,
} from "../assets/icons";

export const NavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const aboutCards = [
  {
    index: 0,
    src: responsive_icon,
    title: "Fully Responsive",
    description:
      "I ensure that your website looks and functions perfectly on all devices. A fully responsive design provides a seamless user experience, which helps keep visitors engaged and increases the likelihood of conversion.",
  },
  {
    index: 1,
    src: optimization_icon,
    title: "Optimization",
    description:
      "My websites are built with speed and efficiency in mind. I optimize every aspect of your site to ensure fast load times and smooth interactions, which not only improves user satisfaction but also boosts your search engine rankings.",
  },
  {
    index: 2,
    src: custom_icon,
    title: "Custom Designs",
    description:
      "Stand out from the competition with a website that is uniquely yours. My custom designs ensure that your site reflects your brand’s personality. A unique design captures attention and builds credibility with your audience.",
  },
];

export const portfolio_projects = [
  {
    title: "Nails by Tay",
    description: "A website for a local nail technician located in Chicago.",
    src: nails_by_tay,
    url: "https://nails-by-tay.netlify.app/",
    className: "project-1,",
  },
  {
    title: "Personal Portfolio",
    description: "My personal portfolio website.",
    src: personal_portfolio,
    url: "https://jreyesiv.com/",
    className: "project-2",
  },
  {
    title: "Studybnb",
    description:
      "A website for a Chicago study space finder concept inspired by airbnb.",
    src: studybnb,
    url: "https://jreyesiv.com/",
    className: "project-3",
  },
];

export const prices = [
  {
    index: 0,
    price: "1000+",
    title: "Standard",
    features: [
      "Fully Responsive",
      "Optimization",
      "Custom Designs",
      "3 Revisions",
      "5 pages or less",
    ],
    gradient: "linear-gradient(to bottom, #6717CD, #296FF9)",
    textColor: "#FFFFFF",
  },
  {
    index: 1,
    price: "2500+",
    title: "Plus",
    features: [
      "Fully Responsive",
      "Optimization",
      "Custom Designs",
      "5 Revisions",
      "6-12 Pages",
    ],
    color: "rgba(249,250,252,255)",
    textColor: "#000000",
  },

  {
    index: 2,
    price: "4000+",
    title: "Premium",
    features: [
      "Fully Responsive",
      "Optimization",
      "Custom Designs",
      "Unlimited Revisions",
      "12+ Pages",
      "E-Commerce (Shopify Integration)",
    ],
    color: "rgba(249,250,252,255)",
    textColor: "#000000",
  },
];

export const maintenance_package_feautures = [
  {
    title: "Hosting Included",
    description: "Hosting fees included. No additional costs, no worries",
  },
  {
    title: "Unlimited Edits",
    description:
      "Update content whenever you want, just reach out and I will get it done asap",
  },
  {
    title: "SEO Maintenance",
    description:
      "Regular SEO audits and updates to make sure your website is ranked high in search rankings",
  },
  {
    title: "Technical Support",
    description:
      "Ongoing technical support for troubleshooting and resolving issues",
  },
  {
    title: "Analytics Reports",
    description: "Monthly website performance and traffic reports",
  },
  {
    title: "Backup Services",
    description: "Regular backups to prevent data loss",
  },
];

export const designCard = [
  {
    title: "Custom Design",
    description:
      "Unique, tailor-made designs reflecting your brand's personality.",
  },
  {
    title: "User Experience Focused",
    description: "Intuitive and enjoyable designs that keep visitors engaged.",
  },
  {
    title: "Responsive Design",
    description:
      "Beautiful and functional on all devices, from desktops to smartphones.",
  },
  {
    title: "Brand Integration",
    description: "Cohesive look and feel, aligned with your brand's identity.",
  },
  {
    title: "Visual Elements",
    description:
      "Modern trends, typography, colors, and imagery for stunning visuals.",
  },
];

export const developmentCard = [
  {
    title: "Hand Written Code",
    description:
      "Hand-coded solutions tailored to your needs, avoiding templates.",
  },
  {
    title: "Performance Optimization",
    description: "Focus on speed and performance for quick load times.",
  },
  {
    title: "SEO Best Practices",
    description:
      "Development includes SEO techniques for higher search rankings.",
  },
  {
    title: "Scalability",
    description: "Build scalable solutions that grow with your business.",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Robust platforms with features like product management and payment gateways.",
  },
];

export const seoCards = [
  {
    src: keyword_optimization,
    title: "Keywords Optimization",
    description: "Use relevant keywords in your content and meta tags.",
  },
  {
    src: catalog_magazine,
    title: "Quality Content",
    description: "Create valuable, engaging content that your audience needs.",
  },
  {
    src: on_page_seo,
    title: "On-Page SEO",
    description: "Optimize titles, headers, and images with keywords.",
  },
  {
    src: internal_linking,
    title: "Internal Linking",
    description: "Connect related content within your site.",
  },
  {
    src: mobile_friendliness,
    title: "Mobile-Friendliness",
    description: "Ensure your site works well on mobile devices.",
  },
  {
    src: page_load_speed,
    title: "Page Load Speed",
    description: "Make your site load faster by optimizing images and scripts.",
  },
  {
    src: meta_descriptions,
    title: "Meta Descriptions",
    description: "Write compelling summaries for each page.",
  },
  {
    src: image_optimization,
    title: "Image Optimization",
    description: "Use descriptive file names and alt text for images.",
  },
];

export const logoFeatures = [
  "Logos starting at as low as $120",
  "Less than 24 hour delivery",
  "Unlimited Revisions",
  "Will make multiple versions that you can choose from",
];
