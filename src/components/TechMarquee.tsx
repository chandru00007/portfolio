const technologies = [
  { name: "Python", icon: "🐍" },
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "📜" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "C++", icon: "⚙️" },
  { name: "AI Tools", icon: "🤖" },
  { name: "Git", icon: "📦" },
  { name: "VS Code", icon: "💻" },
  { name: "Prompt Engineering", icon: "✨" },
];

const TechMarquee = () => {
  return (
    <section className="py-8 bg-secondary/30 border-y border-border overflow-hidden">
      <div className="flex animate-marquee">
        {/* First set */}
        {technologies.map((tech, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center gap-2 px-8 py-2 shrink-0"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span className="text-lg font-medium text-muted-foreground whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {technologies.map((tech, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center gap-2 px-8 py-2 shrink-0"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span className="text-lg font-medium text-muted-foreground whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechMarquee;
