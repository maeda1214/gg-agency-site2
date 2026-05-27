import type { SiteContent } from "@/types/content";

export const enContent: SiteContent = {
  locale: "en",
  siteName: "GG Agency",
  meta: {
    title: "GG Agency | High-end model and talent agency",
    description: "GG Agency is a Tokyo-based model and talent agency for refined shoots, appearances, brand projects, and international inquiries."
  },
  nav: [
    { label: "Talent", href: "/en/talent" },
    { label: "Services", href: "/en#services" },
    { label: "Works", href: "/en#works" },
    { label: "Brands", href: "/en#brands" },
    { label: "Contact", href: "/en/contact" }
  ],
  hero: {
    eyebrow: "High-end model and talent agency",
    title: "A refined presence for global brand imagery.",
    description: "GG Agency connects refined Japanese models and talent with fashion, beauty, hospitality, event, and international projects.",
    ctas: [
      { label: "View Talent", href: "/en/talent", event: "hero_view_talent" },
      { label: "Discuss a Project", href: "/en/contact", event: "hero_contact" }
    ],
    applyCta: {
      title: "Become a Talent / Model",
      note: "Beginners welcome"
    },
    note: "Tokyo based. Available for brand campaigns, appearances, and international productions."
  },
  sections: {
    services: {
      eyebrow: "Services",
      title: "Casting that protects the atmosphere of the brand.",
      description: "From shoots and appearances to social content and global campaigns, we shape casting around tone, context, and production needs."
    },
    talent: { eyebrow: "Talent", title: "Presence carried by image.", description: "A curated roster for luxury, editorial, and international-facing projects." },
    global: {
      eyebrow: "For Brands",
      title: "Built for Japanese and international productions.",
      description: "We support bilingual communication, production coordination, and proposals shaped around brand tone.",
      points: ["Fashion / Beauty", "Hotel / Travel", "Event Appearance", "Global Campaign"]
    },
    proof: { eyebrow: "Works / Proof", title: "Visuals shaped for brand memory.", description: "We focus on casting and imagery that preserve the world of each brand." },
    instagram: { eyebrow: "Editorial Visuals", title: "From social attention to refined inquiries.", description: "Image-led communication connects Instagram traffic to brand projects, appearances, and overseas partnerships." },
    faq: { eyebrow: "Apply", title: "Talent and model inquiries are welcome.", description: "For representation or appearance inquiries, share your current work and the direction you want to pursue." },
    finalCta: { title: "Tell us the shape of your project.", description: "For shoots, appearances, and international brand inquiries." }
  },
  labels: {
    viewDetails: "View details",
    contactUs: "Contact us",
    viewTalent: "View Talent",
    apply: "Apply",
    seeInstagram: "Instagram",
    languages: "Languages",
    booking: "Discuss booking",
    related: "Related talent",
    all: "All"
  }
};
