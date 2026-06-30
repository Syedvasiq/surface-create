import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://surfacecreate.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Surface Create",
    template: "%s | Surface Create",
  },
  description:
    "Surface Create — premium creative surfaces, designs, and materials for your next project.",
  keywords: ["surface create", "creative surfaces", "design materials"],
  authors: [{ name: "Surface Create" }],
  creator: "Surface Create",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Surface Create",
    title: "Surface Create",
    description:
      "Surface Create — premium creative surfaces, designs, and materials for your next project.",
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
    title: "Surface Create",
    description:
      "Surface Create — premium creative surfaces, designs, and materials for your next project.",
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
      <body className="min-h-full flex flex-col" suppressHydrationWarning><Header />{children}<Footer /></body>
    </html>
  );
}
