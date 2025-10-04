import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WorkExperience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
