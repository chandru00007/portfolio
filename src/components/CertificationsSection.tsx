import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    year: "2025",
    title: "Python Programming",
    issuer: "MyCaptain",
    description: "Competency in Python Basics, Data Analysis, Web Development with Django/Flask, and Automation.",
    link: "/certificates/python-certificate.pdf",
    color: {
      gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
      border: "border-blue-500/20 hover:border-blue-500/50",
      glow: "bg-blue-500/40",
      icon: "bg-blue-500/20 text-blue-400",
      badge: "text-blue-400",
    },
  },
  {
    year: "2025",
    title: "Prompt Engineering",
    issuer: "Online Platform",
    description: "Mastering AI prompt design and optimization techniques.",
    link: "https://drive.google.com/file/d/1vDm4o7gzX_eDB0f7CSahITratapjDQ_O/view?usp=drive_link",
    color: {
      gradient: "from-violet-500/10 via-purple-500/5 to-transparent",
      border: "border-violet-500/20 hover:border-violet-500/50",
      glow: "bg-violet-500/40",
      icon: "bg-violet-500/20 text-violet-400",
      badge: "text-violet-400",
    },
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative noise-bg">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Certifications</h2>
          <p className="text-muted-foreground">Validating skills through official credentials.</p>
        </motion.div>

        <div className="mx-auto max-w-4xl grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`group relative p-6 rounded-2xl bg-card/80 backdrop-blur-sm border ${cert.color.border} transition-all duration-300 overflow-hidden`}
            >
              {/* Glow background effect */}
              <div className={`absolute -inset-4 ${cert.color.glow} opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 pointer-events-none`} />
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color.gradient} pointer-events-none`} />
              
              <div className="relative z-10 flex items-start justify-between mb-4">
                <div className={`p-2 rounded-lg ${cert.color.icon}`}>
                  <Award className="h-5 w-5" />
                </div>
                <span className={`text-sm font-medium ${cert.color.badge}`}>{cert.year}</span>
              </div>

              <h3 className="relative z-10 text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="relative z-10 text-muted-foreground text-sm mb-3">{cert.issuer}</p>
              <p className="relative z-10 text-muted-foreground text-sm mb-4">{cert.description}</p>

              <Button variant="ghost" size="sm" className="relative z-10 rounded-full gap-2 p-0 h-auto text-muted-foreground hover:text-primary" asChild>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Verify Credential
                </a>
              </Button>
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

export default CertificationsSection;
