import Link from "next/link";
import { talents } from "@/data/talents";
import { buildMetadata } from "@/lib/seo";
import { TalentContactCta, TalentRoster } from "@/components/sections/talent-roster";

export const metadata = buildMetadata({
  locale: "en",
  path: "/talent",
  title: "Talent | GG Agency",
  description: "Explore GG Agency talent for luxury brand campaigns, events, social content, and global projects.",
  image: "/talent1.jpg"
});

export default function TalentPage() {
  return (
    <main id="main" className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 pb-5">
          <Link href="/" className="focus-ring font-serif text-xl font-semibold tracking-wide">
            GG Agency
          </Link>
          <Link
            href="/en/contact"
            className="focus-ring border border-[#c8a86a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e3c983] transition hover:bg-[#c8a86a] hover:text-black"
          >
            Contact
          </Link>
        </div>

        <div className="mx-auto max-w-7xl py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c8a86a]">Talent Roster</p>
          <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            Models with a quiet editorial presence.
          </h1>
        </div>
      </section>

      <TalentRoster talents={talents} locale="en" basePath="/talent" />
      <TalentContactCta href="/en/contact" />
    </main>
  );
}
