import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const titleFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-nevas-title",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-nevas-body",
});

export const metadata: Metadata = {
  title: "Neva's Corp | Assessoria Corporativa para Empresas",
  description:
    "A Neva's Corp é uma assessoria corporativa completa que atua da operação à gestão estratégica, estruturando e alavancando empresas em todo o Brasil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${titleFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
