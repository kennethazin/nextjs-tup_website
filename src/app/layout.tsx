import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header1 } from "@/components/header";
import Footer from "@/components/footer";
import Partners from "@/components/partners";
import LenisProvider from "@/lib/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Useless Project",
  description: "Sustainability, creativity and love!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[#FCFAF8]`}
      >
        <LenisProvider />

        <Header1 />
        <main className="flex-grow px-4 py-10 mb-50">{children}</main>
        <Partners />
        <Footer />
      </body>
    </html>
  );
}
