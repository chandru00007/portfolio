import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "LifeConnect",
    description:
      "A platform that makes organ donation easier and speeds up the process using AI algorithms. Connects donors, hospitals, and recipients seamlessly.",
    tech: ["React", "Python", "AI", "Healthcare"],
    type: "live",
    event: "Prompt to Product Hackathon",
    github: "https://github.com",
    live: "https://example.com",
    highlight: true,
  },
  {
    title: "ClinicBook",
    description:
      "A platform to book appointments for local clinics in your locality — just like ordering food or booking movie tickets. Simple, fast, convenient.",
    tech: ["React", "JavaScript", "Tailwind"],
    type: "live",
    event: null,
    github: "https://github.com",
    live: null,
    highlight: false,
  },
  {
    title: "Vyavsta AI",
    description:
      "An AI financial manager for small retail owners. Analyzes daily business operations, provides health stats, and advises on areas to improve. Fully vibe coded! ✨",
    tech: ["AI", "Analytics", "Finance", "Vibe Coded"],
    type: "live",
    event: "Bengaluru AI Hack Day",
    github: "https://github.com/chandru00007/vyavastha-ai",
    live: "https://vyavasthaai.lovable.app/",
    highlight: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative noise-bg">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Selected Works</h2>
          <p className="text-muted-foreground">Engineering solutions for the real world.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group p-6 rounded-2xl border transition-all duration-300 hover:border-primary/50 ${
                project.highlight 
                  ? "bg-card border-primary/30" 
                  : "bg-card/50 border-border"
              }`}
            >
              {/* Type Badge */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.event && (
                  <Badge className="bg-accent/50 text-accent-foreground border-accent rounded-full">
                    <Trophy className="h-3 w-3 mr-1" />
                    {project.event}
                  </Badge>
                )}
                {project.highlight && !project.event && (
                  <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.type !== "upcoming" && (
                <div className="flex gap-3">
                  {project.live && (
                    <Button variant="outline" size="sm" className="rounded-full gap-2" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Visit Site
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="ghost" size="sm" className="rounded-full gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Learning More Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground italic mt-12"
        >
          "Learning & Building More..."
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsSection;
