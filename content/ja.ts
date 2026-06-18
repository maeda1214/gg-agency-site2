import type { SiteContent } from "@/types/content";

export const jaContent: SiteContent = {
  locale: "ja",
  siteName: "GG Agency",
  meta: {
    title: "GG Agency | ハイエンドモデル・タレントエージェンシー",
    description:
      "GG Agencyは、国内外の撮影、イベント出演、ブランド案件、海外パートナー連携に対応するモデル・タレントエージェンシーです。"
  },
  nav: [
    { label: "Talent", href: "/ja/talent" },
    { label: "Services", href: "/ja#services" },
    { label: "Capabilities", href: "/ja/capabilities" },
    { label: "Works", href: "/ja#works" },
    { label: "Brands", href: "/ja#brands" },
    { label: "Contact", href: "/ja/contact" }
  ],
  hero: {
    eyebrow: "High-end model and talent agency",
    title: "世界観まで、美しく纏う。",
    description:
      "GG Agencyは、ファッション、ビューティー、イベント、海外向けプロジェクトにふさわしいモデル・タレントを提案します。",
    ctas: [
      { label: "タレントを見る", href: "/ja/talent", event: "hero_view_talent" },
      { label: "案件を相談する", href: "/ja/contact", event: "hero_contact" }
    ],
    applyCta: {
      title: "タレント・モデルになりたい方はこちら",
      note: "初心者・未経験もOK"
    },
    note: "Tokyo based. Available for brand campaigns, appearances, and international productions."
  },
  sections: {
    services: {
      eyebrow: "Services",
      title: "ブランドの空気まで設計するキャスティング。",
      description: "撮影、出演、SNS展開、海外案件まで、企画の温度感に合わせて最適な人選と進行を整えます。"
    },
    talent: {
      eyebrow: "Talent",
      title: "写真で伝わる、静かな存在感。",
      description: "ラグジュアリー、エディトリアル、グローバル案件に合うモデル・タレントを中心に掲載しています。"
    },
    global: {
  eyebrow: "Brand Partnerships",
  title: "海外案件にも対応できる、しなやかな制作体制。",
  description:
    "Luxury campaigns, editorial visuals and global creative collaborations.",
  points: [
  "Luxury Campaigns",
  "Editorial Visuals",
  "Global Collaborations",
  "Talent Casting",
],
},

proof: {
  eyebrow: "Works / Proof",
  title: "記憶に残るビジュアルへ。",
  description:
    "実績を数字で大きく見せるのではなく、ブランドの世界観を損なわない人選と画づくりを重視します。",
},
    instagram: {
      eyebrow: "Editorial Visuals",
      title: "SNS流入から、上質な問い合わせへ。",
      description: "Instagramで伝わる写真の力を、ブランド案件、出演依頼、海外パートナー連携へつなげます。"
    },
    faq: {
      eyebrow: "Apply",
      title: "モデル・タレント相談も受け付けています。",
      description: "所属や出演に関する相談は、活動内容と希望する方向性を添えてお問い合わせください。"
    },
    finalCta: {
      title: "案件のご相談を、お聞かせください。",
      description: "撮影、出演、ブランド案件、海外向け企画など、決まっている範囲だけで構いません。"
    }
  },
  labels: {
    viewDetails: "詳細を見る",
    contactUs: "問い合わせる",
    viewTalent: "タレントを見る",
    apply: "相談する",
    seeInstagram: "Instagram",
    languages: "Languages",
    booking: "案件を相談する",
    related: "Related talent",
    all: "All"
  }
};
