import { buildMetadata } from "@/lib/seo";
import { LuxuryContactPage } from "@/components/sections/contact-page";

export const metadata = buildMetadata({
  locale: "ja",
  path: "/ja/contact",
  title: "Contact | GG Agency",
  description: "GG Agencyへの企業・ブランド案件のお問い合わせフォームです。"
});

export default function JaContactPage() {
  return <LuxuryContactPage locale="ja" />;
}
