import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible_Next, Baloo_2 } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

// Atkinson Hyperlegible foi desenhada para leitura com baixa visão:
// letras que não se confundem (I/l/1, O/0) ajudam também crianças e famílias em alfabetização.
const atkinson = Atkinson_Hyperlegible_Next({
  variable: "--font-atkinson",
  subsets: ["latin"],
  display: "swap",
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const titulo = `Escola infantil em Ananindeua | ${site.nome} (${site.sigla})`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: titulo, template: `%s | ${site.nome}` },
  description: site.descricao,
  applicationName: site.nome,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.nome,
    title: titulo,
    description: site.descricao,
  },
  twitter: { card: "summary_large_image", title: titulo, description: site.descricao },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#1b4db1",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${atkinson.variable} ${baloo.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
