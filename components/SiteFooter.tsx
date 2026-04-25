import Link from "next/link";
import {
  NAVIGATION_ITEMS,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:px-10">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-foreground">{SITE_NAME}</p>
          <p className="max-w-xl text-sm leading-6 text-text-soft">
            {SITE_TAGLINE}. Помогаем малому бизнесу запускать сайты, чат-боты и
            AI-инструменты без лишней сложности.
          </p>
        </div>

        <nav aria-label="Навигация в подвале">
          <ul className="space-y-2 text-sm text-text-soft">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
