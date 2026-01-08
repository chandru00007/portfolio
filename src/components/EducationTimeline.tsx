import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, MapPin } from "lucide-react";

const educationData = [
  {
    year: "2024 - 2028",
    score: "CGPA: X.XX",
    title: "B.Tech Computer Science",
    institution: "Your University Name",
    location: "Your State",
    icon: GraduationCap,
    current: true,
  },
  {
    year: "2022 - 2024",
    score: "XX.X%",
    title: "Intermediate (11th & 12th)",
    institution: "Your School Name",
    location: "Your State",
    icon: School,
    current: false,
  },
  {
    year: "2022",
    score: "XX.X%",
    title: "Matriculation (10th)",
    institution: "Your School Name",
    location: "Your State",
    icon: BookOpen,
    current: false,
  },
];

const EducationTimeline = () => {
  return (
    <section className="py-24 relative noise-bg">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Academic Ascent</h2>
          <p className="text-muted-foreground">The foundation of my engineering journey.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border ${
                item.current 
                  ? "bg-card border-primary/30" 
                  : "bg-card/50 border-border"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    item.current ? "bg-primary/10" : "bg-secondary"
                  }`}>
                    <item.icon className={`h-5 w-5 ${
                      item.current ? "text-primary" : "text-muted-foreground"
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-muted-foreground">{item.year}</span>
                      <span className="text-sm text-primary font-medium">{item.score}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.institution}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground md:text-right">
                  <MapPin className="h-4 w-4" />
                  {item.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
