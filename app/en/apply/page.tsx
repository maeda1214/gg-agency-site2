import { buildMetadata } from "@/lib/seo";
import { LuxuryApplyPage } from "@/components/sections/apply-page";

export const metadata = buildMetadata({
  locale: "en",
  path: "/en/apply",
  title: "Model Apply | GG Agency",
  description: "Model application form for GG Agency. Share your name, email, age, residence, and application message."
});

export default function EnApplyPage() {
  return <LuxuryApplyPage locale="en" />;
}
