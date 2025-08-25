import type React from "react";
import type { Metadata } from "next";
import { Zilla_Slab } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

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
  title: "Tai Ora - Truth in Beauty, Wellness with Purpose",
  description:
    "A Māori-led platform uniting authenticity, wellbeing and ethical beauty — welcoming all cultures with open hearts.",
  generator: "v0.app",
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
      </body>
    </html>
  );
}
