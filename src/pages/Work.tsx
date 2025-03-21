
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Selected Work
            </h1>
            <Button 
              onClick={() => navigate('/')} 
              className="self-start md:self-auto flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-foreground transition-all duration-300"
            >
              <Home size={18} />
              <span>Back to Home</span>
            </Button>
          </div>
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Work;
