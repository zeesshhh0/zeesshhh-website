import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from './components/avatar'
import { HoverEffect } from './components/card-hover-effect';
// import { skills } from './components/skills';
// import ProjectCard from "./components/project-card"
// import { projects } from './components/projects';
// import { BlogPosts3 } from './components/posts';
import Link from 'next/link';
import { SiGithub, SiLinkerd, SiPeerlist, SiReact, SiX } from '@icons-pack/react-simple-icons';
import ArrowIcon from './components/arrow-icon';
import ContactButton from './components/contact-button';
import { Badge, badgeVariants } from './components/badge';
import { Button } from './components/button';
// import { Calendar, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import WorkSection from './components/projects-section';
import ExperienceSection from './components/experience-section';
import ToolsSection from './components/tools-section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail } from 'lucide-react';
import Footer from './components/footer';
import BlurFade from './components/blur-fade';


export default function Page() {
  return (
    <div className="min-h-svh text-zinc-300 flex flex-col justify-between">
      <div>
        {/* Header */}
        <header className="container mx-auto px-2 py-4">
          <div className="mb-8">
            <h1 className="text-xl font-bold text-white">Hey, I&apos;m Zeeshan</h1>
            <p className="mt-2 text-zinc-400">
              interested in being an AI Engineer and working with LLMs. Open to work. Contact me below.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex space-x-2 gap-4">
              <Link href="https://github.com/zeesshhh0/" aria-label="GitHub">
                <SiGithub size={20} className='text-zinc-400 hover:text-zinc-100 transition-all' />
              </Link>
              <Link href="https://x.com/zeesshhh0/" aria-label="Twitter">
                <SiX size={20} className='text-zinc-400 hover:text-zinc-100 transition-all' />
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
                className="data-[state=active]:font-bold rounded-none px-0 py-2"
              >
                Work
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="data-[state=active]:font-bold rounded-none px-4 py-2"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className="data-[state=active]:font-bold px-0 py-2"
              >
                Tools
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
          </Tabs>
        </header>
      </div>
      <Footer />

    </div>
  )
}

