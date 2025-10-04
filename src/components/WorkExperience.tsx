import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/experience";

const WorkExperience = () => {
  const [showAll, setShowAll] = useState(false);
  const recentExperiences = experiences.filter(exp => exp.isRecent);
  const displayedExperiences = showAll ? experiences : recentExperiences;

  return (
    <section className="py-16 md:py-24 lg:py-32 relative" id="experience">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 glow-secondary">
          <span className="text-secondary">Work</span>{" "}
          <span className="text-primary">Experience</span>
        </h2>

        {/* Roadmap Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {displayedExperiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-20 group">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform duration-300 border-glow-primary" />

                {/* Content card */}
                <div className="bg-card border border-primary/30 p-6 rounded-sm hover:border-primary transition-colors duration-300 group-hover:border-glow-primary">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                    <span className="text-sm text-accent">{exp.period}</span>
                  </div>
                  <p className="text-secondary font-semibold mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Expand button */}
          {!showAll && experiences.length > recentExperiences.length && (
            <div className="mt-12 text-center">
              <Button
                onClick={() => setShowAll(true)}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
              >
                View Earlier Experience
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
