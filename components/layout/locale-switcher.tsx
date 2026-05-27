"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/types/content";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const path = usePathname() || `/${locale}`;
  const jaPath = path.replace(/^\/en/, "/ja");
  const enPath = path.replace(/^\/ja/, "/en");
  return (
    <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em]" aria-label="Language switcher">
      <Link className={cn("focus-ring px-2 py-2", locale === "ja" ? "text-white" : "text-white/45")} href={jaPath}>
        JA
      </Link>
      <span className="text-white/25">/</span>
      <Link className={cn("focus-ring px-2 py-2", locale === "en" ? "text-white" : "text-white/45")} href={enPath}>
        EN
      </Link>
    </div>
  );
}
