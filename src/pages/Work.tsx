import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import { pageVariants } from "@/utils/animations";
import { Briefcase } from "lucide-react";

const Work = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col bg-background"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <SEO
        title="Work — Max Ritter | IT Freelancer"
        description="Selected work and projects by Max Ritter — AWS Cloud, Data, DevOps, and AI engineering for enterprise clients."
        pagePath="work"
      />
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <PageHeader
            title="Selected Work"
            subtitle="Projects, clients & industries I've worked with"
            icon={Briefcase}
          />
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Work;
