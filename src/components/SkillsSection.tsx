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
    description: "HTML, CSS, JavaScript, React",
    icon: Code,
  },
  {
    title: "Python Basics",
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
    title: "Prompt Engineering",
    description: "Neural Networks Basics",
    icon: Brain,
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="group p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors mb-2">
                <skill.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
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
          "Learning More..."
        </motion.p>
      </div>
    </section>
  );
};

export default SkillsSection;
