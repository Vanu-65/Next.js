export const SITE_URL = "https://example.com";

export const SITE_NAME = "SVB";
export const SITE_TAGLINE = "Создаём вместе будущее";
export const SITE_DESCRIPTION =
  "SVB помогает малому бизнесу в России привлекать клиентов через сайты, чат-боты и AI-инструменты.";
export const TELEGRAM_BOT_USERNAME = "uni_boy_bot";
export const TELEGRAM_BOT_URL = `https://t.me/${TELEGRAM_BOT_USERNAME}`;

export const SEO_KEYWORDS = [
  "развитие малого бизнеса",
  "как привлечь клиентов",
  "автоматизация бизнеса",
];

export const NAVIGATION_ITEMS = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/blog", label: "Блог" },
] as const;

export function buildTelegramBotUrl(startParam: string): string {
  return `${TELEGRAM_BOT_URL}?start=${encodeURIComponent(startParam)}`;
}
