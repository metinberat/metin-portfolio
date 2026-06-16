import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Metin Berat Dönmez | AI, Software & Student Portfolio",
  description:
    "Personal CV and portfolio for Metin Berat Dönmez, a high school student in Istanbul focused on AI tools, software, PC hardware, competitive discipline, and international education.",
  openGraph: {
    title: "Metin Berat Dönmez | AI, Software & Student Portfolio",
    description:
      "A student portfolio documenting AI learning, software projects, hardware knowledge, competitive achievements, and education goals.",
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
