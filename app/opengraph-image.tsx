import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #0b1220 0%, #152238 45%, #1a3fcc 100%)",
          color: "#F8FAFC",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 18% 22%, rgba(45, 91, 255, 0.35), transparent 28%), radial-gradient(circle at 82% 18%, rgba(255, 107, 38, 0.28), transparent 26%), radial-gradient(circle at 52% 78%, rgba(45, 91, 255, 0.12), transparent 32%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 32,
            left: 42,
            right: 42,
            bottom: 32,
            display: "flex",
            borderRadius: 40,
            border: "1px solid rgba(255,255,255,0.10)",
            background: "rgba(255,255,255,0.03)",
            boxShadow: "0 0 80px rgba(14, 165, 233, 0.12) inset",
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "12px 20px",
                borderRadius: 999,
                border: "1px solid rgba(83, 229, 255, 0.22)",
                background: "rgba(83, 229, 255, 0.08)",
                color: "#C8FBFF",
                fontSize: 26,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              {SITE_NAME}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 18px",
                borderRadius: 999,
                background: "rgba(16, 185, 129, 0.12)",
                color: "#B9F8D5",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              Telegram + AI + Site
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 840,
              gap: 22,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 92,
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: -2,
                color: "#E9FCFF",
                textShadow:
                  "0 0 12px rgba(83, 229, 255, 0.55), 0 0 34px rgba(178, 92, 255, 0.30)",
              }}
            >
              {SITE_NAME}
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 52,
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: -1.2,
                color: "#F8FAFC",
              }}
            >
              Развитие малого бизнеса через сайты, чат-боты и AI
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 30,
                lineHeight: 1.45,
                color: "rgba(226, 232, 240, 0.92)",
                maxWidth: 760,
              }}
            >
              Помогаем привлекать клиентов, не терять заявки и выстраивать
              понятную систему роста для бизнеса.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            {[
              "Сильный оффер",
              "Telegram-бот",
              "Путь до заявки",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  padding: "14px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.05)",
                  color: "#D9F9FF",
                  fontSize: 24,
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
