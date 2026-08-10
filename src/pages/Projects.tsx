import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import { products, productSchema } from "@/data/products";
import { pageVariants } from "@/utils/animations";

const itemListSchema = {
  "@type": "ItemList",
  "name": "Projects by Max Ritter",
  "numberOfItems": products.length,
  "itemListElement": products.map((product, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": productSchema(product),
  })),
};

const Projects = () => {
  return (
    <motion.div
      className="flex min-h-screen flex-col bg-background"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <SEO
        title={"Projects \u2014 Pilot Shell, Bahnsparer & DIY-Thermocam | Max Ritter"}
        description={
          "Products and open source by Max Ritter: Pilot Shell, spec-driven development for Claude Code and Codex CLI; Bahnsparer, Deutsche Bahn fare alerts for iOS and Android; DIY-Thermocam, an open-source FLIR Lepton thermal imaging camera."
        }
        pagePath="projects"
        keywords={
          "Pilot Shell, Claude Code, Codex CLI, spec-driven development, agentic engineering, TDD enforcement, AI coding agents, Bahnsparer, Sparpreis, Deutsche Bahn, Bahntickets, Preisalarm, DIY-Thermocam, FLIR Lepton, thermal imaging, open source hardware, Max Ritter"
        }
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
        schemaData={{ "mainEntity": itemListSchema }}
      />
      <Header />
      <main className="flex-grow">
        <div className="shell pt-12 md:pt-16">
          <PageHeader
            title="Things I build"
            accent="myself."
            subtitle={
              "Products and open source I run alongside client work. Pilot Shell is the engineering framework I use on every engagement."
            }
          />

          <div className="border-t border-border">
            {products.map((product) => (
              <section
                key={product.slug}
                id={product.slug}
                aria-labelledby={`${product.slug}-heading`}
                className="grid scroll-mt-8 gap-8 border-b border-border py-11 lg:grid-cols-[1fr_320px] lg:gap-14"
              >
                <div>
                  <h2
                    id={`${product.slug}-heading`}
                    className="text-[30px] font-medium tracking-[-0.03em] md:text-[36px]"
                  >
                    {product.name}
                  </h2>
                  <p className="mt-2 text-base text-muted-foreground">{product.tagline}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-xs text-faint">
                    {product.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                  <p className="mt-5 max-w-[72ch] text-[15px] leading-[1.7] text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-6 text-sm">
                    <a
                      href={product.website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-faint pb-0.5 text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {product.website.label}
                    </a>
                    {product.repo && (
                      <a
                        href={product.repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-faint pb-0.5 text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        {product.repo.label}
                      </a>
                    )}
                  </div>
                </div>
                <aside className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <h3 className="caps">In the box</h3>
                  <ul className="mt-3.5 flex flex-col gap-3">
                    {product.inBox.map((item) => (
                      <li
                        key={item}
                        className="dash-item text-[13.5px] leading-normal text-muted-foreground before:bg-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </aside>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Projects;
