import { ImageResponse } from "next/og";

export const alt = "Metin Berat Dönmez — AI & Software Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated share card in the site's dark titanium style (no photo, no claims).
export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#f4f4f2",
          background:
            "radial-gradient(circle at 20% 0%, rgba(232,234,238,0.16), transparent 520px), radial-gradient(circle at 85% 15%, rgba(126,130,138,0.26), transparent 560px), linear-gradient(135deg, #050506 0%, #111215 45%, #060607 100%)"
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#cdcec8" }}>
          ISTANBUL · PORTFOLIO
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2 }}>
            Metin Berat Dönmez
          </div>
          <div style={{ marginTop: 28, fontSize: 34, color: "#e4e4df" }}>
            AI & software projects · Football · Science
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#92958f" }}>
          metin-portfolio.vercel.app
        </div>
      </div>
    ),
    size
  );
}
