import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionIntro from "@/components/SectionIntro";

const FIELD_CLASS =
  "w-full rounded-xl border-2 border-border bg-bg px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10";

export default function LeadForm() {
  return (
    <section className="bg-bg py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            eyebrow="Заявка"
            title="Расскажите о задаче"
            description="Оставьте контакт и коротко опишите, что сейчас нужно: сайт, бот, AI-инструменты или понятный план запуска."
          />

          <Card>
            <form className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-text">
                  Имя
                </span>
                <input className={FIELD_CLASS} name="name" placeholder="Ваше имя" />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-text">
                  Контакт
                </span>
                <input
                  className={FIELD_CLASS}
                  name="contact"
                  placeholder="Telegram или телефон"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-text">
                  Задача
                </span>
                <textarea
                  className={`${FIELD_CLASS} min-h-32 resize-y`}
                  name="message"
                  placeholder="Например: нужен сайт и бот для заявок"
                />
              </label>

              <Button variant="accent" type="submit" className="w-full">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
