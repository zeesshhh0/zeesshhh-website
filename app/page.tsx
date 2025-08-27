'use client';
import Link from 'next/link';
import Image from 'next/image';
import { SiGithub, SiPeerlist, SiX } from '@icons-pack/react-simple-icons';
import dynamic from 'next/dynamic';

import WorkSection from './components/projects-section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/tabs';
import { Mail } from 'lucide-react';
import Footer from './components/footer';
import BlurFade from './components/blur-fade';

const ExperienceSection = dynamic(() => import('./components/experience-section'), { ssr: false });
const ToolsSection = dynamic(() => import('./components/tools-section'), { ssr: false });
const BlogsSection = dynamic(() => import('./components/blogs-section').then(mod => mod.BlogsSection), { ssr: false });

export default function Page() {
  return (
    <div className="min-h-svh text-zinc-300 flex flex-col justify-between text-balance">
      <div>
        {/* Header */}
        <header className="container mx-auto px-2 py-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Hey, I&apos;m Zeeshan</h1>
            <p className="mt-2 text-zinc-400 font-medium text-lg">
              AI Engineer specializing in the next generation of intelligent agents, RAG, and multi-agent systems. Open to work.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex space-x-2 gap-4">
              <Link href="https://github.com/zeesshhh0/" aria-label="GitHub">
                <SiGithub size={20} className='text-zinc-400 hover:text-zinc-100 transition-all' />
              </Link>
              <Link href="https://x.com/zeesshhh0/" aria-label="Twitter">
                <SiX size={20} className='text-zinc-400 hover:text-zinc-100 transition-all' />
              </Link>
              <Link href="https://www.linkedin.com/in/zishan-ghaniwala/" aria-label="Linkedin">
                <Image alt="Linkedin" width={20} height={20} src={`/icons/linkedin.svg`} className='transition-all opacity-50 hover:opacity-100' />
              </Link>
              <Link href="https://peerlist.io/zeesshhan" aria-label="PeerList">
                <SiPeerlist size={20} className='text-zinc-400 hover:text-zinc-100 transition-all' />
              </Link>
              <Link href="mailto:zishanghaniwala@gmail.com" aria-label="Email">
                <Mail size={20} className='text-zinc-400 hover:text-zinc-100 transition-all' />
              </Link>
            </div>
          </div>

          {/* Main Navigation Tabs */}
          <Tabs defaultValue="work" className="w-full">
            <TabsList className="bg-transparent p-0 mb-4">
              <TabsTrigger
                value="work"
                className="data-[state=active]:font-extrabold px-0 py-2 text-md"
              >
                Work
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="data-[state=active]:font-extrabold px-4 py-2 text-md"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className="data-[state=active]:font-extrabold px-0 py-2 text-md"
              >
                Tools
              </TabsTrigger>
              <TabsTrigger
                value="blogs"
                className="data-[state=active]:font-extrabold px-4 py-2 text-md"
              >
                Blogs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="work">
              <BlurFade inView>
                <WorkSection />
              </BlurFade>
            </TabsContent>

            <TabsContent value="experience">
              <BlurFade inView>
                <ExperienceSection />
              </BlurFade>
            </TabsContent>

            <TabsContent value="tools">
              <BlurFade inView>
                <ToolsSection />
              </BlurFade>
            </TabsContent>
            <TabsContent value="blogs">
              <BlurFade inView>
                <BlogsSection />
              </BlurFade>
            </TabsContent>
          </Tabs>
        </header>
      </div>
      <Footer />
    </div>
  )
}

