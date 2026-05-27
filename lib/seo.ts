import type { Metadata } from "next";
import type { Locale } from "@/types/content";
import { absoluteUrl } from "@/lib/utils";

const localeNames: Record<Locale, string> = {
  ja: "ja_JP",
  en: "en_US"
};

export function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
}

export function buildMetadata({
  locale,
  path,
  title,
  description,
  image = "/placeholders/hero.svg"
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const jaPath = path.replace(/^\/en/, "/ja");
  const enPath = path.replace(/^\/ja/, "/en");
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ja: absoluteUrl(jaPath),
        en: absoluteUrl(enPath),
        "x-default": absoluteUrl("/")
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "GG Agency",
      locale: localeNames[locale],
      type: "website",
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: "GG Agency" }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)]
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GG Agency",
    url: siteUrl(),
    logo: absoluteUrl("/logo.svg"),
    sameAs: ["https://www.instagram.com/", "https://www.youtube.com/", "https://www.tiktok.com/"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business inquiries",
      email: "hello@example.com",
      availableLanguage: ["Japanese", "English"]
    }
  };
}
