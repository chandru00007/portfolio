import { Lightbulb, TrendingUp, Target } from "lucide-react";

const learningItems = [
  {
    icon: Lightbulb,
    title: "AI & Machine Learning",
    description: "Exploring the fundamentals of AI, neural networks, and how to leverage AI tools effectively.",
  },
  {
    icon: TrendingUp,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with React, learning backend concepts and databases.",
  },
  {
    icon: Target,
    title: "Problem Solving",
    description: "Practicing DSA, participating in coding challenges, and developing logical thinking skills.",
  },
];

const CurrentlyLearning = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Currently Learning</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            What I'm actively exploring this semester
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {learningItems.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors duration-200"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
