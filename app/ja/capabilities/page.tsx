import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "ja",
  path: "/ja/capabilities",
  title: "Capabilities | GG Agency",
  description: "GG Agencyに依頼できるサービス内容。",
});

const services = [
  {
    title: "Brand Shooting",
    subtitle: "ブランド撮影",
    body: "ファッション、ビューティー、ライフスタイル領域のブランド撮影に対応します。",
  },
  {
    title: "SNS Promotion",
    subtitle: "SNSプロモーション",
    body: "Instagram、YouTubeなどのSNS展開に合わせたモデル・タレント提案を行います。",
  },
  {
    title: "Talent Casting",
    subtitle: "モデル・タレントキャスティング",
    body: "企画の世界観に合わせて、最適なモデル・タレントを提案します。",
  },
  {
    title: "Event Appearance",
    subtitle: "イベント出演",
    body: "展示会、PRイベント、ブランドイベントなどへの出演相談に対応します。",
  },
  {
    title: "Global Projects",
    subtitle: "海外向けプロジェクト",
    body: "海外向け撮影、プロモーション、グローバル案件の相談に対応します。",
  },
  {
    title: "Creative Production",
    subtitle: "クリエイティブ制作支援",
    body: "撮影、ビジュアル制作、プロモーション設計まで、案件に応じて柔軟にサポートします。",
  },
];

export default function JaCapabilitiesPage() {
  return (
    <main className="bg-[#050505] text-white">
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c8a86a]">
          Capabilities
        </p>

        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">
          企業案件で依頼できること。
        </h1>

        <p className="mt-8 max-w-3xl text-base leading-8 text-white/70">
          GG Agencyは、ブランドの目的や世界観に合わせて、モデル・タレントの提案から撮影、
          SNS、イベント出演、海外向けプロジェクトまで柔軟に対応します。
        </p>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="border border-white/15 bg-white/[0.02] p-7 transition hover:border-[#c8a86a]/70"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c8a86a]">
                {service.title}
              </p>
              <h2 className="mt-5 font-serif text-3xl text-white">
                {service.subtitle}
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/65">
                {service.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <a
            href="/ja/contact"
            className="inline-flex bg-[#c8a86a] px-8 py-4 text-sm font-semibold tracking-[0.2em] text-black"
          >
            案件を相談する
          </a>
        </div>
      </section>
    </main>
  );
}