import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/en/capabilities",
  title: "Capabilities | GG Agency",
  description: "What brands can request from GG Agency.",
});

const services = [
  {
    title: "Brand Shooting",
    subtitle: "Campaign and brand visuals",
    body: "Model and talent casting for fashion, beauty, lifestyle, and premium brand shoots.",
  },
  {
    title: "SNS Promotion",
    subtitle: "Social media campaigns",
    body: "Talent proposals for Instagram, YouTube, and social-first promotional projects.",
  },
  {
    title: "Talent Casting",
    subtitle: "Model and talent casting",
    body: "Carefully selected talent matched to the concept, tone, and audience of each project.",
  },
  {
    title: "Event Appearance",
    subtitle: "Events and appearances",
    body: "Talent support for exhibitions, PR events, brand launches, and promotional appearances.",
  },
  {
    title: "Global Projects",
    subtitle: "International projects",
    body: "Support for global campaigns, overseas-facing productions, and cross-border creative work.",
  },
  {
    title: "Creative Production",
    subtitle: "Creative support",
    body: "Flexible support for shoots, visual production, and promotional planning depending on project needs.",
  },
];

export default function EnCapabilitiesPage() {
  return (
    <main className="bg-[#050505] text-white">
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c8a86a]">
          Capabilities
        </p>

        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">
          What brands can request.
        </h1>

        <p className="mt-8 max-w-3xl text-base leading-8 text-white/70">
          GG Agency supports brand projects through talent proposals, campaign shoots,
          social media promotion, event appearances, and global creative productions.
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
            href="/en/contact"
            className="inline-flex bg-[#c8a86a] px-8 py-4 text-sm font-semibold tracking-[0.2em] text-black"
          >
            CONTACT US
          </a>
        </div>
      </section>
    </main>
  );
}