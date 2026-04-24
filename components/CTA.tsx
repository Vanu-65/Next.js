import Button from "@/components/Button";
import Container from "@/components/Container";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { buildTelegramBotUrl } from "@/lib/site";

export function CTA() {
  return (
    <section className="bg-text py-20 text-white">
      <Container>
        <AnimatedReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
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
