import Image from "next/image";

export default function ToolsSection() {

  const tools = [
    {
      toolName: "AI", list: [
        { name: "CrewAI", icon: "crewai" },
        { name: "Langchain", icon: "langchain" },
        { name: "Langfuse", icon: "langfuse-color" },
        { name: "MCP", icon: "mcp" },
        { name: "n8n", icon: "n8n-color" },
        { name: "Gemini", icon: "gemini" },
        { name: "Claude", icon: "claude" },
        { name: "OpenAI", icon: "openai" },
        { name: "Ollama", icon: "ollama" },
        { name: "HuggingFace", icon: "huggingface" },
      ]
    },
    {
      toolName: "Backend", list: [
        { name: "FastAPI", icon: "fastapi" },
        { name: "Python", icon: "python" },
        { name: "PHP", icon: "php" },
      ]
    },
    {
      toolName: "Database", list: [
        { name: "Supabase", icon: "supabase" },
        { name: "MYSQL", icon: "mysql" },
        { name: "Sqlite", icon: "sqlite" },
      ]
    },
    {
      toolName: "Frontend", list: [
        { name: "V0", icon: "v0" },
        { name: "Next.JS", icon: "nextjs" },
        { name: "React", icon: "react" },
        { name: "Typescript", icon: "typescript" },
        { name: "TailwindCSS", icon: "tailwind" },
        { name: "ShadCN UI", icon: "shadcn" },
        { name: "Flutter", icon: "flutter" },
      ]
    },
    {
      toolName: "Additional", list: [
        { name: "Docker", icon: "docker" },
        { name: "Vercel", icon: "vercel" },
        { name: "VS Code", icon: "vscode" },
        { name: "Windsurf", icon: "windsurf" },
        { name: "Github Copilot", icon: "githubcopilot" },
        { name: "Notion", icon: "notion" },
        { name: "Firebase", icon: "firebase" },
        { name: "Wordpress", icon: "wordpress" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
      ]
    },
  ]

  const TechIcon = ({ name }: { name: string }) => (
    <Image
      src={`/icons/${name}.svg`}
      alt={name}
      width={32}
      height={32} />
  )

  return (
    <div className="space-y-12">
      {tools.map((tool, index) => (
        <div key={index}>
          <h2 className="text-xl font-bold mb-6">{tool.toolName}</h2>
          <div className="grid grid-cols-4 md:grid-cols-5 gap-8">
            {tool.list.map((tooll, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 group hover:scale-110 transition-all duration-300">
                <TechIcon name={tooll.icon} />
                <span className="text-sm font-medium text-zinc-400">{tooll.name}</span>
              </div>))}
          </div>
        </div>
      ))}
    </div>
  )
}
