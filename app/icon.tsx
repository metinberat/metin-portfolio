import { ImageResponse } from "next/og";

export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 22,
          background: "linear-gradient(145deg, #3a3c42 0%, #16171a 60%, #070708 100%)",
          color: "#f4f4f2",
          fontSize: 52,
          fontWeight: 700,
          letterSpacing: -2
        }}
      >
        M
      </div>
    ),
    size
  );
}
