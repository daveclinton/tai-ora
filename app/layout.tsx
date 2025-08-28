import type React from "react";
import type { Metadata } from "next";
import { Zilla_Slab } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zilla-slab",
  weight: ["300", "400", "500", "600", "700"],
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-code-pro",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Tai Ora - Wellbeing Through Authenticity & Connection",
    default:
      "Tai Ora - A Wellbeing Platform for Authenticity, Connection & Aroha",
  },
  description:
    "Tai Ora is a wellbeing platform built on authenticity, connection, and aroha. Rooted in Māori values, we welcome all cultures to reclaim time, identity, and wellbeing.",
  keywords: [
    "Tai Ora",
    "wellbeing platform",
    "authenticity and connection",
    "aroha",
    "cultural wellness",
    "Māori values",
    "community wellbeing",
    "sustainable wellbeing",
  ],
  authors: [{ name: "Tai Ora", url: "https://www.taiora.ai" }],
  generator: "Next.js",
  applicationName: "Tai Ora",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://www.taiora.ai",
  },
  openGraph: {
    title: "Tai Ora - Wellbeing Through Authenticity & Connection",
    description:
      "Join Tai Ora, a wellbeing platform grounded in cultural values, authenticity, and aroha. Reclaim your time, identity, and wellbeing through community and connection.",
    url: "https://www.taiora.ai",
    siteName: "Tai Ora",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.taiora.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tai Ora - Wellbeing Through Authenticity & Connection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tai Ora - Wellbeing Through Authenticity & Connection",
    description:
      "Tai Ora is a cultural wellbeing platform rooted in authenticity, aroha, and community connection. Welcoming all cultures to live authentically.",
    site: "@taiora",
    creator: "@taiora",
    images: ["https://www.taiora.ai/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${zillaSlab.variable} ${sourceCodePro.variable} bg-[var(--color-background)] text-[var(--color-foreground)]`}
    >
      <body className="min-h-screen antialiased">
        <header>
          <Navbar />
        </header>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
