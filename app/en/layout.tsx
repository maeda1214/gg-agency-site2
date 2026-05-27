import type { Metadata } from "next";
import { getContent } from "@/content";
import { organizationJsonLd } from "@/lib/seo";
import { SiteShell } from "@/components/layout/site-shell";
import { StructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  alternates: {
    languages: {
      ja: "/ja",
      en: "/en",
      "x-default": "/"
    }
  }
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  const content = getContent("en");
  return (
    <SiteShell content={content}>
      <StructuredData data={organizationJsonLd()} />
      {children}
    </SiteShell>
  );
}
