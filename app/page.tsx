import Link from "next/link";

export default function LanguagePage() {
  return (
    <main id="main" className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-pearl">
      <section className="w-full max-w-3xl text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#c8a86a]">GG Agency</p>
        <h1 className="font-serif text-4xl leading-tight text-white sm:text-6xl">Japanese talent and culture for global moments.</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/64">
          Choose your language to enter the bilingual agency site for brands, events, partners, and talent inquiries.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <Link className="focus-ring border border-[#c8a86a] bg-[#c8a86a] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black" href="/ja">
            Enter in Japanese
          </Link>
          <Link className="focus-ring border border-white/25 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white" href="/en">
            Enter in English
          </Link>
        </div>
      </section>
    </main>
  );
}
