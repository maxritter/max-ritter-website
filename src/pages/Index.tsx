import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SEO from "@/components/SEO";

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

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col bg-background"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <SEO 
        type="Person"
        schemaData={{
          "sameAs": [
            "https://maxritter.bloggi.co/"
          ]
        }}
      />
      <Header />
      <main className="flex-grow flex items-center justify-center py-0 mt-10">
        <HeroSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
