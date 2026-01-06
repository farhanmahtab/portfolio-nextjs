import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import PersonSchema from "@/components/schema/PersonSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farhan Mahi | Full-Stack Software Engineer",
  description:
    "Full-stack software engineer specializing in Ruby on Rails, Next.js, PostgreSQL, and distributed systems. View my portfolio, experience, and projects.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "Next.js",
    "Rails",
    "React",
  ],
  authors: [{ name: "Farhan Mahi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoursite.com",
    title: "Farhan Mahi | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer with expertise in scalable systems and clean code.",
    images: [
      {
        url: "https://yoursite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Farhan Mahi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Mahi | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer specializing in scalable systems.",
    images: ["https://yoursite.com/twitter-image.jpg"],
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
