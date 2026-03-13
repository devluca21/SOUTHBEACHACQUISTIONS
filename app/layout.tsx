import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "South Beach Acquisitions | Unsold Condos to Investor Network — South Coast, DR",
  description: "We move condos that don't sell by placing them with our investor network. South of the Dominican Republic. Data-driven, discreet, fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Header />
        {children}
      </body>
    </html>
  );
}
