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
    github: "https://github.com/chandru00007/Life-connect",
    live: null,
    highlight: true,
    color: {
      gradient: "from-rose-500/20 to-pink-500/10",
      border: "border-rose-500/30 hover:border-rose-400",
      shadow: "hover:shadow-[0_0_30px_-5px_rgb(244,63,94,0.4)]",
      text: "group-hover:text-rose-400",
      badge: "bg-rose-500/20 text-rose-300 border-rose-500/30",
      tech: "hover:bg-rose-500/20 hover:text-rose-300",
    },
  },
  {
    title: "DocQue",
    description:
      "A platform to book appointments for local clinics in your locality — just like ordering food or booking movie tickets. Simple, fast, convenient.",
    tech: ["React", "JavaScript", "Tailwind"],
    type: "live",
    event: null,
    github: "https://github.com/chandru00007/doc-queue-bangalore",
    live: null,
    highlight: false,
    color: {
      gradient: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/30 hover:border-emerald-400",
      shadow: "hover:shadow-[0_0_30px_-5px_rgb(16,185,129,0.4)]",
      text: "group-hover:text-emerald-400",
      badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      tech: "hover:bg-emerald-500/20 hover:text-emerald-300",
    },
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
    color: {
      gradient: "from-violet-500/20 to-purple-500/10",
      border: "border-violet-500/30 hover:border-violet-400",
      shadow: "hover:shadow-[0_0_30px_-5px_rgb(139,92,246,0.4)]",
      text: "group-hover:text-violet-400",
      badge: "bg-violet-500/20 text-violet-300 border-violet-500/30",
      tech: "hover:bg-violet-500/20 hover:text-violet-300",
    },
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
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.2)"
              }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className={`group relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 bg-gradient-to-br ${project.color.gradient} ${project.color.border} ${project.color.shadow}`}
            >
              {/* Type Badge */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.event && (
                  <Badge className={`${project.color.badge} rounded-full`}>
                    <Trophy className="h-3 w-3 mr-1" />
                    {project.event}
                  </Badge>
                )}
                {project.highlight && !project.event && (
                  <Badge className={`${project.color.badge} rounded-full`}>
                    <Sparkles className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>

              {/* Title & Description */}
              <motion.h3 
                className={`text-xl font-semibold mb-3 ${project.color.text} transition-colors`}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                    viewport={{ once: true }}
                    className={`text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground ${project.color.tech} transition-colors cursor-default`}
                  >
                    {tech}
                  </motion.span>
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
