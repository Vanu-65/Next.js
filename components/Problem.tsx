import {
  BadgeDollarSign,
  CircleOff,
  Funnel,
  Inbox,
  type LucideIcon,
} from "lucide-react";
import Card from "@/components/Card";
import Container from "@/components/Container";
import { AnimatedReveal } from "@/components/AnimatedReveal";

type PainCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const PAIN_CARDS: PainCard[] = [
  {
    title: "Нет клиентов",
    description:
      "Потенциальные клиенты не доходят до заявки, потому что сайт не объясняет ценность и не ведёт к действию.",
    icon: Funnel,
  },
  {
    title: "Реклама не работает",
    description:
      "Деньги тратятся на трафик, но реклама не даёт стабильного результата и не превращается в понятный поток обращений.",
    icon: BadgeDollarSign,
  },
  {
    title: "Нет системы продаж",
    description:
      "Обращения приходят хаотично, менеджеры отвечают по-разному, а путь клиента до покупки не выстроен.",
    icon: CircleOff,
  },
  {
    title: "Потеря заявок",
    description:
      "Часть сообщений теряется между мессенджерами, формами и звонками, поэтому бизнес упускает уже тёплых клиентов.",
    icon: Inbox,
  },
];

export function Problem() {
  return (
    <section className="bg-bg py-20">
      <Container>
        <AnimatedReveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">
            Проблемы
          </span>
          <h2 className="text-gradient-heading-light mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Основные проблемы бизнеса
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-text-secondary md:text-lg">
            Если эти проблемы не закрыть системно, реклама и сайт продолжают
            тратить бюджет, но не дают стабильного потока заявок.
          </p>
        </AnimatedReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PAIN_CARDS.map((card, index) => (
            <AnimatedReveal
              key={card.title}
              delay={0.08 * (index + 1)}
            >
              <Card className="group h-full">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-accent/20 bg-accent/10 text-accent transition duration-300 group-hover:border-accent/35 group-hover:bg-accent/12">
                  <card.icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-text">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {card.description}
                </p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
