import { Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative py-12 md:py-16 lg:py-20 border-t border-primary/30" id="contact">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                variant="outline"
                size="icon"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:border-glow-primary"
              >
                <Github className="h-5 w-5" />
              </Button>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                variant="outline"
                size="icon"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:border-glow-primary"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Resume Download */}
          <Button
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground group transition-all duration-300 hover:border-glow-secondary"
          >
            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            Get My Resume
          </Button>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p className="flex items-center justify-center gap-2">
            <span className="text-primary">©</span> 2024
            <span className="text-secondary">•</span>
            Built with <span className="text-accent animate-pulse">♥</span> in the future
          </p>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </footer>
  );
};

export default Footer;
