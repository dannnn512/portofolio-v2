import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

const Skills = () => {
  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden" id="skills">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 glow-accent">
          <span className="text-accent">Technical</span>{" "}
          <span className="text-primary">Skills</span>
        </h2>

        {/* Scrolling container - Left to Right */}
        <div className="relative mb-6 md:mb-10">
          <div className="flex gap-4 animate-scroll-left">
            {duplicatedSkills.map((skill, index) => (
              <Badge
                key={`left-${index}`}
                variant="outline"
                className="border-primary text-primary px-6 py-3 text-lg font-semibold whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-colors cursor-default flex-shrink-0"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Scrolling container - Right to Left */}
        <div className="relative">
          <div className="flex gap-4 animate-scroll-right">
            {duplicatedSkills.map((skill, index) => (
              <Badge
                key={`right-${index}`}
                variant="outline"
                className="border-secondary text-secondary px-6 py-3 text-lg font-semibold whitespace-nowrap hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-default flex-shrink-0"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Skills;
