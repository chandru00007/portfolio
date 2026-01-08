import { ExternalLink, Github, Trophy, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Hackathon Project 1",
    description:
      "A prototype built during a 24-hour hackathon. Solved a real-world problem using AI and web technologies.",
    tech: ["Python", "React", "AI"],
    type: "hackathon",
    github: "https://github.com",
    live: null,
  },
  {
    title: "Learning Project",
    description:
      "A practice project to understand React fundamentals. Built a simple todo app with local storage.",
    tech: ["React", "JavaScript", "CSS"],
    type: "learning",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Coming Soon",
    description:
      "More exciting projects are in the works! Stay tuned for updates as I continue my learning journey.",
    tech: ["???"],
    type: "upcoming",
    github: null,
    live: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here's what I've been building. Every project is a learning experience!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 flex flex-col hover:border-primary/50 transition-colors duration-200"
            >
              {/* Project Type Badge */}
              <div className="mb-4">
                {project.type === "hackathon" && (
                  <Badge className="gap-1 bg-primary/20 text-primary border-primary/30">
                    <Trophy className="h-3 w-3" />
                    Hackathon
                  </Badge>
                )}
                {project.type === "learning" && (
                  <Badge variant="secondary" className="gap-1">
                    <BookOpen className="h-3 w-3" />
                    Learning Project
                  </Badge>
                )}
                {project.type === "upcoming" && (
                  <Badge variant="outline" className="gap-1">
                    🚀 Coming Soon
                  </Badge>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm flex-grow mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-secondary px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.type !== "upcoming" && (
                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
