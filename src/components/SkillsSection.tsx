import { motion } from "framer-motion";
import { 
  Code, 
  Terminal, 
  Database, 
  Cpu, 
  Sparkles, 
  Brain,
  Monitor,
  MessageSquare
} from "lucide-react";

const skills = [
  {
    title: "Web Development",
    description: "HTML, CSS, JavaScript, React",
    icon: Code,
  },
  {
    title: "Python",
    description: "Learning for AI & Web Development",
    icon: Terminal,
  },
  {
    title: "C/C++",
    description: "Data Structures & Algorithms",
    icon: Cpu,
  },
  {
    title: "Database",
    description: "SQL, Basic Database Concepts",
    icon: Database,
  },
  {
    title: "AI Tools",
    description: "Prompt Engineering, AI Integration",
    icon: Sparkles,
  },
  {
    title: "Deep Learning",
    description: "Neural Networks Basics",
    icon: Brain,
  },
  {
    title: "Operating Systems",
    description: "Linux, Windows, OS Concepts",
    icon: Monitor,
  },
  {
    title: "Soft Skills",
    description: "Communication, Teamwork",
    icon: MessageSquare,
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
          <p className="text-muted-foreground">Tools and technologies I'm learning to build with.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                  <skill.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
              </div>
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
          "Learning & Earning More..."
        </motion.p>
      </div>
    </section>
  );
};

export default SkillsSection;
