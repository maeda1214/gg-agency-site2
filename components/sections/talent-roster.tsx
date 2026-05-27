import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import type { Talent } from "@/types/talent";

export function TalentRoster({
  talents,
  locale,
  basePath
}: {
  talents: Talent[];
  locale: Locale;
  basePath: string;
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {talents.map((talent) => {
          const name = locale === "ja" ? talent.name : talent.englishName;

          return (
            <Link
              key={talent.slug}
              href={`${basePath}/${talent.slug}`}
              className="focus-ring group relative block overflow-hidden border border-white/12 bg-white/[0.03] transition duration-500 hover:border-[#c8a86a]/70"
            >
              <article className="relative aspect-[3/4] min-h-[430px] sm:min-h-[560px]">
                <Image
                  src={talent.image}
                  alt={`${name} profile`}
                  fill
                  className="object-cover grayscale-[12%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h2 className="font-serif text-3xl leading-none text-white sm:text-4xl">{name}</h2>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function TalentContactCta({
  href,
  title = "Project inquiries for refined brand and editorial work.",
  label = "Contact GG Agency"
}: {
  href: string;
  title?: string;
  label?: string;
}) {
  return (
    <section className="border-t border-white/10 bg-[#050505] px-5 py-16 text-center text-white sm:px-8 lg:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c8a86a]">Contact</p>
      <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
      <Link
        href={href}
        className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center border border-[#c8a86a] bg-[#c8a86a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#e3c983]"
      >
        {label}
      </Link>
    </section>
  );
}
