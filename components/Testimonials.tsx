import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionIntro from "@/components/SectionIntro";

const TESTIMONIALS = [
  {
    name: "Алексей",
    role: "услуги для бизнеса",
    text: "Стало понятно, что делать первым: усилили оффер и связали страницу с ботом для заявок.",
  },
  {
    name: "Марина",
    role: "локальный сервис",
    text: "Бот помог не терять сообщения и быстрее отвечать клиентам после рекламы.",
  },
  {
    name: "Игорь",
    role: "экспертные услуги",
    text: "Получилась простая система: сайт объясняет ценность, а Telegram забирает обращение.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-bg-soft py-20">
      <Container>
        <SectionIntro
          eyebrow="Отзывы"
          title="Что ценят клиенты"
          description="Фокус не на сложных технологиях, а на понятном пути до заявки и результате для бизнеса."
          className="mx-auto text-center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <Card key={item.name}>
              <p className="text-base leading-7 text-text-secondary">
                “{item.text}”
              </p>
              <div className="mt-6">
                <p className="font-semibold text-text">{item.name}</p>
                <p className="text-sm text-text-secondary">{item.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
