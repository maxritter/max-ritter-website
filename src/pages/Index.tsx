import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductsTeaser from "@/components/ProductsTeaser";
import SEO from "@/components/SEO";
import { products } from "@/data/products";

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
            "https://maxritter.bloggi.co/",
            "https://github.com/maxritter",
            "https://www.linkedin.com/in/rittermax/",
            "https://dev.to/maxritter"
          ],
          "workExample": products.map((product) => ({
            "@type": "SoftwareApplication",
            "name": product.name,
            "alternateName": product.tagline,
            "description": product.summary,
            "url": product.website.url,
            "applicationCategory": product.applicationCategory,
            "operatingSystem": product.operatingSystem
          }))
        }}
      />
      <Header />
      <main className="flex-grow flex flex-col justify-center py-0 mt-10">
        <HeroSection />
        <ProductsTeaser />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
