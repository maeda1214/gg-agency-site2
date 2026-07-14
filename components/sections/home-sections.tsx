import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";
import type { ReactNode } from "react";
import type { SiteContent } from "@/types/content";
import { talents } from "@/data/talents";
import { trackingAttrs } from "@/lib/analytics";

const services = {
  ja: [
    { title: "Campaign Casting", body: "ファッション、ビューティー、観光PRなど、ブランドの世界観に合う人選をご提案します。" },
    { title: "Event Appearance", body: "ローンチ、レセプション、展示会、VIP向けイベントにふさわしい出演者を調整します。" },
    { title: "Global Production", body: "海外向け撮影、英語対応、インバウンド施策など、国際感のある案件を支援します。" }
  ],
  en: [
    { title: "Campaign Casting", body: "Casting for fashion, beauty, hospitality, tourism, and brand-led visual campaigns." },
    { title: "Event Appearance", body: "Refined talent coordination for launches, receptions, exhibitions, and VIP-facing events." },
    { title: "Global Production", body: "Bilingual support for overseas campaigns, inbound projects, and international productions." }
  ]
};

const proofItems = {
  ja: [
    {
      title: "MODEL CASTING",
      subtitle: "Fashion / Beauty / Lifestyle",
    },
    {
      title: "BRAND SHOOTING",
      subtitle: "Campaign / Editorial / Visual",
    },
    {
      title: "SNS PROMOTION",
      subtitle: "Instagram / YouTube / TikTok",
    },
    {
      title: "GLOBAL PROJECTS",
      subtitle: "Overseas / Bilingual / International",
    },
  ],
  en: [
    {
      title: "MODEL CASTING",
      subtitle: "Fashion / Beauty / Lifestyle",
    },
    {
      title: "BRAND SHOOTING",
      subtitle: "Campaign / Editorial / Visual",
    },
    {
      title: "SNS PROMOTION",
      subtitle: "Instagram / YouTube / TikTok",
    },
    {
      title: "GLOBAL PROJECTS",
      subtitle: "Overseas / Bilingual / International",
    },
  ],
};

const workImages = [
  "/works/works1.jpg",
  "/works/works2.jpg",
  "/works/works3.jpg",
  "/works/works4.jpg",
];

const lineConsultationUrl = "https://lin.ee/RDw8302";
const lineQrImage = "/line-qr-v2.png";

const applySectionLabels = {
  ja: {
    line: "LINEで相談する",
    applyAlternative: "LINE以外をご希望の方はこちら",
    qrAlt: "GG Agency LINE公式 QRコード",
    qrNote: "QRコードからも相談できます"
  },
  en: {
    line: "Talk on LINE",
    applyAlternative: "Prefer not to use LINE? Apply here",
    qrAlt: "GG Agency official LINE QR code",
    qrNote: "You can also scan the QR code"
  }
};

