import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-screen items-center justify-center px-5 py-16 text-center">
      <section className="max-w-xl">
        <p className="text-xs uppercase tracking-[0.3em] text-brass">404</p>
        <h1 className="mt-4 font-serif text-4xl text-ink">Page not found</h1>
        <p className="mt-4 text-charcoal">The page may have moved, or the address may be incorrect.</p>
        <Link className="focus-ring mt-8 inline-flex border border-ink bg-ink px-6 py-3 text-sm font-semibold text-pearl" href="/">
          Back to language selection
        </Link>
      </section>
    </main>
  );
}
