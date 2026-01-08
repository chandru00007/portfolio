import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import AboutSection from "@/components/AboutSection";
import EducationTimeline from "@/components/EducationTimeline";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <TechMarquee />
      <AboutSection />
      <EducationTimeline />
      <SkillsSection />
      <ProjectsSection />
      <CurrentlyLearning />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
