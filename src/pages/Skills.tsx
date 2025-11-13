import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import { pageVariants } from "@/utils/animations";
import { Sparkles } from "lucide-react";

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
        title="Skills | Max Ritter | Senior IT Freelancer"
        description="Explore Max Ritter's skills in AWS Cloud, Data Engineering, DevOps, and Artificial Intelligence. A Senior IT Freelancer from Germany."
        pagePath="skills"
      />
      <Header />
      <PageHeader 
        title="Skillset" 
        subtitle="My technical expertise across cloud, AI, data engineering, and software development"
        icon={<Sparkles className="w-8 h-8 text-primary" />}
      />
      <main className="flex-grow">
        <SkillsSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Skills;
