import type { ReactNode } from "react";
import type { SiteContent } from "@/types/content";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export function SiteShell({ content, children }: { content: SiteContent; children: ReactNode }) {
  return (
    <>
      <Header content={content} />
      <main id="main">{children}</main>
      <Footer content={content} />
    </>
  );
}
