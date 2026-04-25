import Link from "next/link";
import {
  Bot,
  BrainCircuit,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import Card from "@/components/Card";
import SectionIntro from "@/components/SectionIntro";

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const SERVICES: ServiceCard[] = [
  {
    title: "Создание сайтов на Next.js",
    description:
      "Собираем страницу, которая быстро объясняет ценность, снимает возражения и подводит к следующему шагу.",
    href: "/services",
    icon: MonitorSmartphone,
  },
  {
    title: "Telegram-боты",
    description:
      "Помогаем забрать обращение в Telegram, ответить на частые вопросы и не потерять клиента после первого интереса.",
    href: "/chat-bot-dlya-biznesa",
    icon: Bot,
  },
  {
    title: "AI-инструменты",
    description:
      "Подключаем AI там, где он экономит время: в обработке заявок, быстрых ответах и повторяющихся задачах команды.",
    href: "/services",
    icon: BrainCircuit,
  },
];

export function Solution() {
  return (
    <section className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Решение"
          title="Что мы меняем, чтобы сайт начал помогать продажам"
          description="Вместо разрозненных инструментов вы получаете одну понятную систему: сайт приводит к интересу, бот забирает контакт, AI ускоряет работу команды."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <AnimatedReveal
              key={service.title}
              delay={0.08 * (index + 1)}
            >
              <Card className="group h-full">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-primary/20 bg-primary/10 text-primary transition duration-300 group-hover:border-primary/35 group-hover:bg-primary/12">
                  <service.icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-soft md:text-base">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex rounded-full border-2 border-primary/20 bg-surface-muted px-5 py-3 font-medium text-primary transition duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary/8"
                >
                  Посмотреть решение
                </Link>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
