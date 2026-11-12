import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { PERSON_DESCRIPTION, PERSON_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  // latin-ext covers Turkish letters such as İ, ş and ğ.
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${PERSON_NAME}`
  },
  description: PERSON_DESCRIPTION,
  applicationName: `${PERSON_NAME} Portfolio`,
  authors: [{ name: PERSON_NAME, url: SITE_URL }],
  creator: PERSON_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: `${PERSON_NAME} Portfolio`,
    title: SITE_TITLE,
    description: PERSON_DESCRIPTION,
    locale: "en_US",
    firstName: "Metin Berat",
    lastName: "Dönmez"
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: PERSON_DESCRIPTION
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" }
  }
};

export const viewport: Viewport = {
  themeColor: "#070708"
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
