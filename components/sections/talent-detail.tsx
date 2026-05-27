import Image from "next/image";
import Link from "next/link";
import { Instagram, MoveLeft } from "lucide-react";
import type { Locale } from "@/types/content";
import type { Talent } from "@/types/talent";

export function TalentDetail({ basePath, contactHref, locale, talent }: { basePath: string; contactHref: string; locale: Locale; talent: Talent }) {
  const displayName = locale === "ja" ? talent.name : talent.englishName;
  const subName = locale === "ja" ? talent.englishName : talent.name;
  const contactLabel = locale === "ja" ? "案件を相談する" : "Contact for casting";
  const socialLabel = talent.instagram ? "Instagram" : talent.x ? "X" : "";
  const socialIcon = talent.instagram ? <Instagram aria-hidden className="h-4 w-4" /> : null;

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <Link href={basePath} className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white">
            <MoveLeft aria-hidden className="h-4 w-4" />
            Talent
          </Link>
          <Link
            href={contactHref}
            className="focus-ring border border-[#c8a86a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e3c983] transition hover:bg-[#c8a86a] hover:text-black"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:pb-24">
        <div className="relative aspect-[4/5] overflow-hidden border border-white/12 bg-white/5">
          <Image src={talent.image} alt={`${displayName} profile portrait`} fill priority className="object-cover" sizes="(min-width: 1024px) 46vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>

        <div className="pb-2">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c8a86a]">{talent.title}</p>
          <h1 className="mt-5 font-serif text-6xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">{displayName}</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-white/42">{subName}</p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/68">{talent.profile}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`${contactHref}?talent=${talent.slug}`}
              className="focus-ring inline-flex min-h-12 items-center justify-center border border-[#c8a86a] bg-[#c8a86a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#e3c983]"
            >
              {contactLabel}
            </Link>
            {talent.socialUrl ? (
              <a
                href={talent.socialUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 border border-white/18 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#c8a86a] hover:text-[#e3c983]"
              >
                {socialIcon}
                {socialLabel}
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <p className="border-t border-white/10 pt-10 text-xs font-semibold uppercase tracking-[0.32em] text-[#c8a86a]">Gallery</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {talent.gallery.map((image, index) => (
            <div key={`${image}-${index}`} className="relative aspect-[3/4] overflow-hidden border border-white/12 bg-white/5">
              <Image src={image} alt={`${displayName} gallery image ${index + 1}`} fill className="object-cover transition duration-700 hover:scale-105" sizes="(min-width: 640px) 33vw, 100vw" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
