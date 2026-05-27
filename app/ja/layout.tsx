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

export default function JaLayout({ children }: { children: React.ReactNode }) {
  const content = getContent("ja");
  return (
    <SiteShell content={content}>
      <StructuredData data={organizationJsonLd()} />
      {children}
    </SiteShell>
  );
}
