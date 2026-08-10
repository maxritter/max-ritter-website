import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Sparkles, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { products, type Product } from "@/data/products";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

interface ProductLogoProps {
  product: Product;
  size: number;
}

/** Square brand tile for a product, served as WebP with a PNG fallback. */
export const ProductLogo = ({ product, size }: ProductLogoProps): JSX.Element => (
  <picture>
    <source srcSet={`/projects/${product.slug}.webp`} type="image/webp" />
    <img
      src={`/projects/${product.slug}.png`}
      alt={`${product.name} logo`}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      style={{ width: size, height: size }}
      className={`shrink-0 rounded-2xl object-contain ${
        product.logoOnLight ? "bg-white ring-1 ring-border/60" : "ring-1 ring-primary/20"
      }`}
    />
  </picture>
);

const ProductsSection = (): JSX.Element => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <Card className="card-hover gradient-card border-border/50 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col md:flex-row relative">
                  <div className="p-6 md:w-32 flex justify-center items-start md:border-r border-border/30">
                    <div className="transition-transform duration-500 group-hover:scale-110">
                      <ProductLogo product={product} size={80} />
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-3">
                        <div>
                          <CardTitle className="text-2xl font-bold tracking-tight">{product.name}</CardTitle>
                          <p className="text-primary mt-1">{product.tagline}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-lg whitespace-nowrap self-start">
                          <Sparkles className="w-4 h-4 text-primary" />
                          <span>{product.status}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-lg">
                          <Tag className="w-4 h-4 text-primary" />
                          <span className="font-medium">{product.category}</span>
                        </div>
                        {product.facts.map((fact) => (
                          <div key={fact} className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-lg">
                            <span className="font-medium">{fact}</span>
                          </div>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="mb-5 text-foreground/90 leading-relaxed">{product.description}</p>
                      <div className="bg-muted/20 rounded-lg p-4 mb-5">
                        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-primary" />
                          Highlights
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {product.highlights.map((highlight) => (
                            <Badge key={highlight} variant="outline" className="skill-badge text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button
                          asChild
                          variant="outline"
                          className="border-2 rounded-md transition-all duration-300 hover:bg-primary/10 hover:border-primary"
                        >
                          <a href={product.website.url} target="_blank" rel="noopener noreferrer">
                            {product.website.label}
                            <ArrowUpRight className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                        {product.repo && (
                          <Button
                            asChild
                            variant="outline"
                            className="border-2 rounded-md transition-all duration-300 hover:bg-primary/10 hover:border-primary"
                          >
                            <a href={product.repo.url} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              {product.repo.label}
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
