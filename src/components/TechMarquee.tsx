import { motion } from "framer-motion";

const technologies = [
  "React", "JavaScript", "Python", "HTML5", "CSS3", "C++", 
  "Git", "VS Code", "AI Tools", "Tailwind", "Node.js", "SQL"
];

const TechMarquee = () => {
  return (
    <div className="py-6 border-y border-border/50 overflow-hidden bg-secondary/20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex animate-marquee"
      >
        {/* First set */}
        {technologies.map((tech, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center gap-3 px-8 shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {tech}
            </span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {technologies.map((tech, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center gap-3 px-8 shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {tech}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
