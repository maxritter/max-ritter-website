
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Work = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col bg-background"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
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
    </motion.div>
  );
};

export default Work;
