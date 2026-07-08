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
  title: "Signalstockholm — Investment signals from the Swedish press",
  description:
    "Reads the Swedish financial press (DI, SvD, DN, SVT, Breakit) and surfaces investment trends and opportunities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
