// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "#Home" },
  { name: "About", url: "#About" },
  { name: "Principles", url: "#Principles" },
  { name: "Services", url: "#Services" },
  { name: "Testimonials", url: "#Testimonials" },
  { name: "Contact", url: "#Contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "#" },
      { name: "Tools & Equipment", url: "#" },
      { name: "Construction Services", url: "#" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "#" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/MujingFang",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
