import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import AboutSection from "@/components/AboutSection";
import EducationTimeline from "@/components/EducationTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import HallOfFameSection from "@/components/HallOfFameSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground relative overflow-hidden overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Static primary color orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-primary/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-primary/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-primary/5 rounded-full blur-3xl" />
        
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
        <HallOfFameSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
        <ChatBot />
      </div>
    </div>
  );
};

export default Index;
