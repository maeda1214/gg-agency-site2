import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function absoluteUrl(path = "") {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return new URL(path, base).toString();
}

export function localePath(locale: "ja" | "en", path = "") {
  return `/${locale}${path}`;
}
