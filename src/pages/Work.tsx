
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";

const Work = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Selected Work
          </h1>
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
