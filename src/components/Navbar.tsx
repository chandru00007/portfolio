import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Hall of Fame", href: "#hall-of-fame" },
  { name: "Skills", href: "#skills" },
  { name: "Certs", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
    >
      <div
        className={`flex items-center gap-1 px-2 py-2 rounded-full border border-border/50 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "bg-card/90" : "bg-card/70"
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full hover:bg-secondary"
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-6 bg-border mx-2" />
          <Button size="sm" variant="outline" className="rounded-full px-4" asChild>
            <a href="/chandrashekhar_kawadimatti.docx" download>Resume</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-card/95 backdrop-blur-md border border-border"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button size="sm" variant="outline" className="rounded-full mt-2" asChild>
                <a href="/chandrashekhar_kawadimatti.docx" download>Resume</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
