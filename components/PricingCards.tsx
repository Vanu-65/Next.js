import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionIntro from "@/components/SectionIntro";
import { buildTelegramBotUrl } from "@/lib/site";

const PLANS = [
  {
    name: "Старт",
    price: "от 30 000 ₽",
    description: "Быстрый запуск понятной страницы под одну услугу.",
    features: ["Оффер", "Landing page", "Базовый CTA"],
    href: buildTelegramBotUrl("pricing_start"),
    highlighted: false,
  },
  {
    name: "Рост",
    price: "от 60 000 ₽",
    description: "Сайт и Telegram-бот как единая система заявок.",
    features: ["Сайт", "Telegram-бот", "Сценарии заявок"],
    href: buildTelegramBotUrl("pricing_growth"),
    highlighted: true,
  },
  {
    name: "Система",
    price: "индивидуально",
    description: "AI-инструменты, автоматизация и усиление продаж.",
    features: ["AI-процессы", "Автоматизация", "Стратегия роста"],
    href: buildTelegramBotUrl("pricing_system"),
    highlighted: false,
  },
];

export default function PricingCards() {
  return (
    <section className="bg-bg py-20">
      <Container>
        <SectionIntro
          eyebrow="Pricing"
          title="Выберите формат запуска"
          description="Три понятных уровня, чтобы начать с нужного масштаба и не переплачивать за лишнее."
          className="mx-auto text-center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={plan.highlighted ? "border-2 border-primary shadow-lg" : ""}
            >
              <div className="flex h-full flex-col">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {plan.name}
                  </p>
                  <p className="mt-4 text-3xl font-bold tracking-tight text-text">
                    {plan.price}
                  </p>
                  <p className="mt-3 leading-7 text-text-secondary">
                    {plan.description}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3 text-sm text-text-secondary">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "accent" : "primary"}
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full"
                >
                  Обсудить
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
