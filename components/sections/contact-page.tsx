import type { Locale } from "@/types/content";
import { ContactForm } from "@/components/forms/contact-form";

const copy = {
  ja: {
    eyebrow: "Business Contact",
    title: "企業・ブランド案件のご相談はこちら。",
    description:
      "撮影、イベント出演、キャスティング、海外パートナー連携など、企業向けのご相談を受け付けています。モデル応募は専用フォームよりお送りください。"
  },
  en: {
    eyebrow: "Business Contact",
    title: "Tell us the shape of your project.",
    description:
      "For shoots, appearances, casting, and international brand inquiries. Model applications are handled separately through the apply form."
  }
};

export function LuxuryContactPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div className="bg-[#050505] text-white">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c8a86a]">{t.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.98] sm:text-7xl">{t.title}</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/66">{t.description}</p>
        </div>
        <ContactForm locale={locale} />
      </section>
    </div>
  );
}
