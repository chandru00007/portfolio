import { GraduationCap, School, BookOpen } from "lucide-react";

const educationData = [
  {
    year: "2024 - Present",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Your University Name",
    details: "First Year | Currently Pursuing",
    icon: GraduationCap,
  },
  {
    year: "2022 - 2024",
    title: "Higher Secondary (12th Grade)",
    institution: "Your School Name",
    details: "Science Stream | XX.X%",
    icon: School,
  },
  {
    year: "2022",
    title: "Secondary (10th Grade)",
    institution: "Your School Name",
    details: "XX.X%",
    icon: BookOpen,
  },
];

const EducationTimeline = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-6 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                  <item.icon className="h-4 w-4 text-primary-foreground" />
                </div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <span className="text-sm text-primary font-medium">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.institution}</p>
                  <p className="text-sm text-muted-foreground/80">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
