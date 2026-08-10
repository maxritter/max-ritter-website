import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductLogo } from "@/components/ProductsSection";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

/** Compact strip of own products shown on the home page, linking to /projects. */
const ProductsTeaser = (): JSX.Element => {
  return (
    <section className="container mx-auto px-4 pb-10" aria-labelledby="own-projects-heading">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-baseline justify-between gap-4 mb-4 pb-3 border-b border-border/50">
          <h2 id="own-projects-heading" className="text-lg font-bold">
            Things I build myself
          </h2>
          <Link
            to="/projects"
            className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group whitespace-nowrap"
          >
            All projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <ul className="space-y-2">
          {products.map((product, i) => (
            <motion.li
              key={product.slug}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <Link
                to="/projects"
                className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/40 px-4 py-3 transition-all duration-300 hover:border-primary/50 hover:bg-card/70 group"
              >
                <ProductLogo product={product} size={40} />
                <span className="min-w-0">
                  <span className="block font-semibold group-hover:text-primary transition-colors">
                    {product.name}
                  </span>
                  <span className="block text-sm text-muted-foreground">{product.summary}</span>
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductsTeaser;
