import { buildMetadata } from "@/lib/seo";
import { LuxuryApplyPage } from "@/components/sections/apply-page";

export const metadata = buildMetadata({
  locale: "ja",
  path: "/apply",
  title: "Model Apply | GG Agency",
  description: "GG Agencyへのモデル応募フォームです。"
});

export default function ApplyPage() {
  return <LuxuryApplyPage locale="ja" />;
}
