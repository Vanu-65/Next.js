import Button from "@/components/Button";
import Container from "@/components/Container";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import {
  SITE_NAME,
  SITE_TAGLINE,
  buildTelegramBotUrl,
} from "@/lib/site";

const HERO_STATS = [
  "Понятный оффер вместо общих фраз",
  "Один путь от интереса до заявки",
  "Бот помогает не терять обращения 24/7",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-soft py-24 md:py-32">
      <div className="hero-orb hero-orb-left" aria-hidden="true" />
      <div className="hero-orb hero-orb-right" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.10),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.08),transparent_28%)]"
      />

      <Container>
        <AnimatedReveal className="relative z-10 text-center" y={32}>
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
              {SITE_NAME} — {SITE_TAGLINE}
            </span>

            <h1 className="mt-8 text-5xl font-bold tracking-tight text-text md:text-6xl md:leading-[1.05]">
              Создаём систему роста для малого бизнеса
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
              Сайты, чат-боты и AI-инструменты, которые приводят клиентов,
              сохраняют заявки и помогают бизнесу расти системно.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                href={buildTelegramBotUrl("hero")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Получить решение
              </Button>
              <Button variant="ghost" href="/svb-guide.txt" download>
                Скачать гайд
              </Button>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-text-secondary sm:grid-cols-3">
              {HERO_STATS.map((item, index) => (
                <AnimatedReveal key={item} delay={0.08 * (index + 1)}>
                  <div className="rounded-2xl border border-border bg-bg px-4 py-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    {item}
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
