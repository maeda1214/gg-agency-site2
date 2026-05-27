import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { HomePage } from "@/components/sections/home-sections";

const content = getContent("ja");

export const metadata = buildMetadata({
  locale: "ja",
  path: "/ja",
  title: content.meta.title,
  description: content.meta.description
});

export default function JaHomePage() {
  return <HomePage content={content} />;
}
