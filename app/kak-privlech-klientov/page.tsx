import type { Metadata } from "next";
import Button from "@/components/Button";
import { SchemaMarkup } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Как привлечь клиентов для малого бизнеса",
  description:
    "Практическая страница о том, как привлечь клиентов через сильный оффер, понятную структуру сайта и правильный следующий шаг.",
  keywords: [
    "как привлечь клиентов",
    "развитие малого бизнеса",
    "сайт для привлечения клиентов",
  ],
  alternates: {
    canonical: "/kak-privlech-klientov",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как привлечь клиентов для малого бизнеса",
  description:
    "Практическая страница о том, как привлечь клиентов через сильный оффер, понятную структуру сайта и правильный следующий шаг.",
  inLanguage: "ru",
};

const STEPS = [
  "Сначала человек должен понять, какую проблему вы решаете.",
  "Потом он должен увидеть, почему вам можно доверять.",
  "После этого путь к заявке должен быть коротким и простым.",
];

export default function HowToGetClientsPage() {
  return (
    <>
      <SchemaMarkup schema={articleSchema} />
      <main className="min-h-screen bg-background px-6 py-20 text-foreground md:px-10">
        <article className="mx-auto max-w-4xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">
            Статья под SEO
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">
            Как привлечь клиентов, если сайт пока просто рассказывает о бизнесе
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-soft">
            Главная ошибка простая: страница говорит о компании, но не помогает
            клиенту быстро увидеть выгоду. Чтобы заявок стало больше, сайт
            должен не просто информировать, а вести человека к действию.
          </p>

          <div className="mt-10 rounded-[30px] border border-border bg-surface p-8">
            <h2 className="text-2xl font-semibold text-foreground">
              Три простых шага
            </h2>
            <ol className="mt-6 space-y-4">
              {STEPS.map((step, index) => (
                <li
                  key={step}
                  className="rounded-2xl border border-border bg-surface-muted p-5"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <p className="mt-4 text-lg leading-7 text-text-soft">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 rounded-[30px] border border-primary/15 bg-primary/8 p-8">
            <h2 className="text-2xl font-semibold text-foreground">
              Что делать дальше
            </h2>
            <p className="mt-4 leading-8 text-text-soft">
              Если хотите, чтобы страница работала как инструмент привлечения
              клиентов, следующий шаг это доработка оффера, блоков боли и
              финального CTA.
            </p>
            <Button
              variant="accent"
              href="/services"
              className="mt-6"
            >
              Перейти к услугам
            </Button>
          </div>
        </article>
      </main>
    </>
  );
}
