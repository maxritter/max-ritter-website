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
        title="Selected Work | Max Ritter | Senior IT Freelancer"
        description="View Max Ritter's selected work and projects in AWS Cloud, Data Engineering, DevOps, and AI. Senior IT Freelancer from Germany."
        pagePath="work"
      />
      <Header />
      <PageHeader 
        title="Selected Work" 
        subtitle="Professional projects and client engagements across various industries"
        icon={<Briefcase className="w-8 h-8 text-primary" />}
      />
      <main className="flex-grow">
        <ProjectsSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Work;
