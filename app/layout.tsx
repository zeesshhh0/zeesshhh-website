import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import RootLayoutClient from "./layout-client";

export const metadata: Metadata = {
  title: {
    default: "Zeeshan | AI Engineer",
    template: "%s | Zeeshan ",
  },
  description:
    "an AI Engineer Building and fine-tuning the next generation of AI applications.",
  openGraph: {
    title: "Zeeshan | AI Engineer",
    description:
      "an AI Engineer Building and fine-tuning the next generation of AI applications.",
    siteName: "Zeeshan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeeshan | AI Engineer",
    description:
      "an AI Engineer Building and fine-tuning the next generation of AI applications.",
    creator: "@zeesshhh0",
    images: {
      url: "/avatar.jpeg",
      alt: "Preview image for Zeeshan Avatar",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistMono.variable} ${geistSans.variable}`}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="antialiased">
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}