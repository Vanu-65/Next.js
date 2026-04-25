import Image from "next/image";

const CASES = [
  {
    title: "Кейс 01",
    result: "Здесь будет короткий результат или заметный эффект от внедрения решения.",
    imageSrc: "/window.svg",
    imageAlt: "Иконка окна как заглушка кейса",
  },
  {
    title: "Кейс 02",
    result: "Вторая карточка подходит для истории клиента, результата или сценария использования.",
    imageSrc: "/file.svg",
    imageAlt: "Иконка файла как заглушка кейса",
  },
  {
    title: "Кейс 03",
    result: "Третья карточка помогает показать масштабируемость и разнообразие решений.",
    imageSrc: "/globe.svg",
    imageAlt: "Иконка глобуса как заглушка кейса",
  },
];

export function Cases() {
  return (
    <section className="border-y-2 border-slate-800 bg-slate-900/60 px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl space-y-4">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/80">
            Cases
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Блок с примерами и результатами
          </h2>
          <p className="text-lg leading-8 text-slate-300">
            Это минималистичная секция для карточек кейсов. Позже сюда можно
            добавить настоящие цифры, отзывы и изображения.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {CASES.map((item) => (
            <article
              key={item.title}
              className="rounded-[30px] border-2 border-slate-800 bg-slate-950 p-6"
            >
              <div className="rounded-[24px] border-2 border-slate-800 bg-slate-900 p-5">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={72}
                  height={72}
                  loading="lazy"
                  className="h-[72px] w-[72px]"
                />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-400">{item.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
