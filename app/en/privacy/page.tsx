import { buildMetadata } from "@/lib/seo";
import { SimpleInfoGrid, SimplePage } from "@/components/sections/simple-page";

export const metadata = buildMetadata({
  locale: "en",
  path: "/en/privacy",
  title: "Privacy Policy | GG Agency",
  description: "Privacy policy for GG Agency inquiry form operation."
});

export default function EnPrivacyPage() {
  return (
    <SimplePage eyebrow="Privacy" title="Privacy Policy" description="Information submitted through the inquiry form is used to respond to messages and review project details.">
      <SimpleInfoGrid
        items={[
          { title: "Information", body: "Name, company, email address, and inquiry details." },
          { title: "Purpose", body: "Replying to inquiries, reviewing project details, and communication." },
          { title: "Disclosure", body: "We do not disclose personal information to third parties without consent except as required by law." },
          { title: "Contact", body: "For privacy inquiries, please contact us through the inquiry form." }
        ]}
      />
    </SimplePage>
  );
}
