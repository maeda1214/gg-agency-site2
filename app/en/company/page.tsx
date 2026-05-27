import { buildMetadata } from "@/lib/seo";
import { SimpleInfoGrid, SimplePage } from "@/components/sections/simple-page";

export const metadata = buildMetadata({
  locale: "en",
  path: "/en/company",
  title: "Company | GG Agency",
  description: "Company profile for GG Agency."
});

export default function EnCompanyPage() {
  return (
    <SimplePage eyebrow="Company" title="Quiet aesthetics, ready for production." description="GG Agency is a Tokyo-based model and talent agency for refined domestic and international brand projects.">
      <SimpleInfoGrid
        items={[
          { title: "Company", body: "GG Agency" },
          { title: "Location", body: "Tokyo, Japan" },
          { title: "Focus", body: "Fashion, beauty, hospitality, editorial, event, and international projects." },
          { title: "Contact", body: "Please contact us through the inquiry form." }
        ]}
      />
    </SimplePage>
  );
}
