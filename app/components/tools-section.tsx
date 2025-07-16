import Image from "next/image";

export default function ToolsSection() {

  const tools = [
    {
      toolName: "AI", list: [
        { name: "CrewAI", icon: "crewai" },
        { name: "Langchain", icon: "langchain" },
      ]
    },
    {
      toolName: "Frontend", list: [
        { name: "React", icon: "react" },
        { name: "Next.JS", icon: "nextjs" },
        { name: "Typescript", icon: "typescript" },
        { name: "TailwindCSS", icon: "tailwind" },
        { name: "ShadCN UI", icon: "shadcn" },
      ]
    },
    {
      toolName: "Backend", list: [
        { name: "FastAPI", icon: "fastapi" },
        { name: "Vercel", icon: "vercel" },
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
