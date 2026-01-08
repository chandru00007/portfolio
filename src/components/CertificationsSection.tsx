import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    year: "2024",
    title: "Web Development Fundamentals",
    issuer: "Online Platform",
    description: "Mastering HTML, CSS, and JavaScript basics.",
    link: "#",
  },
  {
    year: "2024",
    title: "Python for Beginners",
    issuer: "Online Platform",
    description: "Learning Python programming from scratch.",
    link: "#",
  },
  {
    year: "2024",
    title: "Introduction to AI",
    issuer: "Online Platform",
    description: "Understanding AI fundamentals and applications.",
    link: "#",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-primary font-medium">{cert.year}</span>
              </div>

              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>

              <Button variant="ghost" size="sm" className="rounded-full gap-2 p-0 h-auto text-muted-foreground hover:text-primary" asChild>
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
