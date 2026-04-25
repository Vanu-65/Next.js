import { AnimatedReveal } from "@/components/AnimatedReveal";
import SectionIntro from "@/components/SectionIntro";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Анализ бизнеса",
    description:
      "Изучаем, как сейчас приходят клиенты, где теряются заявки и что мешает росту.",
  },
  {
    step: "02",
    title: "Создание сайта",
    description:
      "Собираем понятную структуру сайта, чтобы клиент сразу видел ценность и понимал следующий шаг.",
  },
  {
    step: "03",
    title: "Настройка бота",
    description:
      "Подключаем Telegram-бота для ответов, заявок и автоматизации повторяющихся действий.",
  },
  {
    step: "04",
    title: "Запуск клиентов",
    description:
      "Соединяем сайт и бота в одну систему, чтобы привлекать клиентов и не терять обращения.",
  },
];

export function Process() {
  return (
    <section className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Process"
          title="Понятный путь работы без лишней сложности и хаоса"
          description="Сначала разбираемся в задаче, потом собираем решение и только после этого запускаем привлечение клиентов. Так человеку легче доверять процессу."
        />

        <div className="relative mt-10">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-primary/40 via-primary/18 to-transparent md:left-8"
          />

          <div className="space-y-6">
            {PROCESS_STEPS.map((item, index) => (
              <AnimatedReveal
                key={item.step}
                className="relative pl-16 md:pl-24"
                delay={0.08 * (index + 1)}
              >
                <div className="absolute left-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/35 bg-surface text-sm font-semibold text-primary shadow-[0_0_24px_rgba(45,91,255,0.28)] md:h-16 md:w-16 md:text-base">
                  {item.step}
                </div>

                <div className="rounded-[28px] border-2 border-border bg-surface p-6 transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background hover:shadow-[0_20px_50px_rgba(45,91,255,0.18)]">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-text-soft md:text-base">
                    {item.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
