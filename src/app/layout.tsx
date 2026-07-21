import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://surfacecrete.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Surface Crete",
    template: "%s | Surface Crete",
  },
  description:
    "Surface Crete — premium decorative surface solutions including Microcement, Decorative Concrete and Polished Concrete across India.",
  keywords: ["surface crete", "microcement india", "decorative concrete", "polished concrete"],
  authors: [{ name: "Surface Crete" }],
  creator: "Surface Crete",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Surface Crete",
    title: "Surface Crete",
    description:
      "Surface Crete — premium decorative surface solutions including Microcement, Decorative Concrete and Polished Concrete across India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surface Create",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surface Crete",
    description:
      "Surface Crete — premium decorative surface solutions including Microcement, Decorative Concrete and Polished Concrete across India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning><Header />{children}<Footer /><FloatingButtons /></body>
    </html>
  );
}