export function HomePage({ content }: { content: SiteContent }) {
  const talentHref = `/${content.locale}/talent`;
  const contactHref = `/${content.locale}/contact`;
  const applyHref = "/apply";
  const featuredTalents = talents.slice(0, 3);
  const localeServices = services[content.locale];
  const proof = proofItems[content.locale];
  const applyLabels = applySectionLabels[content.locale];

  return (
    <div className="bg-[#050505] text-white">
      <section className="relative min-h-[92svh] overflow-hidden">
        <Image src="/hero.jpg" alt="GG AGENCY editorial hero visual" fill priority className="object-cover object-top object-[58%_center]" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.58)_48%,rgba(0,0,0,0.16)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-12 pt-28 sm:px-8 lg:pb-20">
          <div className="max-w-5xl">
            <Kicker>{content.hero.eyebrow}</Kicker>
            <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.94] text-white sm:text-7xl lg:text-8xl">{content.hero.title}</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">{content.hero.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LuxuryButton href={talentHref} variant="primary" event="hero_view_talent">
                {content.labels.viewTalent}
              </LuxuryButton>
              <LuxuryButton href={contactHref} variant="secondary" event="hero_contact">
                {content.labels.booking}
              </LuxuryButton>
            </div>
            <a
              href="https://www.g1g1g1.com/"
              target="_blank"
              rel="noreferrer"
              className="focus-ring group mt-5 inline-flex min-h-16 w-full max-w-md flex-col justify-center border border-[#c8a86a]/70 bg-black/72 px-5 py-4 text-[#f3dfad] shadow-[0_18px_48px_rgba(0,0,0,0.22)] transition hover:border-[#e3c983] hover:bg-[#c8a86a] hover:text-black sm:mt-6 sm:w-auto sm:min-w-[360px] sm:px-6"
              {...trackingAttrs("hero_apply_link")}
            >
              <span className="inline-flex items-center gap-2 text-[15px] font-semibold leading-6 tracking-[0.1em] sm:text-base">
                {content.hero.applyCta.title}
                <ArrowRight aria-hidden className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
              <span className="mt-1 text-xs font-medium leading-5 tracking-[0.12em] text-[#d8bd7d]/78 transition group-hover:text-black/70 sm:text-sm">{content.hero.applyCta.note}</span>
            </a>
            <p className="mt-8 max-w-xl border-l border-[#c8a86a]/60 pl-4 text-xs uppercase leading-6 tracking-[0.2em] text-white/48">
              {content.hero.note}
            </p>
          </div>
        </div>
      </section>

      <section id="talent" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeader eyebrow={content.sections.talent.eyebrow} title={content.sections.talent.title} description={content.sections.talent.description}>
          <Link className="focus-ring hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#d8bd7d] sm:inline-flex" href={talentHref}>
            {content.labels.viewTalent}
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </SectionHeader>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTalents.filter((talent) => !talent.hidden).map((talent) => {
  const name = content.locale === "ja" ? talent.name : talent.englishName;

            return (
              <Link key={talent.slug} href={`${talentHref}/${talent.slug}`} className="focus-ring group block overflow-hidden border border-white/10 bg-white/[0.03]">
                <article className="relative min-h-[560px]">
                  <Image src={talent.image} alt={`${name} profile`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/14 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-4xl leading-none text-white">{name}</h3>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-[#090807] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow={content.sections.services.eyebrow} title={content.sections.services.title} description={content.sections.services.description} />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {localeServices.map((service) => (
              <article key={service.title} className="border border-white/10 bg-black/35 p-7 sm:p-8">
                <h3 className="font-serif text-3xl text-white">{service.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/62">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeader eyebrow={content.sections.proof.eyebrow} title={content.sections.proof.title} description={content.sections.proof.description} />
        <div className="mt-12 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <WorkImage image={workImages[0]} index={1} className="min-h-[540px] sm:min-h-[680px]" />
          <div className="grid gap-4">
            {workImages.slice(1).map((image, index) => (
              <WorkImage key={image} image={image} index={index + 2} className="min-h-[260px] sm:min-h-[320px]" />
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-4">
          {proof.map((item) => (
  <div
    key={item.title}
    className="bg-[#050505] px-5 py-5"
  >
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
      {item.title}
    </p>

    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#c8a86a]">
      {item.subtitle}
    </p>
  </div>
))}
        </div>
      </section>

      <section id="brands" className="relative overflow-hidden border-y border-white/10">
        <Image src="/talent3.jpg" alt="GG AGENCY brand collaboration visual" fill className="object-cover object-center opacity-45" sizes="100vw" />
        <div className="absolute inset-0 bg-black/68" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:py-28">
          <div>
            <Kicker>{content.sections.global.eyebrow}</Kicker>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">{content.sections.global.title}</h2>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">{content.sections.global.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {content.sections.global.points.map((point) => (
                <div key={point} className="flex items-center gap-3 border border-white/12 bg-black/35 px-4 py-4 text-sm uppercase tracking-[0.14em] text-white/76">
                  <Globe2 aria-hidden className="h-4 w-4 text-[#d8bd7d]" />
                  {point}
                </div>
              ))}
            </div>
            <LuxuryButton className="mt-8" href={contactHref} variant="primary" event="brand_contact">
              {content.labels.booking}
            </LuxuryButton>
          </div>
        </div>
      </section>

      <section id="apply" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-28">
        <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-white/[0.03]">
          <Image src="/apply-v3.jpg" alt="GG AGENCY talent application visual" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div>
          <Kicker>{content.sections.faq.eyebrow}</Kicker>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">{content.sections.faq.title}</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/66">{content.sections.faq.description}</p>
          <div className="mt-8 max-w-xl border border-[#c8a86a]/30 bg-[#090807] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:p-5">
            <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="grid gap-3">
                <a
                  className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-3 border border-[#c8a86a]/70 bg-black px-5 py-3 text-sm font-semibold tracking-[0.14em] text-[#f3dfad] transition hover:border-[#e3c983] hover:bg-[#0d0b08] hover:text-white sm:w-auto"
                  href={lineConsultationUrl}
                  rel="noreferrer"
                  target="_blank"
                  {...trackingAttrs("apply_line_consult")}
                >
                  <LineIcon />
                  {applyLabels.line}
                </a>
                <Link
                 href={applyHref}
                 className="..."
                 >
                 {applyLabels.applyAlternative}
                 </Link>

                 <a
                 href="https://www.g1g1g1.com/"
                 target="_blank"
                 rel="noreferrer"
                 className="inline-flex text-xs font-semibold tracking-[0.12em] text-[#c8a86a] underline underline-offset-4 hover:text-white"
                 >
                 モデル応募について詳しくはこちら
                 </a>

                <p className="text-xs leading-6 tracking-[0.08em] text-white/42">
  {applyLabels.qrNote}
                </p>
              </div>
              <a
                aria-label={applyLabels.qrAlt}
                className="focus-ring mx-auto grid w-full max-w-[164px] gap-2 border border-[#c8a86a]/35 bg-black p-3 transition hover:border-[#e3c983] sm:mx-0"
                href={lineConsultationUrl}
                rel="noreferrer"
                target="_blank"
                {...trackingAttrs("apply_line_qr")}
              >
                <Image src={lineQrImage} alt={applyLabels.qrAlt} width={140} height={140} className="h-auto w-full" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl border border-[#c8a86a]/35 bg-[#0b0a08] p-7 sm:p-12 lg:p-16">
          <Kicker>Contact</Kicker>
          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">{content.sections.finalCta.title}</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/66">{content.sections.finalCta.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LuxuryButton href={talentHref} variant="secondary" event="final_view_talent">
              {content.labels.viewTalent}
            </LuxuryButton>
            <LuxuryButton href={contactHref} variant="primary" event="final_contact_cta">
              {content.labels.booking}
            </LuxuryButton>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ children, description, eyebrow, title }: { children?: ReactNode; description: string; eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <Kicker>{eyebrow}</Kicker>
        <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">{title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/62">{description}</p>
      </div>
      {children}
    </div>
  );
}

function WorkImage({ className, image, index }: { className?: string; image: string; index: number }) {
  return (
    <div className={`relative overflow-hidden border border-white/10 bg-white/[0.03] ${className || ""}`}>
      <Image src={image} alt={`GG AGENCY work visual ${index}`} fill className="object-cover transition duration-700 hover:scale-[1.03]" sizes="(min-width: 768px) 50vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </div>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d8bd7d]">{children}</p>;
}

function LineIcon() {
  return (
    <svg aria-hidden className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24">
      <path
        d="M20.2 11.1c0 4.2-3.8 7.6-8.4 7.6-.8 0-1.6-.1-2.4-.3L5 20.2l1.4-3.6c-1.8-1.4-2.8-3.3-2.8-5.5 0-4.2 3.8-7.6 8.4-7.6s8.2 3.4 8.2 7.6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path d="M7.5 10.1v3h1.7m1.6-3v3m2-3v3l2-3v3m1.8-3h-1.7v3h1.7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

function LuxuryButton({
  children,
  className = "",
  event,
  href,
  variant
}: {
  children: ReactNode;
  className?: string;
  event: string;
  href: string;
  variant: "primary" | "secondary";
}) {
  const base = "focus-ring inline-flex min-h-12 items-center justify-center border px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition";
  const variants = {
    primary: "border-[#c8a86a] bg-[#c8a86a] text-black hover:bg-[#e3c983]",
    secondary: "border-white/28 bg-transparent text-white hover:border-[#c8a86a] hover:text-[#e3c983]"
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...trackingAttrs(event)}>
      {children}
    </Link>
  );
}
