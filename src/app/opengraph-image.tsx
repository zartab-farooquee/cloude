import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";
export const alt = `${siteConfig.name} — AI Automation Agency`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #060814 0%, #140a2e 55%, #06202e 100%)",
          padding: "72px",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg,#6d28d9,#2563eb,#06b6d4)",
              fontSize: 40,
            }}
          >
            ⚡
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>ScriptZen</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Automate Your Business with AI
          </div>
          <div style={{ fontSize: 32, color: "#9aa3bd", maxWidth: 820 }}>
            AI agents, chatbots, workflow, WhatsApp & CRM automation that save
            time, cut costs, and grow revenue.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 24, color: "#cdd3ea" }}>
          <span
            style={{
              padding: "10px 22px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
            }}
          >
            AI Automation Agency
          </span>
          <span
            style={{
              padding: "10px 22px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
            }}
          >
            {siteConfig.url.replace("https://", "")}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
