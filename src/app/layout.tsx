import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { openSans } from "./fonts/fonts";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Roemah Poentjak",
  description:
    "A landing page for a cozy rental home located in Cimacan, West Java, Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} bg-[#E1E3EA]`}>
        <Header />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
