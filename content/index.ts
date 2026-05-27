import { enContent } from "@/content/en";
import { jaContent } from "@/content/ja";
import type { Locale, SiteContent } from "@/types/content";

export const contentByLocale: Record<Locale, SiteContent> = {
  ja: jaContent,
  en: enContent
};

export function getContent(locale: Locale) {
  return contentByLocale[locale];
}
