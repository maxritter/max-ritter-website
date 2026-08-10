import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsSection from "@/components/ProductsSection";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import { pageVariants } from "@/utils/animations";
import { Rocket } from "lucide-react";
import { products } from "@/data/products";

const SITE_URL = "https://www.maxritter.net";

const author = {
  "@type": "Person",
  "name": "Max Ritter",
  "url": `${SITE_URL}/`,
};

const itemListSchema = {
  "@type": "ItemList",
  "name": "Own projects by Max Ritter",
  "itemListOrder": "https://schema.org/ItemListOrderDescending",
  "numberOfItems": products.length,
  "itemListElement": products.map((product, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "SoftwareApplication",
      "name": product.name,
      "alternateName": product.tagline,
      "description": product.description,
      "url": product.website.url,
      "applicationCategory": product.applicationCategory,
      "operatingSystem": product.operatingSystem,
      "author": author,
      "creator": author,
      ...(product.repo ? { "codeRepository": product.repo.url } : {}),
    },
  })),
};

const Projects = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col bg-background"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <SEO
        title="Projects — Pilot Shell, Bahnsparer & DIY-Thermocam | Max Ritter"
        description="Products and open source built by Max Ritter: Pilot Shell, spec-driven development for Claude Code and Codex CLI; Bahnsparer, a Deutsche Bahn fare alert app for iOS and Android; and DIY-Thermocam, an open-source FLIR Lepton thermal imaging camera."
        pagePath="projects"
        keywords="Pilot Shell, Claude Code, Codex CLI, spec-driven development, agentic engineering, TDD enforcement, AI coding agents, Bahnsparer, Sparpreis, Deutsche Bahn, Bahntickets, Preisalarm, DIY-Thermocam, FLIR Lepton, thermal imaging, open source hardware, Max Ritter, IT Freelancer, Germany"
        schemaData={{ "mainEntity": itemListSchema }}
      />
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <PageHeader
            title="Own Projects"
            subtitle="Products and open source I build outside client work"
            icon={Rocket}
          />
          <ProductsSection />
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Projects;
