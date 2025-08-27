import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import RootLayoutClient from "./layout-client";

export const metadata: Metadata = {
  title: {
    default: "Zeeshan | AI Engineer",
    template: "%s | Zeeshan",
  },
  description:
    "Zeeshan is a Generative AI Engineer specializing in creating advanced RAG solutions, building AI agents, and designing multi-agentic systems. Explore my portfolio to see projects with LangChain, CrewAI, and more.",
  openGraph: {
    title: "Zeeshan | AI Engineer 🤖",
    description:
      "I build intelligent AI agents, RAG systems, and multi-agentic solutions. View my portfolio to learn about my projects with LangChain and other cutting-edge tools.",
    siteName: "Zeeshan's AI Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building the Future with AI Agents 🚀",
    description:
      "I specialize in creating and deploying advanced RAG solutions and multi-agent systems. From design to deployment, I create intelligent AI applications.",
    creator: "@zeesshhh0",
    images: {
      url: "/avatar.jpeg",
      alt: "Zeeshan's professional portfolio and AI projects",
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