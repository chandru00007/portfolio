import { motion } from "framer-motion";
import { Trophy, ExternalLink, Sparkles, Code2, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Achievement {
  title: string;
  position: string;
  level: string;
  year: string;
  highlight: string;
  project?: string;
  projectDescription?: string;
  projectLink?: string;
  mentor?: {
    name: string;
    title: string;
  };
  linkedinPost?: string;
  linkedinPostPending?: boolean;
  icon?: "trophy" | "code" | "github";
}

const achievements: Achievement[] = [
  {
    title: "Prompt to Product Hackathon",
    position: "1st Prize",
    level: "University Level - 4 Campuses",
    project: "LifeConnect",
    projectDescription: "AI-powered organ donation matching platform",
    projectLink: "https://github.com/chandru00007/Life-connect",
    year: "2025",
    highlight: "Built an AI-powered solution that stood out among participants from 4 campuses",
    mentor: {
      name: "Srivant Varanasi",
      title: "CEO @ Surviant | Co-Founder @ Riverloom & Propelix"
    },
    linkedinPost: "https://www.linkedin.com/posts/chandrashekhar-kawadimatti-b086b3385_feeling-grateful-to-share-that-i-participated-activity-7400532309533433860-pk-6",
    icon: "trophy",
  },
  {
    title: "Social Summer of Code 2026",
    position: "Contributor",
    level: "Open Source Program",
    year: "2026",
    highlight: "Contributed to real-world open source projects, collaborating with maintainers and other developers worldwide",
    linkedinPostPending: true,
    icon: "github",
  },
  {
    title: "CodeQuest 2026",
    position: "Finalist",
    level: "Competitive Coding Challenge",
    year: "2026",
    highlight: "Reached the finals of CodeQuest 2026 through problem-solving and consistent practice",
    linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7458762840477159426/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF73LXgBZ-aGnoLSO8dno7FiUco17wbZGxU",
    icon: "code",
  },
];

const iconMap = {
  trophy: Trophy,
  code: Code2,
  github: Github,
};

const HallOfFameSection = () => {
  return (
    <section id="hall-of-fame" className="py-24 px-4 relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-amber-500/20 via-orange-500/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 mb-6 trophy-glow"
          >
            <Trophy className="w-10 h-10 text-amber-900" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Hall of Fame</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Celebrating victories & milestones
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon ?? "trophy"];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.15,
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                {/* Outer glow layer */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 rounded-2xl opacity-40 group-hover:opacity-70 blur-xl transition-all duration-500 group-hover:blur-2xl achievement-pulse" />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-card via-card to-amber-950/20 rounded-2xl border border-amber-500/30 p-4 sm:p-6 md:p-8 overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-400 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 3) * 20}%`,
                        }}
                        animate={{
                          y: [-10, 10, -10],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <motion.div
                          animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30"
                        >
                          <Icon className="w-8 h-8 text-amber-900" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg sm:text-2xl font-bold text-foreground">{achievement.title}</h3>
                          <p className="text-amber-400/80 text-sm">{achievement.level}</p>
                        </div>
                      </div>
                      <span className="text-amber-400/60 text-sm font-mono">{achievement.year}</span>
                    </div>

                    {/* Position Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                        delay: 0.4,
                      }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 mb-6 badge-shimmer"
                    >
                      <Sparkles className="w-5 h-5 text-amber-900" />
                      <span className="text-amber-900 font-bold text-lg tracking-wide uppercase">
                        {achievement.position}
                      </span>
                      <Sparkles className="w-5 h-5 text-amber-900" />
                    </motion.div>

                    {/* Project Info */}
                    {achievement.project && (
                      <div className="mb-6">
                        <p className="text-muted-foreground mb-1">Project</p>
                        <p className="text-xl font-semibold text-foreground">{achievement.project}</p>
                        {achievement.projectDescription && (
                          <p className="text-muted-foreground text-sm mt-1">{achievement.projectDescription}</p>
                        )}
                      </div>
                    )}

                    {/* Highlight */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-6"
                    >
                      <p className="text-amber-300 italic text-center">
                        "{achievement.highlight}"
                      </p>
                    </motion.div>

                    {/* Mentor */}
                    {achievement.mentor && (
                      <div className="mb-8">
                        <p className="text-muted-foreground text-sm mb-1">Mentored by</p>
                        <p className="text-foreground font-medium">{achievement.mentor.name}</p>
                        <p className="text-muted-foreground text-xs">{achievement.mentor.title}</p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      {achievement.projectLink && (
                        <Button
                          variant="outline"
                          className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400"
                          asChild
                        >
                          <a href={achievement.projectLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Project
                          </a>
                        </Button>
                      )}
                      {achievement.linkedinPost ? (
                        <Button
                          className="bg-gradient-to-r from-amber-500 to-orange-500 text-amber-900 hover:from-amber-400 hover:to-orange-400 font-semibold"
                          asChild
                        >
                          <a href={achievement.linkedinPost} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View LinkedIn Post
                          </a>
                        </Button>
                      ) : achievement.linkedinPostPending ? (
                        <Button
                          variant="outline"
                          disabled
                          className="border-amber-500/30 text-amber-400/60 cursor-not-allowed"
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          LinkedIn Post Coming Soon
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HallOfFameSection;
