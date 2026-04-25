import Button from "@/components/Button";
import Container from "@/components/Container";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { buildTelegramBotUrl } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-text via-[#152238] to-primary-dark py-20 text-white">
      {/* Мягкие цветные пятна для более «живого» фона */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/30 blur-[80px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-primary/35 blur-[70px]"
      />
      <Container className="relative z-10">
        <AnimatedReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-gradient-heading-cta text-3xl font-bold tracking-tight md:text-4xl">
            Получите решение под ваш бизнес
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
            Разберём ваш кейс и предложим систему роста
          </p>

          <div className="mt-6">
            <Button
              variant="accent"
              href={buildTelegramBotUrl("cta")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Оставить заявку
            </Button>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
