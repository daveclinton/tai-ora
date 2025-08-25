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
  weight: ["300", "400", "500", "600", "700"], // Zilla Slab has multiple weights
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
      className={`${zillaSlab.variable} ${sourceCodePro.variable} bg-(--color-background) text-(--color-foreground)`}
    >
      <head>
        <style>{`
          html {
            font-family: ${zillaSlab.style.fontFamily};
            --font-sans: ${zillaSlab.style.fontFamily};
            --font-mono: ${sourceCodePro.style.fontFamily};
          }
        `}</style>
      </head>
      <body className="min-h-screen antialiased">
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
