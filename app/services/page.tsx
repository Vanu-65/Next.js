import type { Metadata } from "next";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import Button from "@/components/Button";
import {
  SEO_KEYWORDS,
  SITE_NAME,
  buildTelegramBotUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Услуги SVB",
  description:
    "Услуги SVB для малого бизнеса: сайты, чат-боты и AI-инструменты для привлечения клиентов и автоматизации процессов.",
  keywords: SEO_KEYWORDS,
  alternates: {
    canonical: "/services",
  },
};

const SERVICES = [
  {
    title: "Сайт под ключ",
    description:
      "Собираем сайт, который быстро объясняет ценность, убирает лишние вопросы и ведёт клиента к заявке.",
    benefit: "Подходит, если трафик есть, а обращений мало.",
    href: buildTelegramBotUrl("services_site"),
  },
  {
    title: "Чат-бот под ключ",
    description:
      "Настраиваем Telegram-бота, который отвечает, помогает собрать контакт и не даёт заявкам теряться.",
    benefit: "Подходит, если сообщения приходят хаотично и теряются.",
    href: buildTelegramBotUrl("services_bot"),
  },
  {
    title: "Консультация и стратегия",
    description:
      "Помогаем понять, что запускать первым: сайт, бота или AI-инструменты, чтобы не тратить бюджет на лишнее.",
    benefit: "Подходит, если нужен ясный план без долгих экспериментов.",
    href: buildTelegramBotUrl("services_consultation"),
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 text-foreground md:px-10">
      <div className="mx-auto max-w-5xl">
        <AnimatedReveal className="max-w-4xl space-y-5">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Услуги SVB
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl md:leading-[1.05]">
            {SITE_NAME}: решения для привлечения клиентов, сохранения заявок и
            роста продаж
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-text-soft">
            Здесь нет абстрактных услуг ради галочки. Каждый формат нужен для
            конкретной задачи: сделать понятный сайт, не терять обращения или
            быстро понять, какой шаг даст рост первым.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              variant="accent"
              href={buildTelegramBotUrl("services_hero")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Получить предложение в боте
            </Button>
            <Button
              variant="ghost"
              href="/chat-bot-dlya-biznesa"
            >
              Посмотреть пример решения
            </Button>
          </div>
        </AnimatedReveal>

        <AnimatedReveal className="mt-12 grid gap-4 rounded-[28px] border border-border bg-surface p-6 text-sm text-text-soft md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface-muted px-4 py-4">
            Понятный путь от первого касания до заявки
          </div>
          <div className="rounded-2xl border border-border bg-surface-muted px-4 py-4">
            Один канал связи без потери обращений
          </div>
          <div className="rounded-2xl border border-border bg-surface-muted px-4 py-4">
            Решение под задачу, а не набор лишних услуг
          </div>
        </AnimatedReveal>

        <div className="mt-12 grid gap-6">
          {SERVICES.map((service, index) => (
            <AnimatedReveal key={service.title} delay={0.08 * (index + 1)}>
              <article className="rounded-[30px] border border-border bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-background hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 leading-8 text-text-soft">
                      {service.description}
                    </p>
                    <p className="mt-4 text-sm font-medium text-primary">
                      {service.benefit}
                    </p>
                  </div>

                  <Button
                    variant="accent"
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    Получить решение
                  </Button>
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal className="mt-12 rounded-[32px] border border-primary/15 bg-primary/8 p-8 md:p-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Следующий шаг
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Не уверены, что выбрать первым?
            </h2>
            <p className="text-lg leading-8 text-text-soft">
              Просто напишите в бота, что у вас сейчас не работает. Он поможет
              начать диалог, а дальше станет понятнее, нужен вам сайт, бот или
              сначала консультация.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Button
              variant="accent"
              href={buildTelegramBotUrl("services_cta")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Запустить Telegram-бота
            </Button>
            <Button
              variant="ghost"
              href="/"
            >
              Вернуться на главную
            </Button>
          </div>
        </AnimatedReveal>
      </div>
    </main>
  );
}
