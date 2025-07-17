import "./globals.css"
import type { Metadata } from "next"
import localFont from "next/font/local";
import Particles from "./components/particles"
import BlurFade from "./components/blur-fade"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: {
    default: 'Zeeshan | AI Engineer',
    template: '%s | Zeeshan ',
  },
  description: 'an AI Engineer Building and fine-tuning the next generation of AI applications.',
  openGraph: {
    title: 'Zeeshan | AI Engineer',
    description: 'an AI Engineer Building and fine-tuning the next generation of AI applications.',
    siteName: 'Zeeshan',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeeshan | AI Engineer',
    description: 'an AI Engineer Building and fine-tuning the next generation of AI applications.',
    creator: '@zeesshhh0',
    images: {
      url: '/avatar.jpeg',
      alt: 'Preview image for Zeeshan Avatar',
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
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
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${geistSans.variable}`}
    >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="antialiased">
          <main className="relative mx-auto mt-6 max-w-xl px-4">
            <div>
            <BlurFade inView>
            {children}
            </BlurFade>
            <SpeedInsights/>
            </div>
          </main>
        <Particles className="-z-10 absolute inset-0 hidden sm:block"></Particles>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,110,198,0.2),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
      </body>
    </html>
  )
}
