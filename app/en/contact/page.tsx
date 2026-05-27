import { buildMetadata } from "@/lib/seo";
import { LuxuryContactPage } from "@/components/sections/contact-page";

export const metadata = buildMetadata({
  locale: "en",
  path: "/en/contact",
  title: "Contact | GG Agency",
  description: "Contact GG Agency for shoots, appearances, casting, and international brand inquiries."
});

export default function EnContactPage() {
  return <LuxuryContactPage locale="en" />;
}
