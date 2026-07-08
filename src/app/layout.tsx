import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Signals from the Swedish press",
  description:
    "A tool that reads the day’s Swedish financial press — Dagens Industri, SvD Näringsliv, DN Ekonomi, SVT Ekonomi and Breakit — for a quick read on how today looks and what to keep an eye on. By John Tran.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
