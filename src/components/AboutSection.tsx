import { User, GraduationCap, Sparkles, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-secondary border-2 border-primary/20 flex items-center justify-center">
              <User className="w-24 h-24 text-muted-foreground" />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hey there! I'm a first-year Computer Science & Engineering student 
              with an insatiable curiosity for technology. My journey into coding 
              started with a simple "Hello World" and has evolved into a passion 
              for building real-world solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I'm diving deep into AI, web development, and the exciting 
              world of "vibe coding." I believe in learning by doing, and every 
              hackathon, every project, and every bug I fix brings me one step 
              closer to becoming a better developer.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Badge variant="secondary" className="gap-2 py-2 px-4">
                <GraduationCap className="h-4 w-4" />
                CSE Student
              </Badge>
              <Badge variant="secondary" className="gap-2 py-2 px-4">
                <Sparkles className="h-4 w-4" />
                Learning AI
              </Badge>
              <Badge variant="secondary" className="gap-2 py-2 px-4">
                <Code className="h-4 w-4" />
                Vibe Coder
              </Badge>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mt-6">
              "The best time to start was yesterday. The next best time is now."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
