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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#4a62c4] via-[#6d82dc] to-[#eef2ff] py-24 md:py-32">
      <div className="hero-orb hero-orb-left" aria-hidden="true" />
      <div className="hero-orb hero-orb-right" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-15%,rgba(255,255,255,0.32),transparent_55%),radial-gradient(circle_at_88%_12%,rgba(232,148,108,0.28),transparent_32%),linear-gradient(180deg,rgba(36,52,120,0.28)_0%,transparent_50%,rgba(238,242,255,0.9)_100%)]"
      />

      <Container>
        <AnimatedReveal className="relative z-10 text-center" y={32}>
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex rounded-full border-2 border-white/35 bg-white/12 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-sm">
              {SITE_NAME} — {SITE_TAGLINE}
            </span>

            <h1 className="text-gradient-heading-hero mt-8 text-5xl font-bold tracking-tight md:text-6xl md:leading-[1.05]">
              Создаём систему роста для малого бизнеса
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90 drop-shadow-sm md:text-white/88">
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
              <Button
                variant="ghost"
                href="/svb-guide.txt"
                download
                className="!rounded-2xl border-2 border-white/45 !px-9 !py-4 bg-white/10 backdrop-blur-sm hover:border-white/70 hover:bg-white/20"
              >
                {/* Отдельный span — градиент по буквам, как в цветной части заголовка */}
                <span className="text-shimmer-guide font-semibold">
                  Скачать гайд
                </span>
              </Button>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-text sm:grid-cols-3">
              {HERO_STATS.map((item, index) => (
                <AnimatedReveal key={item} delay={0.08 * (index + 1)}>
                  <div className="rounded-2xl border-2 border-primary/25 bg-bg px-4 py-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
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
