import { ArrowRight, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import heroBg from "@/assets/hero-bg-wide.jpg";

// Roles to cycle through
const roles = [
  "First-Year CST Student 🎓",
  "Web Developer 💻",
  "Tech Enthusiast 🚀",
  "Problem Solver 🧩",
  "Future Engineer ⚡",
];

// Component for animated role text
const RoleAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-6 sm:h-8 md:h-10 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ 
            duration: 0.5, 
            ease: "easeInOut"
          }}
          className="absolute inset-0 flex items-center justify-center text-primary font-mono text-sm sm:text-lg md:text-xl"
        >
          {roles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

// Component to render text with hover effect on each letter
const HoverText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="inline-block cursor-default hover:text-primary hover:[-webkit-text-fill-color:hsl(25_95%_53%)] hover:drop-shadow-[0_0_12px_hsl(25_95%_53%/0.6)]"
          style={{
            transition: "all 2s cubic-bezier(0.25, 0.1, 0.25, 1)"
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative animated-noise-bg overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Cursor Following Yellow Glow */}
      <div
        className="pointer-events-none absolute z-[3] transition-opacity duration-500"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, hsl(48 96% 53% / 0.12) 0%, hsl(48 96% 53% / 0.06) 25%, hsl(48 96% 53% / 0.02) 50%, transparent 70%)",
          opacity: isHovering ? 1 : 0,
          borderRadius: "50%",
        }}
      />

      {/* Background Photo Silhouette */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80 grayscale-[50%] brightness-100 pointer-events-none"
      />
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background z-[1]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto pt-20">
          {/* Name - Large Typography with pop-up effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="mb-6"
          >
            <motion.h1 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-none"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <HoverText text="CHANDRASHEKHAR" className="text-gradient" />
            </motion.h1>
            <motion.h1 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-none"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <HoverText text="KAWADIMATTI" className="text-gradient" />
            </motion.h1>
          </motion.div>

          {/* Animated Role Switcher */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.7,
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
            className="mb-8"
          >
            <RoleAnimation />
          </motion.div>

          {/* CTA Buttons with staggered pop-up */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.0,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="rounded-full px-6 sm:px-8 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View Work <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.15,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="rounded-full px-6 sm:px-8" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Icons with staggered pop-up */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="flex gap-6 justify-center"
          >
            {[
              { href: "https://www.linkedin.com/in/chandrashekhar-kawadimatti-b086b3385/", Icon: Linkedin },
              { href: "https://github.com/chandru00007", Icon: Github },
              { href: "mailto:chandrukavadimatti07@gmail.com", Icon: Mail },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                initial={{ opacity: 0, y: 20, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
