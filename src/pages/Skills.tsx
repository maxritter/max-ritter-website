import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";
import SEO from "@/components/SEO";
import BackToHomeButton from "@/components/BackToHomeButton";
import { pageVariants } from "@/utils/animations";

const Skills = () => {
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
        title="Skills | Max Ritter | Senior IT Freelancer"
        description="Explore Max Ritter's skills in AWS Cloud, Data Engineering, DevOps, and Artificial Intelligence. A Senior IT Freelancer from Germany."
        pagePath="skills"
      />
      <Header />
      <BackToHomeButton />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Skillset
            </h1>
          </div>
          <SkillsSection />
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Skills;
