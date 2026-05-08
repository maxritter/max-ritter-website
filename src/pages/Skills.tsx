import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import { pageVariants } from "@/utils/animations";
import { Layers } from "lucide-react";

const Skills = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col bg-background"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <SEO
        title="Skills — Max Ritter | IT Freelancer"
        description="Max Ritter's skills: Agentic Engineering, AWS Cloud, Data, DevOps, and Applied AI. Senior IT Freelancer from Germany."
        pagePath="skills"
      />
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <PageHeader
            title="Skillset"
            subtitle="Technologies, certifications & academic background"
            icon={Layers}
          />
          <SkillsSection />
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Skills;
