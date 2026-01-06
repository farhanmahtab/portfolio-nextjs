import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import PersonSchema from "@/components/schema/PersonSchema";
import { SEO_CONFIG } from "@/lib/seo/seoConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SEO_CONFIG.siteTitle,
  description: SEO_CONFIG.siteDescription,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: SEO_CONFIG.author }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SEO_CONFIG.siteUrl,
    title: SEO_CONFIG.siteTitle,
    description: SEO_CONFIG.siteDescription,
    images: [
      {
        url: SEO_CONFIG.ogImage.url,
        width: SEO_CONFIG.ogImage.width,
        height: SEO_CONFIG.ogImage.height,
        alt: SEO_CONFIG.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.siteTitle,
    description: SEO_CONFIG.siteDescription,
    images: [SEO_CONFIG.twitterImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PersonSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
