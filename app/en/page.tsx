import { getContent } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { HomePage } from "@/components/sections/home-sections";

const content = getContent("en");

export const metadata = buildMetadata({
  locale: "en",
  path: "/en",
  title: content.meta.title,
  description: content.meta.description
});

export default function EnHomePage() {
  return <HomePage content={content} />;
}
