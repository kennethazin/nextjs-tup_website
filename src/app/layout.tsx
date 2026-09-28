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
  metadataBase: new URL("https://www.theuselessproject.co"),
  title: {
    default: "The Useless Project",
    template: "%s | The Useless Project",
  },
  description:
    "Official website of The Useless Project. A nonprofit advocating for sustainable and circular living solutions. We address urgent global issues including climate change, social justice, and environmental equity through community action and awareness.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Useless Project",
    description:
      "A space to reconnect with people, planet and creativity. Sustainable events, circular living, flea markets, and workshops.",
    url: "https://www.theuselessproject.co",
    siteName: "The Useless Project",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "The Useless Project",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Useless Project",
    description:
      "A space to reconnect with people, planet and creativity. Sustainable events, circular living, flea markets, and workshops.",
    images: ["/opengraph-image.png"],
  },
  verification: {
    google: "google250bf90a6351f41e",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.theuselessproject.co/#organization",
      name: "The Useless Project",
      url: "https://www.theuselessproject.co",
      logo: "https://www.theuselessproject.co/tup_logo.png",
      description:
        "Official website of The Useless Project. A nonprofit advocating for sustainable and circular living solutions, vintage flea markets, workshops, and environmental equity.",
      sameAs: [
        "https://www.instagram.com/theuselessproject/",
        "https://www.facebook.com/theuselessprojectireland/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.theuselessproject.co/#website",
      url: "https://www.theuselessproject.co",
      name: "The Useless Project",
      publisher: {
        "@id": "https://www.theuselessproject.co/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
