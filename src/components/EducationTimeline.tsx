import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, MapPin } from "lucide-react";

const educationData = [
  {
    year: "2025 - 2029",
    title: "B.Tech Computer Science & Technology",
    institution: "Dayananda Sagar University",
    location: "Bengaluru",
    icon: GraduationCap,
    current: true,
  },
  {
    year: "2024 - 2025",
    score: "92.66%",
    title: "Intermediate (12th)",
    institution: "Expert PU Science College",
    location: "Nagarbetta",
    icon: School,
    current: false,
  },
  {
    year: "2022 - 2023",
    score: "95.6%",
    title: "Matriculation (10th)",
    institution: "SDK High School",
    location: "Nagarbetta",
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
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              whileHover={{ 
                scale: 1.02, 
                y: -4,
                transition: { duration: 0.2 }
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className={`group relative p-6 rounded-2xl border backdrop-blur-sm cursor-pointer overflow-hidden transition-all duration-300 ${
                item.current 
                  ? "bg-card/80 border-primary/40 shadow-lg shadow-primary/10" 
                  : "bg-card/50 border-border hover:border-primary/30"
              }`}
            >
              {/* Animated gradient background on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              
              {/* Current indicator glow */}
              {item.current && (
                <motion.div 
                  className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      item.current 
                        ? "bg-primary/20 group-hover:bg-primary/30" 
                        : "bg-secondary group-hover:bg-primary/10"
                    }`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className={`h-5 w-5 transition-colors duration-300 ${
                      item.current 
                        ? "text-primary" 
                        : "text-muted-foreground group-hover:text-primary"
                    }`} />
                  </motion.div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-muted-foreground">{item.year}</span>
                      {item.score && (
                        <motion.span 
                          className="text-sm text-primary font-semibold px-2 py-0.5 bg-primary/10 rounded-full"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                        >
                          {item.score}
                        </motion.span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <p className="text-muted-foreground">{item.institution}</p>
                  </div>
                </div>
                <motion.div 
                  className="flex items-center gap-1 text-sm text-muted-foreground md:text-right"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="h-4 w-4 text-primary/70" />
                  {item.location}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
