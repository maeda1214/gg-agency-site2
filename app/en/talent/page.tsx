import { talents } from "@/data/talents";
import { buildMetadata } from "@/lib/seo";
import { TalentContactCta, TalentRoster } from "@/components/sections/talent-roster";

export const metadata = buildMetadata({
  locale: "en",
  path: "/en/talent",
  title: "Talent | GG Agency",
  description: "Explore GG Agency talent for luxury brand campaigns, events, social content, and global projects.",
  image: "/talent1.jpg"
});

export default function EnTalentPage() {
  return (
    <div className="bg-[#050505] text-white">
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c8a86a]">Talent Roster</p>
        <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
          Models with a quiet editorial presence.
        </h1>
      </section>
      <TalentRoster talents={talents} locale="en" basePath="/en/talent" />
      <TalentContactCta href="/en/contact" />
    </div>
  );
}
