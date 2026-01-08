import { motion } from "framer-motion";
import { Download, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import aboutPhoto from "@/assets/about-photo-expanded.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative noise-bg">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Behind the Code</h2>
          <p className="text-muted-foreground">Who I am and what drives me.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-md mx-auto rounded-3xl flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(234,179,8,0.15)] hover:shadow-[0_0_60px_rgba(234,179,8,0.25)] transition-shadow duration-500">
              <img 
                src={aboutPhoto} 
                alt="Chandrashekhar Kawadimatti" 
                className="w-full h-full object-contain object-center rounded-3xl"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science Student obsessed with the intersection of creativity and logic.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently diving deep into <span className="text-primary">AI & Web Development</span> and building systems that solve real-world problems. My goal is simple: Create software that feels like magic.
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-primary pl-4 italic text-foreground">
              "Where you start doesn't matter, starting now does matter. And trusting yourself makes all the difference."
            </blockquote>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="secondary" className="rounded-full px-4 py-1">CST Student</Badge>
              <Badge variant="secondary" className="rounded-full px-4 py-1">Vibe Coder</Badge>
              <Badge variant="secondary" className="rounded-full px-4 py-1">Web Developer</Badge>
              <Badge variant="secondary" className="rounded-full px-4 py-1">AI Explorer</Badge>
            </div>

            {/* Download CV Button */}
            <Button className="rounded-full gap-2 mt-4">
              <Download className="h-4 w-4" />
              Download CV
            </Button>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-xs">Experience</span>
                </div>
                <p className="text-lg font-semibold">1st Year</p>
                <p className="text-xs text-muted-foreground">Learning & Growing</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs">Location</span>
                </div>
                <p className="text-lg font-semibold">Your City</p>
                <p className="text-xs text-muted-foreground">India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
