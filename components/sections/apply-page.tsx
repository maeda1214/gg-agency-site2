import type { Locale } from "@/types/content";
import { ApplyForm } from "@/components/forms/apply-form";

const copy = {
  ja: {
    eyebrow: "Model Apply",
    title: "モデル応募はこちら。",
    description:
      "GG Agencyへの所属・活動相談をご希望の方は、必要事項と応募メッセージをお送りください。企業案件のご相談はお問い合わせフォームで受け付けています。"
  },
  en: {
    eyebrow: "Model Apply",
    title: "Apply as a model.",
    description:
      "For talent and model applications, please share the required details and your application message. Business inquiries are handled through the contact form."
  }
};

export function LuxuryApplyPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div className="bg-[#050505] text-white">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c8a86a]">{t.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.98] sm:text-7xl">{t.title}</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/66">{t.description}</p>
        </div>
        <ApplyForm locale={locale} />
      </section>
    </div>
  );
}
