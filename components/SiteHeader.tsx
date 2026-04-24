import Link from "next/link";
import {
  NAVIGATION_ITEMS,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link href="/" className="min-w-0">
          <div className="text-lg font-semibold text-foreground">{SITE_NAME}</div>
          <p className="text-sm text-text-soft">{SITE_TAGLINE}</p>
        </Link>

        <nav aria-label="Основная навигация">
          <ul className="flex items-center gap-5 text-sm text-text-soft">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
