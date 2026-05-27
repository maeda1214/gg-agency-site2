export type Locale = "ja" | "en";

export type NavItem = {
  label: string;
  href: string;
};

export type CTA = {
  label: string;
  href: string;
  event: string;
};

export type SiteContent = {
  locale: Locale;
  siteName: string;
  meta: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ctas: CTA[];
    applyCta: {
      title: string;
      note: string;
    };
    note: string;
  };
  sections: {
    services: { eyebrow: string; title: string; description: string };
    talent: { eyebrow: string; title: string; description: string };
    global: { eyebrow: string; title: string; description: string; points: string[] };
    proof: { eyebrow: string; title: string; description: string };
    instagram: { eyebrow: string; title: string; description: string };
    faq: { eyebrow: string; title: string; description: string };
    finalCta: { title: string; description: string };
  };
  labels: Record<string, string>;
};
