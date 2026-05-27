import { buildMetadata } from "@/lib/seo";
import { SimpleInfoGrid, SimplePage } from "@/components/sections/simple-page";

export const metadata = buildMetadata({
  locale: "ja",
  path: "/ja/company",
  title: "Company | GG Agency",
  description: "GG Agencyの会社概要ページです。"
});

export default function JaCompanyPage() {
  return (
    <SimplePage
      eyebrow="Company"
      title="静かな美意識を、現場へ。"
      description="GG Agencyは、国内外のブランド案件に向けて、モデル・タレントの存在感を丁寧に提案する東京拠点のエージェンシーです。"
    >
      <SimpleInfoGrid
        items={[
          { title: "Company", body: "GG Agency" },
          { title: "Location", body: "Tokyo, Japan" },
          { title: "Focus", body: "Fashion, beauty, hospitality, editorial, event, and international projects." },
          { title: "Contact", body: "お問い合わせフォームよりご連絡ください。" }
        ]}
      />
    </SimplePage>
  );
}
