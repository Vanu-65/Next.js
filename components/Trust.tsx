import { CheckCircle2, MessageSquareMore, ShieldCheck } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import Card from "@/components/Card";
import SectionIntro from "@/components/SectionIntro";

const TRUST_ITEMS = [
  {
    title: "Понятно без сложных терминов",
    description:
      "Объясняем решение простым языком: что делаем, зачем это нужно и какой следующий шаг.",
    icon: CheckCircle2,
  },
  {
    title: "Один канал связи",
    description:
      "Сайт и Telegram-бот работают как одна система, чтобы заявки не терялись между разными точками контакта.",
    icon: MessageSquareMore,
  },
  {
    title: "Прозрачный путь до результата",
    description:
      "Сначала показываем понятный план, потом запускаем нужные инструменты и только после этого масштабируем.",
    icon: ShieldCheck,
  },
];

export function Trust() {
  return (
    <section className="px-6 py-6 md:px-10 md:py-8">
      <div className="mx-auto max-w-6xl rounded-[32px] border-2 border-border bg-surface p-6 md:p-8">
        <SectionIntro
          eyebrow="Доверие"
          title="Почему с такой системой проще доверить рост бизнеса"
          description="Мы убираем лишнюю сложность и делаем путь клиента понятным с первого касания: от оффера до заявки и дальнейшей обработки."
          className="max-w-3xl"
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {TRUST_ITEMS.map((item, index) => (
            <AnimatedReveal key={item.title} delay={0.08 * (index + 1)}>
              <Card className="h-full bg-surface-muted p-5">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-primary/20 bg-primary/10 text-primary">
                  <item.icon size={20} strokeWidth={1.9} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-soft md:text-base">
                  {item.description}
                </p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
