export default function AboutPage() {
  return (
    <main className="bg-[#050505] text-white">
      <section className="mx-auto max-w-5xl px-5 py-24 sm:px-8 lg:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c8a86a]">
          About
        </p>

        <h1 className="mt-6 font-serif text-5xl leading-tight sm:text-7xl">
          GG Agencyについて
        </h1>

        <p className="mt-8 max-w-3xl text-base leading-8 text-white/75">
          GG Agencyは、株式会社GAが運営するモデル・タレントエージェンシーです。
          ファッション、ビューティー、ライフスタイル、SNSプロモーション、
          ブランド案件を中心に、国内外のプロジェクトへ最適なモデル・タレントの提案を行っています。
        </p>

        <div className="mt-16 grid gap-6 border-t border-white/15 pt-10">
          {[
            ["会社名", "株式会社GA"],
            ["屋号", "GG Agency"],
            ["代表者", "小山 要"],
            ["所在地", "東京都渋谷区神宮前6-23-2"],
            ["設立", "2001年12月14日"],
            ["お問い合わせ", "info@gg1.jp"],
          ].map(([label, value]) => (
            <div key={label} className="grid gap-2 border-b border-white/10 pb-5 sm:grid-cols-[180px_1fr]">
              <p className="text-sm text-[#c8a86a]">{label}</p>
              <p className="text-white/85">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h2 className="font-serif text-3xl">事業内容</h2>
          <ul className="mt-6 grid gap-3 text-white/75 sm:grid-cols-2">
            <li>モデルキャスティング</li>
            <li>タレントマネジメント</li>
            <li>SNSプロモーション</li>
            <li>ブランド案件支援</li>
          </ul>
        </div>

        <div className="mt-14">
          <h2 className="font-serif text-3xl">SNS</h2>
          <p className="mt-6 text-white/75">Instagram / YouTube</p>
        </div>
      </section>
    </main>
  );
}