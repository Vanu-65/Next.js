import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import {
  NAVIGATION_ITEMS,
  SITE_NAME,
  SITE_TAGLINE,
  buildTelegramBotUrl,
} from "@/lib/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href="/" className="min-w-0">
          <div className="text-lg font-bold tracking-tight text-text">
            {SITE_NAME}
          </div>
          <p className="text-sm text-text-secondary">{SITE_TAGLINE}</p>
        </Link>

        <nav className="hidden md:block" aria-label="Основная навигация">
          <ul className="flex items-center gap-6 text-sm font-medium text-text-secondary">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          variant="accent"
          href={buildTelegramBotUrl("navbar")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex"
        >
          Заявка
        </Button>
      </Container>
    </header>
  );
}
