import type { ReactNode } from "react";

export function SimplePage({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#050505] px-5 py-16 text-white sm:px-8 lg:py-24">
      <section className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c8a86a]">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.98] sm:text-7xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-white/66">{description}</p>
        {children ? <div className="mt-12">{children}</div> : null}
      </section>
    </div>
  );
}

export function SimpleInfoGrid({ items }: { items: Array<{ title: string; body: string }> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="border border-white/12 bg-white/[0.03] p-6">
          <h2 className="font-serif text-2xl text-white">{item.title}</h2>
          <p className="mt-4 text-sm leading-7 text-white/62">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
