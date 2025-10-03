import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sham Estate – Micro Landing",
  description:
    "Beratung, Verkauf & Kapitalanlagen – Jetzt Erstgespräch buchen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${sen.variable} antialiased font-body`}>
        {children}
      </body>
    </html>
  );
}
