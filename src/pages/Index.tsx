import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import AboutSection from "@/components/AboutSection";
import EducationTimeline from "@/components/EducationTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const floatAnimation = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.1, 1],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

const floatAnimationAlt = {
  animate: {
    y: [0, 15, 0],
    x: [0, -15, 0],
    opacity: [0.6, 1, 0.6],
    scale: [1, 1.15, 1],
  },
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

const floatAnimationSlow = {
  animate: {
    y: [0, -25, 0],
    x: [0, -10, 0],
    opacity: [0.4, 1, 0.4],
    scale: [1, 1.2, 1],
  },
  transition: {
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Global Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top-left gradient orb */}
        <motion.div 
          className="absolute -top-40 -left-40 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
          animate={floatAnimation.animate}
          transition={floatAnimation.transition}
        />
        {/* Top-right gradient orb */}
        <motion.div 
          className="absolute -top-20 -right-20 w-80 h-80 bg-primary/6 rounded-full blur-3xl"
          animate={floatAnimationAlt.animate}
          transition={{ ...floatAnimationAlt.transition, delay: 1 }}
        />
        {/* Center-left subtle glow */}
        <motion.div 
          className="absolute top-1/3 -left-20 w-64 h-64 bg-primary/7 rounded-full blur-3xl"
          animate={floatAnimationSlow.animate}
          transition={{ ...floatAnimationSlow.transition, delay: 2 }}
        />
        {/* Bottom-right gradient orb */}
        <motion.div 
          className="absolute bottom-1/4 -right-32 w-72 h-72 bg-primary/8 rounded-full blur-3xl"
          animate={floatAnimation.animate}
          transition={{ ...floatAnimation.transition, delay: 3 }}
        />
        {/* Bottom-left accent */}
        <motion.div 
          className="absolute -bottom-20 left-1/4 w-80 h-80 bg-primary/6 rounded-full blur-3xl"
          animate={floatAnimationAlt.animate}
          transition={{ ...floatAnimationAlt.transition, delay: 4 }}
        />
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <TechMarquee />
        <AboutSection />
        <EducationTimeline />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
