import Link from "next/link";
import { Menu } from "lucide-react";
import type { SiteContent } from "@/types/content";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";

export function Header({ content }: { content: SiteContent }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/88 text-pearl backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href={`/${content.locale}`} className="focus-ring font-serif text-xl font-semibold tracking-wide text-white">
          GG Agency
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {content.nav.map((item) => (
            <Link key={item.href} className="focus-ring text-sm font-medium text-white/68 transition hover:text-white" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <LocaleSwitcher locale={content.locale} />
          <Link className="focus-ring border border-[#c8a86a] bg-[#c8a86a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#e3c983]" href={`/${content.locale}/contact`}>
            Contact
          </Link>
        </div>
        <details className="group md:hidden">
          <summary className="focus-ring flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-white/20 bg-black text-white">
            <Menu aria-hidden className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </summary>
          <div className="absolute left-0 right-0 top-16 border-b border-white/10 bg-black px-5 py-5 shadow-soft">
            <nav className="grid gap-2" aria-label="Mobile navigation">
              {content.nav.map((item) => (
                <Link key={item.href} className="focus-ring min-h-12 border border-white/14 px-4 py-3 text-sm font-semibold text-white" href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link className="focus-ring min-h-12 border border-[#c8a86a] bg-[#c8a86a] px-4 py-3 text-sm font-semibold text-black" href={`/${content.locale}/contact`}>
                Contact
              </Link>
            </nav>
            <div className="mt-4">
              <LocaleSwitcher locale={content.locale} />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
