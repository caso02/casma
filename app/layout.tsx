import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CASMA — Digital Agency",
  description:
    "We craft exceptional digital experiences for forward-thinking brands.",
  keywords: ["digital agency", "web design", "brand identity", "UI/UX"],
  openGraph: {
    title: "CASMA — Digital Agency",
    description:
      "We craft exceptional digital experiences for forward-thinking brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
