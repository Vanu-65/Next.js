import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import {
  NAVIGATION_ITEMS,
  SITE_NAME,
  SITE_TAGLINE,
  buildTelegramBotUrl,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t-2 border-primary/30 bg-gradient-to-br from-text via-[#141b36] to-[#1e1b4b] text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <div>
            <p className="bg-gradient-to-r from-white via-[#a8c4ff] to-[#ffb088] bg-clip-text text-xl font-bold tracking-tight text-transparent">
              {SITE_NAME}
            </p>
            <p className="mt-1 text-sm text-gray-300">{SITE_TAGLINE}</p>
          </div>
          <p className="max-w-md text-sm leading-7 text-gray-300">
            Сайты, чат-боты и AI-инструменты для малого бизнеса, которые
            помогают привлекать клиентов и не терять заявки.
          </p>
        </div>

        <nav aria-label="Навигация в подвале">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
            Разделы
          </p>
          <ul className="space-y-3 text-sm text-gray-300">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
            Заявка
          </p>
          <Button
            variant="accent"
            href={buildTelegramBotUrl("footer")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в бота
          </Button>
        </div>
      </Container>
    </footer>
  );
}
