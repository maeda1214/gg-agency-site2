import { notFound } from "next/navigation";
import { talents } from "@/data/talents";
import { buildMetadata } from "@/lib/seo";
import { TalentDetail } from "@/components/sections/talent-detail";

export function generateStaticParams() {
  return talents.map((talent) => ({ slug: talent.slug }));
}

type TalentPageParams = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: TalentPageParams) {
  const { slug } = await params;
  const talent = talents.find((item) => item.slug === slug);
  if (!talent) return {};

  return buildMetadata({
    locale: "ja",
    path: `/ja/talent/${talent.slug}`,
    title: `${talent.name} | Talent`,
    description: talent.profile,
    image: talent.image
  });
}

export default async function JaTalentDetailPage({ params }: TalentPageParams) {
  const { slug } = await params;
  const talent = talents.find((item) => item.slug === slug);
  if (!talent) notFound();

  return <TalentDetail talent={talent} locale="ja" basePath="/ja/talent" contactHref="/ja/contact" />;
}
