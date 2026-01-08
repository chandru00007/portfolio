import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Currently Learning",
    skills: [
      { name: "Python", level: 40 },
      { name: "React", level: 30 },
      { name: "Prompt Engineering", level: 50 },
    ],
  },
  {
    title: "Basics",
    skills: [
      { name: "HTML/CSS", level: 60 },
      { name: "JavaScript", level: 35 },
      { name: "C/C++", level: 45 },
    ],
  },
  {
    title: "Exploring",
    skills: [
      { name: "AI Tools", level: 55 },
      { name: "Vibe Coding", level: 40 },
      { name: "Git & GitHub", level: 35 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm honest about where I am in my learning journey. These progress 
            bars show my current comfort level with each technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
