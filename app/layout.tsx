import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { AnalyticsScripts } from "@/lib/analytics";
import { siteUrl } from "@/lib/seo";

const sans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "GG Agency",
    template: "%s | GG Agency"
  },
  description: "Bilingual talent and culture agency for Japanese talent, events, social campaigns, and global partners."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a
          href="#main"
          className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:text-pearl"
        >
          Skip to content
        </a>
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
