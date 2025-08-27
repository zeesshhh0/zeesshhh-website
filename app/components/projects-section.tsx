import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "./button"
import { SiGithub } from "@icons-pack/react-simple-icons"

export default function WorkSection() {
  const projects = [
    {
      title: "Explainium",
      description: "Enter a YouTube URL to get questions about the video!",
      technologies: [
        "CrewAI",
        "FastAPI",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Vercel",
        "Docker",
      ],
      githubUrl: "https://github.com/zeesshhh0/explainium",
      liveUrl: "https://explainium.vercel.app/",
    },
    {
      title: "Chat llama",
      description: "A simple chat application using llama's LLMs.",
      technologies: ["Next.js", "FastAPI", "TypeScript", "Tailwind CSS", "Shadcn UI", "llama"],
      githubUrl: "https://github.com/zeesshhh0/chat_llama",
      liveUrl: null,
    },
    // {
    //   title: "Simple Library",
    //   description: "A library system featuring CRUD operations, a user review system, Google OAuth authentication, and a normalized MySQL database with optimized queries and secure session management.",
    //   technologies: ["PHP", "MYSQL", "HTML", "CSS"],
    //   githubUrl: "#",
    //   liveUrl: "#",
    // },
  ]

  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div key={index} className="space-y-2 hover:translate-x-1 transition-all duration-300 ease-out">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-zinc-300">{project.title}</h2>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href={project.githubUrl} aria-label="GitHub" target="_blank">
                  <SiGithub className="h-5 w-5" />
                </Link>
              </Button>
              {project.liveUrl && (
                <Button variant="ghost" size="icon" asChild>
                  <Link href={project.liveUrl} aria-label="View Live" target="_blank">
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
          <p className="text-md text-zinc-400 font-medium">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="text-sm text-zinc-500">
                {tech}
                {techIndex < project.technologies.length - 1 ? " /" : ""}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
