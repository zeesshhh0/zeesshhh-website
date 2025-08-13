'use client';

import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from "next/dynamic";

const Particles = dynamic(() => import("./components/particles"), {
  ssr: false,
});

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="relative mx-auto mt-6 max-w-xl px-4">
        <div>
          {children}
          <SpeedInsights />
        </div>
      </main>
      <Particles className="-z-10 absolute inset-0 hidden sm:block"></Particles>
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,110,198,0.2),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
    </>
  );
}
