import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Portraits of Our Future — Foundations for Tomorrow",
  description:
    "Fifteen Australians. Fifteen futures in the balance. Behind every long-term policy failure is a person who felt it first. This is their collection.",
  openGraph: {
    title: "Portraits of Our Future",
    description:
      "Fifteen Australians. Fifteen futures in the balance. An editorial collection by Foundations for Tomorrow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
