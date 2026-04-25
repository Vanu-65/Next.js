import type { Metadata } from "next";
import Button from "@/components/Button";
import { SchemaMarkup } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Чат-бот для бизнеса",
  description:
    "Страница услуги о том, как чат-бот для бизнеса помогает быстрее отвечать клиентам, собирать заявки и автоматизировать рутину.",
  keywords: [
    "чат-бот для бизнеса",
    "автоматизация бизнеса",
    "бот для заявок",
  ],
  alternates: {
    canonical: "/chat-bot-dlya-biznesa",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Чат-бот для бизнеса",
  description:
    "Услуга по созданию чат-бота для бизнеса, который собирает заявки и автоматизирует ответы клиентам.",
  serviceType: "Автоматизация бизнеса",
  areaServed: "RU",
};

const BENEFITS = [
  "Отвечает на частые вопросы без ожидания менеджера.",
  "Помогает клиенту оставить контакт в удобный момент.",
  "Снижает нагрузку на команду и ускоряет обработку обращений.",
];

export default function ChatBotServicePage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <main className="min-h-screen bg-background px-6 py-20 text-foreground md:px-10">
        <section className="mx-auto max-w-5xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">
            Страница услуги
          </span>
          <h1 className="text-gradient-heading-light mt-4 text-4xl font-semibold md:text-5xl">
            Чат-бот для бизнеса, который помогает собирать заявки и экономить
            время команды
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-soft">
            Такой бот не заменяет ваш бизнес. Он берёт на себя повторяющиеся
            шаги: отвечает, уточняет запрос и передаёт человеку уже тёплый
            интерес.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <article
                key={benefit}
                className="rounded-[28px] border-2 border-border bg-surface p-6"
              >
                <h2 className="text-xl font-semibold text-foreground">{benefit}</h2>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[30px] border-2 border-primary/15 bg-primary/8 p-8">
            <h2 className="text-2xl font-semibold text-foreground">
              Когда это особенно полезно
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-text-soft">
              Если у вас много однотипных вопросов, обращения приходят вечером
              или менеджеры тратят время на рутину, чат-бот помогает сделать
              процесс аккуратнее и быстрее.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button
                variant="accent"
                href="/services"
              >
                Вернуться к услугам
              </Button>
              <Button
                variant="ghost"
                href="/blog"
              >
                Посмотреть полезные страницы
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
