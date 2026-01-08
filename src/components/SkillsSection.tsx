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
          <p className="text-muted-foreground">Tools and skills I'm using now to build projects.</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.1,
                boxShadow: "0 15px 30px -10px hsl(var(--primary) / 0.3)"
              }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 150
              }}
              viewport={{ once: true }}
              className="group p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/5 cursor-pointer transition-all duration-300 flex flex-col items-center text-center hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
            >
              <motion.div 
                className="p-3 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors mb-2"
                whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <skill.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.div>
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
