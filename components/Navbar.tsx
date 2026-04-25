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
    <header className="sticky top-0 z-40 border-b-2 border-white/20 bg-gradient-to-r from-[#1e2f78] via-[#3a54b0] to-[#4a62c4] shadow-[0_8px_32px_rgba(55,72,145,0.34)] backdrop-blur-md">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href="/" className="min-w-0">
          <div className="bg-gradient-to-r from-white via-[#c7d7ff] to-[#ffb088] bg-clip-text text-lg font-bold tracking-tight text-transparent">
            {SITE_NAME}
          </div>
          <p className="text-sm text-white/80">{SITE_TAGLINE}</p>
        </Link>

        <nav className="hidden md:block" aria-label="Основная навигация">
          <ul className="flex items-center gap-6 text-sm font-medium text-white/90">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-[#ffb088]"
                >
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
