import { motion } from "framer-motion";
import { 
  Code, 
  Terminal, 
  Database, 
  Cpu, 
  Sparkles, 
  Brain,
  MessageSquare
} from "lucide-react";

const skills = [
  {
    title: "Web Development",
    icon: Code,
    color: "from-blue-500 to-cyan-400",
    hoverBg: "hover:bg-blue-500/10",
    hoverBorder: "hover:border-blue-400/50",
    hoverShadow: "hover:shadow-[0_0_20px_-5px_rgb(59,130,246,0.4)]",
    iconColor: "group-hover:text-blue-400",
    glowColor: "bg-blue-500/30",
  },
  {
    title: "Python Basics",
    icon: Terminal,
    color: "from-yellow-400 to-green-500",
    hoverBg: "hover:bg-yellow-500/10",
    hoverBorder: "hover:border-yellow-400/50",
    hoverShadow: "hover:shadow-[0_0_20px_-5px_rgb(234,179,8,0.4)]",
    iconColor: "group-hover:text-yellow-400",
    glowColor: "bg-yellow-500/30",
  },
  {
    title: "C/C++",
    icon: Cpu,
    color: "from-blue-600 to-indigo-500",
    hoverBg: "hover:bg-indigo-500/10",
    hoverBorder: "hover:border-indigo-400/50",
    hoverShadow: "hover:shadow-[0_0_20px_-5px_rgb(99,102,241,0.4)]",
    iconColor: "group-hover:text-indigo-400",
    glowColor: "bg-indigo-500/30",
  },
  {
    title: "Database",
    icon: Database,
    color: "from-emerald-500 to-teal-400",
    hoverBg: "hover:bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-400/50",
    hoverShadow: "hover:shadow-[0_0_20px_-5px_rgb(16,185,129,0.4)]",
    iconColor: "group-hover:text-emerald-400",
    glowColor: "bg-emerald-500/30",
  },
  {
    title: "AI Tools",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    hoverBg: "hover:bg-purple-500/10",
    hoverBorder: "hover:border-purple-400/50",
    hoverShadow: "hover:shadow-[0_0_20px_-5px_rgb(168,85,247,0.4)]",
    iconColor: "group-hover:text-purple-400",
    glowColor: "bg-purple-500/30",
  },
  {
    title: "Prompt Engineering",
    icon: Brain,
    color: "from-violet-500 to-fuchsia-500",
    hoverBg: "hover:bg-violet-500/10",
    hoverBorder: "hover:border-violet-400/50",
    hoverShadow: "hover:shadow-[0_0_20px_-5px_rgb(139,92,246,0.4)]",
    iconColor: "group-hover:text-violet-400",
    glowColor: "bg-violet-500/30",
  },
  {
    title: "Soft Skills",
    icon: MessageSquare,
    color: "from-orange-500 to-amber-400",
    hoverBg: "hover:bg-orange-500/10",
    hoverBorder: "hover:border-orange-400/50",
    hoverShadow: "hover:shadow-[0_0_20px_-5px_rgb(249,115,22,0.4)]",
    iconColor: "group-hover:text-orange-400",
    glowColor: "bg-orange-500/30",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative noise-bg">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Arsenal</h2>
          <p className="text-muted-foreground">Tools and skills I'm using now to build projects.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
              }
            }
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 40, 
                  scale: 0.8,
                  rotateX: 45
                },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotateX: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 12
                  }
                }
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.1,
              }}
              className={`group relative p-4 rounded-xl bg-card/50 border border-border ${skill.hoverBorder} ${skill.hoverBg} cursor-pointer transition-all duration-300 flex flex-col items-center text-center ${skill.hoverShadow}`}
            >
              {/* Glow background effect */}
              <div className={`absolute inset-0 rounded-xl ${skill.glowColor} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`} />
              
              <motion.div 
                className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} opacity-80 group-hover:opacity-100 transition-all mb-2`}
                whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <skill.icon className="h-5 w-5 text-white transition-colors" />
              </motion.div>
              <h3 className={`text-sm font-medium ${skill.iconColor} transition-colors`}>
                {skill.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning More Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground italic mt-12"
        >
          "Learning More..."
        </motion.p>
      </div>
    </section>
  );
};

export default SkillsSection;
