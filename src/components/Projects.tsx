import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
                    {/* Thumbnail -> open gallery modal on click; no external redirect */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="relative overflow-hidden h-40 md:h-48 lg:h-56 w-full text-left group">
                          <img
                            src={(project.thumbnails && project.thumbnails[0]) || project.thumbnail || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl p-0 overflow-hidden">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {(project.thumbnails && project.thumbnails.length > 0
                              ? project.thumbnails
                              : [project.thumbnail || "/placeholder.svg"]
                            ).map((src, idx) => (
                              <CarouselItem key={idx} className="h-[60vh]">
                                <img src={src || "/placeholder.svg"} alt={`${project.title} - ${idx + 1}`} className="w-full h-full object-contain bg-black" />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious
                            className="left-3 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/60 text-white border border-white/10 shadow-lg backdrop-blur-sm hover:bg-black/80 focus-visible:ring-2 focus-visible:ring-primary z-10"
                          />
                          <CarouselNext
                            className="right-3 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/60 text-white border border-white/10 shadow-lg backdrop-blur-sm hover:bg-black/80 focus-visible:ring-2 focus-visible:ring-primary z-10"
                          />
                        </Carousel>
                      </DialogContent>
                    </Dialog>

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
                          {/* {project.githubUrl && (
                            <a 
                              href={project.githubUrl}
                              className="text-secondary hover:text-secondary/80 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )} */}
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
