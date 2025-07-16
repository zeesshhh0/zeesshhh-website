export default function ToolsSection() {
  const frontendTools = [
    { name: "React", icon: "react" },
    { name: "Next.JS", icon: "nextjs" },
    { name: "Typescript", icon: "typescript" },
    { name: "TailwindCSS", icon: "tailwind" },
  ]

  const backendTools = [
    { name: "tRPC", icon: "trpc" },
    { name: "Vercel", icon: "vercel" },
    { name: "DrizzleORM", icon: "drizzle" },
    { name: "Bun", icon: "bun" },
    { name: "Node.JS", icon: "nodejs" },
    { name: "PostgreSQL", icon: "postgres" },
  ]

  // Simple icon component that renders a placeholder for each technology
  const TechIcon = ({ type }: { type: string }) => (
    <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full">
      <span className="text-xs text-white">{type.substring(0, 2).toUpperCase()}</span>
    </div>
  )

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-xl font-bold text-white mb-6">Frontend</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {frontendTools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <TechIcon type={tool.icon} />
              <span className="text-sm">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-6">Backend and Infrastructure</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {backendTools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <TechIcon type={tool.icon} />
              <span className="text-sm">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
