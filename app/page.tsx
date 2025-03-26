import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from './components/avatar'
import { HoverEffect } from './components/card-hover-effect';
import { skills } from './components/skills';
import ProjectCard from "./components/project-card"
import { projects } from './components/projects';
import { BlogPosts3 } from './components/posts';
import Link from 'next/link';
import ArrowIcon from './components/arrow-icon';
import ContactButton from './components/contact-button';
import { Badge, badgeVariants } from './components/badge';


export default function Page() {
  return (
    <section>
      <div className="flex flex-col">
        <div className="mb-6 flex gap-6">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/avatar/m.jpg" />
            <AvatarFallback>Z</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="mt-2 text-3xl font-semibold">Hey, I'm Md. Zeeshan 👋</p>
            <ContactButton />
          </div>
        </div>
        <div className="space-y-6 mb-8">
          <p className="text-base leading-relaxed">
            I'm a PHP developer who loves making websites work better and faster. At Web Turtles, I build tools that make websites run smoothly. I create practical solutions that solve real problems.
          </p>
          <p className="text-base leading-relaxed">
            I get excited about building things that actually help people get stuff done, What drives me is solving real problems and making sure everything I build is reliable and easy to use.
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold ">Skills:</p>
          <HoverEffect items={skills} />
          <div className='flex flex-wrap gap-2 sm:hidden mt-2'>
            {skills.map((skill) => (
              <div key={skill.title}>
                <Badge variant={skill.title.replace(" ", "").toLowerCase() as keyof typeof badgeVariants}> 
                  <div className="h-4 w-4 mr-2 my-1">
                    {skill.logo}
                  </div> 
                  {skill.title}
                  </Badge>
              </div>
            ))}
          </div>
        </div>
        <div className="my-12">
          <p className="mb-4 text-xl font-semibold">Projects:</p>
          <div className='grid grid-cols-1 gap-2'>
            <ProjectCard projects={[projects[0]]} ></ProjectCard>
            <Link href={"/projects"} className="group flex items-center gap-1 font-semibold">
                See more projects
                <ArrowIcon />
            </Link>
          </div>
        </div>
        <div className="my-12">
          <p className="mb-4 text-xl font-semibold">Posts:</p>
          <div className='grid grid-cols-1 gap-2'>
            <BlogPosts3 />
            <Link href={"/blog"} className="group flex items-center gap-1 font-semibold">
                More Posts
                <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

