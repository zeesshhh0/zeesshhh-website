import Image from "next/image";

export default function ToolsSection() {

  const tools = [
    {
      toolName: "AI", list: [
        { name: "CrewAI", icon: "crewai" },
        { name: "Langchain", icon: "langchain" },
        // { name: "LlamaIndex", icon: "llamaindex" },
        { name: "OpenAI", icon: "openai" },
        { name: "HuggingFace", icon: "huggingface" },
      ]
    },
    {
      toolName: "Backend", list: [
        { name: "FastAPI", icon: "fastapi" },
        { name: "PHP", icon: "php" },
        { name: "Python", icon: "python" },
        { name: "Vercel", icon: "vercel" },
      ]
    },
    {
      toolName: "Database", list: [
        { name: "MYSQL", icon: "mysql" },
        { name: "Sqlite", icon: "sqlite" },
      ]
    },
    {
      toolName: "Frontend", list: [
        { name: "React", icon: "react" },
        { name: "Next.JS", icon: "nextjs" },
        { name: "Flutter", icon: "flutter" },
        { name: "Typescript", icon: "typescript" },
        { name: "TailwindCSS", icon: "tailwind" },
        { name: "ShadCN UI", icon: "shadcn" },
      ]
    },
    {
      toolName: "Additional", list: [
        { name: "Firebase", icon: "firebase" },
        { name: "Wordpress", icon: "wordpress" },
        { name: "VS Code", icon: "vscode" },
        { name: "Docker", icon: "docker" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
      ]
    },
  ]




  // Simple icon component that renders a placeholder for each technology
  const TechIcon = ({ name }: { name: string }) => (
    <Image src={`/icons/${name}.svg`} alt={name} width={32} height={32} />
  )

  return (
    <div className="space-y-12">
      {tools.map((tool, index) => (
        <div key={index}>
          <h2 className="text-xl font-bold mb-6">{tool.toolName}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {tool.list.map((tooll, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 group hover:scale-110 transition-all duration-300">
                <TechIcon name={tooll.icon} />
                <span className="text-sm font-medium">{tooll.name}</span>
              </div>))}
          </div>
        </div>
      ))}
    </div>
  )
}
