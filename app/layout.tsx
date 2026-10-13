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
    "Portfolio of Metin Berat Dönmez, a high school student in Istanbul who builds AI systems: Absolute Akashi AI, a customized Akashi assistant, and a planned 3D/CGI agent.",
  openGraph: {
    title: "Metin Berat Dönmez | AI, Software & Student Portfolio",
    description:
      "A student portfolio with three separate AI projects, showing what is built, what is experimental, and what is still planned.",
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
