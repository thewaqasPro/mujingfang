import ogImageSrc from "@/images/social.png";

export const SITE = {
  title: "Mujingfang",
  tagline: "Home Improvement Tools!",
  description:
    "Under the internationally renowned brand Mujingfang, Woodwell produces a full range of woodworking tools including hammers, chisels, axes, saws, rulers, and planes.  Mujingfang's woodworking products have become not only carpenters and home renovators' best helpers, but also artwork collectors' best treasures. Woodwell also established a professional High Power Tile Cutters manufacturing line.",
  description_short:
    "Under the internationally renowned brand Mujingfang, Woodwell produces a full range of woodworking tools including hammers, chisels, axes, saws, rulers, and planes.",
  url: "https://power-funnels.com",
  author: "Power Funnels",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Woodwell Home Improvement Tools!`,
  description:
    "Under the internationally renowned brand Mujingfang, Woodwell produces a full range of woodworking tools including hammers, chisels, axes, saws, rulers, and planes.  Mujingfang�s woodworking products have become not only carpenters and home renovators' best helpers, but also artwork collectors' best treasures. Woodwell also established a professional High Power Tile Cutters manufacturing line.",
  image: ogImageSrc,
};
