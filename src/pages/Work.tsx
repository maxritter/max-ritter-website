import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import SEO from "@/components/SEO";
import BackToHomeButton from "@/components/BackToHomeButton";
import { pageVariants } from "@/utils/animations";

const Work = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="min-h-screen flex flex-col bg-background"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <SEO
        title="Selected Work | Max Ritter | Senior IT Freelancer"
        description="View Max Ritter's selected work and projects in AWS Cloud, Data Engineering, DevOps, and AI. Senior IT Freelancer from Germany."
        pagePath="work"
      />
      <Header />
      <BackToHomeButton />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Selected Work
            </h1>
          </div>
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Work;
