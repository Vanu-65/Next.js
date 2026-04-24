import type { Metadata } from "next";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import {
  SEO_KEYWORDS,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/site";

const HOME_TITLE = "Развитие малого бизнеса | сайты и чат-боты";
const HOME_DESCRIPTION =
  "Помогаем малому бизнесу расти через современные сайты, чат-боты и AI-инструменты для привлечения клиентов и автоматизации продаж.";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "ru_RU",
    type: "website",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description: HOME_DESCRIPTION,
  areaServed: "RU",
  serviceType: SEO_KEYWORDS,
};

export default function Home() {
  return (
    <>
      <SchemaMarkup schema={homeSchema} />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <Problem />
        <CTA />
      </main>
    </>
  );
}
