import { talents } from "@/data/talents";
import { buildMetadata } from "@/lib/seo";
import { TalentContactCta, TalentRoster } from "@/components/sections/talent-roster";

export const metadata = buildMetadata({
  locale: "ja",
  path: "/ja/talent",
  title: "Talent | GG Agency",
  description: "GG Agencyのタレント一覧。ブランド、撮影、イベント、海外案件に向けたモデルを掲載しています。",
  image: "/talent1.jpg"
});

export default function JaTalentPage() {
  return (
    <div className="bg-[#050505] text-white">
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c8a86a]">Talent Roster</p>
        <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
          静かな存在感をまとうモデルたち。
        </h1>
      </section>
     <TalentRoster
  talents={talents.filter((talent) => !talent.hidden)}
  locale="ja"
  basePath="/ja/talent"
/>
      <TalentContactCta href="/ja/contact" title="ブランド撮影、イベント出演、キャスティングのご相談はこちら。" label="案件を相談する" />
    </div>
  );
}
