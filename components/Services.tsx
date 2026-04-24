import Button from "@/components/Button";
import Card from "@/components/Card";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import SectionIntro from "@/components/SectionIntro";
import {
  buildTelegramBotUrl,
  TELEGRAM_BOT_USERNAME,
} from "@/lib/site";

const SERVICE_ITEMS = [
  {
    title: "Сайт под ключ",
    description:
      "Создаём современный сайт, который показывает ценность продукта и помогает превращать посетителей в заявки.",
    href: buildTelegramBotUrl("service_site"),
    badge: "WEB",
  },
  {
    title: "Чат-бот под ключ",
    description:
      "Настраиваем бота для общения с клиентами, ответов на частые вопросы и сбора обращений без лишней рутины.",
    href: buildTelegramBotUrl("service_bot"),
    badge: "BOT",
  },
  {
    title: "Консультация",
    description:
      "Помогаем выбрать правильную цифровую стратегию: что запускать сначала, как связать сайт, бота и процессы продаж.",
    href: buildTelegramBotUrl("service_consultation"),
    badge: "ADV",
  },
];

export function Services() {
  return (
    <section className="border-y border-border bg-surface-muted px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <AnimatedReveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Services"
            title="Что можно запустить уже сейчас под вашу задачу"
            description="Мы оставили три простых варианта входа, чтобы вам было легко выбрать следующий шаг без перегруза и длинных сравнений."
            className="max-w-3xl"
          />

          <Button
            variant="ghost"
            href={buildTelegramBotUrl("services_overview")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Открыть {`@${TELEGRAM_BOT_USERNAME}`}
          </Button>
        </AnimatedReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {SERVICE_ITEMS.map((item, index) => (
            <AnimatedReveal
              key={item.title}
              delay={0.08 * (index + 1)}
            >
              <Card className="group h-full">
                <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {item.badge}
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-soft md:text-base">
                  {item.description}
                </p>
                <p className="mt-4 text-sm font-medium text-text-soft">
                  Понятный следующий шаг без длинного брифа.
                </p>
                <Button
                  variant="accent"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6"
                >
                  Получить предложение
                </Button>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
