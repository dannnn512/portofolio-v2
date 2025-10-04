import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  skills: string[];
  tools: string[];
  playStoreUrl?: string;
  githubUrl?: string;
  isRecent: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management",
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop",
    skills: ["React", "Node.js", "PostgreSQL"],
    tools: ["Docker", "AWS", "Stripe"],
    playStoreUrl: "#",
    githubUrl: "#",
    isRecent: true,
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses and analytics",
    thumbnail: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop",
    skills: ["TypeScript", "Python", "WebSocket"],
    tools: ["OpenAI", "Redis", "MongoDB"],
    githubUrl: "#",
    isRecent: true,
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts and nutrition goals",
    thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
    skills: ["React Native", "Firebase"],
    tools: ["Expo", "Chart.js"],
    playStoreUrl: "#",
    isRecent: false,
  },
  {
    id: 4,
    title: "Portfolio Generator",
    description: "SaaS tool for creating beautiful developer portfolios",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    skills: ["Next.js", "Tailwind"],
    tools: ["Vercel", "Prisma"],
    githubUrl: "#",
    isRecent: false,
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const recentProjects = projects.filter(proj => proj.isRecent);
  const displayedProjects = showAll ? projects : recentProjects;

  return (
    <section className="py-16 md:py-24 lg:py-32 relative" id="projects">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20">
          <span className="text-tertiary glow-accent">Featured</span>{" "}
          <span className="text-primary glow-primary">Projects</span>
        </h2>

        {/* Project Roadmap */}
        <div className="w-full relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-tertiary via-primary to-secondary hidden md:block" />

          <div className="space-y-12 md:space-y-20">
            {displayedProjects.map((project) => (
              <div key={project.id} className="relative md:pl-20 group">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-tertiary border-4 border-background group-hover:scale-125 transition-transform duration-300 hidden md:block" 
                  style={{ boxShadow: "0 0 20px hsl(140 100% 50% / 0.5)" }} 
                />

                {/* Project card */}
                <div className="bg-card border border-tertiary/30 rounded-sm overflow-hidden hover:border-tertiary transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,255,157,0.3)]">
                  <div className="grid md:grid-cols-[300px,1fr] gap-6">
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden aspect-video md:aspect-auto">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-tertiary">{project.title}</h3>
                        <div className="flex gap-2">
                          {project.playStoreUrl && (
                            <a 
                              href={project.playStoreUrl}
                              className="text-primary hover:text-primary/80 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl}
                              className="text-secondary hover:text-secondary/80 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{project.description}</p>

                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-primary font-semibold mb-2">Skills:</p>
                          <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill) => (
                              <Badge 
                                key={skill} 
                                variant="outline"
                                className="border-primary/50 text-primary"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-sm text-secondary font-semibold mb-2">Tools:</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool) => (
                              <Badge 
                                key={tool} 
                                variant="outline"
                                className="border-secondary/50 text-secondary"
                              >
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expand button */}
          {!showAll && projects.length > recentProjects.length && (
            <div className="mt-12 text-center">
              <Button
                onClick={() => setShowAll(true)}
                variant="outline"
                className="border-tertiary text-tertiary hover:bg-tertiary hover:text-tertiary-foreground group"
              >
                View More Projects
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
