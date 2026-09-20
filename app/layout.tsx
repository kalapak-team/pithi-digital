import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight, Kantumruy_Pro } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const kantumruy = Kantumruy_Pro({
  subsets: ["khmer", "latin"],
  weight: ["300", "400", "500"],
  variable: "--font-kantumruy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pithi — Cambodian Ceremonies & Events",
  description:
    "Plan weddings, engagements, birthdays and joyful ceremonies in Cambodia with Pithi.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="km"
      className={`${interTight.variable} ${instrumentSerif.variable} ${kantumruy.variable} h-full antialiased`}
    >
      <body className={`${interTight.className} min-h-full bg-page`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
