export default function ExperienceSection() {
  const experiences = [
    {
      title: "Engineer at Webturtles (IND)",
      period: "June 2023 - Present",
      description:
        "Building AI blog writer agents with CrewAI, alongside optimizing a high-traffic forum and WordPress systems. Enhanced performance, user engagement, and content workflows through AI, PHP upgrades, and custom tools.",
      technologies: ["CrewAI", "Agents", "MySQL", "PHP", "Wordpress", "VBulletin"],
    },
    
  ]

  return (
    <div className="space-y-12">
      {experiences.map((experience, index) => (
        <div key={index} className="space-y-2 hover:translate-x-1 transition-all duration-300 ease-out">
          <div className="flex items-start justify-between">
            <h2 className="text-md font-bold">{experience.title}</h2>
            <span className="text-sm text-zinc-400">{experience.period}</span>
          </div>
          <div className="text-sm text-zinc-400 font-medium">{experience.description}</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {experience.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="text-xs text-zinc-500">
                {tech}
                {techIndex < experience.technologies.length - 1 ? " /" : ""}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
