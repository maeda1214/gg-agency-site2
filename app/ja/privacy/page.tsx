import { buildMetadata } from "@/lib/seo";
import { SimpleInfoGrid, SimplePage } from "@/components/sections/simple-page";

export const metadata = buildMetadata({
  locale: "ja",
  path: "/ja/privacy",
  title: "Privacy Policy | GG Agency",
  description: "GG Agencyのプライバシーポリシー。"
});

export default function JaPrivacyPage() {
  return (
    <SimplePage
      eyebrow="Privacy"
      title="Privacy Policy"
      description="お問い合わせフォームで取得する情報は、返信と案件確認のために利用します。"
    >
      <SimpleInfoGrid
        items={[
          { title: "取得する情報", body: "お名前、会社名、メールアドレス、お問い合わせ内容など。" },
          { title: "利用目的", body: "お問い合わせへの返信、案件内容の確認、連絡のため。" },
          { title: "第三者提供", body: "法令に基づく場合を除き、本人の同意なく第三者へ提供しません。" },
          { title: "お問い合わせ", body: "個人情報に関するご相談は、お問い合わせフォームよりご連絡ください。" }
        ]}
      />
    </SimplePage>
  );
}
