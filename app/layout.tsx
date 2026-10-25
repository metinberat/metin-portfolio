import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Metin Berat Dönmez | Student Portfolio",
  description:
    "Metin Berat Dönmez is a high school student in Istanbul who builds AI systems: Absolute AI, FORM 3D and Akashi Persona. Also football, chess and travel.",
  openGraph: {
    title: "Metin Berat Dönmez | Student Portfolio",
    description:
      "A short personal portfolio: who I am, what I have built, and what I do beyond engineering.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
