import {
  responsive_icon,
  optimization_icon,
  custom_icon,
  nails_by_tay,
  personal_portfolio,
  studybnb,
} from "../assets/images";

export const NavLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export const aboutCards = [
  {
    src: responsive_icon,
    title: "Fully Responsive",
    description:
      "I ensure that your website looks and functions perfectly on all devices. A fully responsive design provides a seamless user experience, which helps keep visitors engaged and increases the likelihood of conversion.",
  },
  {
    src: optimization_icon,
    title: "Optimization",
    description:
      "My websites are built with speed and efficiency in mind. I optimize every aspect of your site to ensure fast load times and smooth interactions, which not only improves user satisfaction but also boosts your search engine rankings.",
  },
  {
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
