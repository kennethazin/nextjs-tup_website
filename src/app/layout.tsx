import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header1 } from "@/components/header";
import Footer from "@/components/footer";
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
  description: "A nonprofit advocating for sustainable and circular living solutions. We address urgent global issues including climate change, social justice, and environmental equity through community action and awareness.",
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
        <header className="sticky top-0 z-50 bg-[#FCFAF8]">
          <Header1 />
        </header>
        <main className="flex-grow px-4 py-10 mb-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
