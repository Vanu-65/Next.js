import type { Metadata } from "next";
import Button from "@/components/Button";
import { SEO_KEYWORDS, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Блог SVB",
  description:
    "Блог SVB с практическими материалами о привлечении клиентов, упаковке услуг и автоматизации бизнеса.",
  keywords: SEO_KEYWORDS,
  alternates: {
    canonical: "/blog",
  },
};

const ARTICLES = [
  {
    title: "Как привлечь клиентов через понятный оффер и сильную страницу",
    description:
      "Разбираем, как убрать общие фразы и показать клиенту реальную выгоду за первые секунды.",
    href: "/kak-privlech-klientov",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 text-foreground md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl space-y-4">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">
            Блог
          </span>
          <h1 className="text-gradient-heading-light text-4xl font-semibold md:text-5xl">
            {SITE_NAME}: полезные материалы для роста малого бизнеса
          </h1>
          <p className="text-lg leading-8 text-text-soft">
            Здесь статьи работают не сами по себе. Они отвечают на вопрос
            клиента и мягко ведут его к следующему шагу.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {ARTICLES.map((article) => (
            <article
              key={article.href}
              className="rounded-[30px] border-2 border-border bg-surface p-8"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                {article.title}
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-text-soft">
                {article.description}
              </p>
              <Button
                variant="accent"
                href={article.href}
                className="mt-6"
              >
                Читать страницу
              </Button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
