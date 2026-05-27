import Link from "next/link";
import type { SiteContent } from "@/types/content";
import { socialLinks } from "@/data/social-links";

export function Footer({ content }: { content: SiteContent }) {
  const description =
    content.locale === "ja"
      ? "国内外の撮影、イベント出演、ブランド案件に対応するハイエンドモデル・タレントエージェンシー。"
      : "A high-end model and talent agency for refined shoots, appearances, brand projects, and international inquiries.";

  return (
    <footer className="border-t border-white/10 bg-black text-pearl">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl text-white">GG Agency</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-pearl/62">{description}</p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a86a]">Site</h2>
          <div className="mt-4 grid gap-3 text-sm text-pearl/75">
            <Link href={`/${content.locale}/talent`}>Talent</Link>
            <Link href={`/${content.locale}#services`}>Services</Link>
            <Link href={`/${content.locale}#works`}>Works</Link>
            <Link href={`/${content.locale}#brands`}>Brands</Link>
            <Link href={`/${content.locale}/contact`}>Contact</Link>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a86a]">Social</h2>
          <div className="mt-4 grid gap-3 text-sm text-pearl/75">
            {socialLinks.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-pearl/10 px-5 py-5 text-center text-xs text-pearl/50">
        © {new Date().getFullYear()} GG Agency. All rights reserved.
      </div>
    </footer>
  );
}
