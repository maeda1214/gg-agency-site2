import { buildMetadata } from "@/lib/seo";
import { LuxuryApplyPage } from "@/components/sections/apply-page";

export const metadata = buildMetadata({
  locale: "ja",
  path: "/ja/apply",
  title: "Model Apply | GG Agency",
  description: "GG Agencyへのモデル応募フォームです。お名前、メールアドレス、年齢、お住まい、応募メッセージをお送りください。"
});

export default function JaApplyPage() {
  return <LuxuryApplyPage locale="ja" />;
}
