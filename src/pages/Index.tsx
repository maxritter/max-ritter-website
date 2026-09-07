import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Terminal, TrainFront } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { products, productSchema, type ProductStatus } from "@/data/products";
import { pageVariants } from "@/utils/animations";

const CONTACT_URL = "mailto:mail@maxritter.net";

/**
 * The month you are next free for new work, e.g. "March 2026".
 * Leave null to hide the availability line entirely.
 */
const AVAILABLE_FROM: string | null = null;

const clients = [
  "Dialpad",
  "Boehringer Ingelheim",
  "Porsche",
  "Hubert Burda Media",
  "Marc O'Polo",
  "Climeworks",
  "OEW Breitband",
];

const tagClasses: Record<ProductStatus, string> = {
  live: "border-primary bg-primary text-primary-foreground",
  beta: "border-accent/60 bg-accent/10 text-primary",
  open: "border-border text-muted-foreground",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Index = () => {
  return (
    <motion.div
      className="flex min-h-screen flex-col"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <SEO
        type="Person"
        title={"Max Ritter \u2014 Data, Cloud & AI Systems Engineer | IT Freelancer"}
        description={"Senior IT freelancer in Germany \u2014 agentic AI, data, cloud and DevOps engineering for startups, Mittelstand and global corporates. High-level and hands-on: architecture and shipped code. Creator of Pilot Shell, Bahnsparer and DIY-Thermocam."}
        schemaData={{
          "sameAs": [
            "https://maxritter.bloggi.co/",
            "https://github.com/maxritter",
            "https://www.linkedin.com/in/rittermax/",
            "https://dev.to/maxritter",
          ],
          "workExample": products.map(productSchema),
        }}
      />
      <Header />
      <main className="flex-grow">
        <motion.div className="shell" variants={container} initial="hidden" animate="show">
          <div className="mt-16 items-start md:mt-[88px] md:grid md:grid-cols-[1fr_176px] md:gap-x-[72px]">
            <div>
              <motion.h1
                variants={fadeUp}
                className="max-w-[19ch] text-[clamp(2.5rem,5.5vw,4.25rem)] font-medium leading-[1.03] tracking-[-0.034em]"
              >
                I build the data, cloud and AI systems companies{" "}
                <span className="ink-blue">actually run on.</span>
              </motion.h1>

              <motion.div variants={fadeUp} className="mt-7 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
                <p>
                  Senior IT freelancer in Germany {"\u2014"}{" "}
                  <strong className="font-medium text-foreground">
                    agentic AI, data, cloud and DevOps engineering
                  </strong>{" "}
                  for startups, Mittelstand and global corporates.
                </p>
                <p className="mt-3">
                  High-level and hands-on:{" "}
                  <strong className="font-medium text-foreground">
                    I design the architecture and I ship the code.
                  </strong>
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3.5">
                <a
                  href={CONTACT_URL}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-[22px] text-[15px] font-medium text-primary-foreground transition-colors hover:bg-primary-glow md:h-10"
                >
                  Get in touch
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                {AVAILABLE_FROM && (
                  <span className="inline-flex items-center gap-2.5 font-mono text-[12.5px] text-muted-foreground">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>
                      Available for new engagements from{" "}
                      <span className="text-foreground">{AVAILABLE_FROM}</span>
                    </span>
                  </span>
                )}
              </motion.div>
            </div>

            <motion.figure variants={fadeUp} className="mt-10 flex flex-col gap-2.5 md:mt-1.5">
              <picture>
                <source srcSet="/profile.webp" type="image/webp" />
                <img
                  src="/profile.png"
                  alt="Max Ritter"
                  width={176}
                  height={176}
                  decoding="async"
                  className="block h-44 w-44 rounded-xl border border-border object-cover"
                />
              </picture>
              <figcaption className="flex flex-col gap-[2px] font-mono text-[11px] text-faint">
                <span>Max Ritter</span>
                <span>Freelance since 2021</span>
              </figcaption>
            </motion.figure>
          </div>

          <motion.section
            variants={fadeUp}
            aria-labelledby="now-heading"
            className="mb-16 mt-10 flex flex-wrap items-center gap-x-3 gap-y-2.5 md:mb-20"
          >
            <h2 id="now-heading" className="caps mr-1 text-primary">
              Now
            </h2>
            <Link to="/work" className="chip">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <strong className="font-medium text-foreground">AI Technical Advisor</strong>, Dialpad
              </span>
            </Link>
            <Link to="/projects#pilot-shell" className="chip">
              <Terminal className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                Building <strong className="font-medium text-foreground">Pilot Shell</strong> in the open
              </span>
            </Link>
            <Link to="/projects#bahnsparer" className="chip">
              <TrainFront className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                Shipping <strong className="font-medium text-foreground">Bahnsparer</strong> for mobile and
                desktop
              </span>
            </Link>
          </motion.section>

          <motion.section
            variants={fadeUp}
            aria-labelledby="clients-heading"
            className="horizon border-b border-border py-[22px]"
          >
            <h2 id="clients-heading" className="caps mb-4">
              Selected clients
            </h2>
            <ul className="flex flex-wrap gap-x-7 gap-y-2 md:justify-between md:gap-x-4">
              {clients.map((client) => (
                <li
                  key={client}
                  className="whitespace-nowrap text-[clamp(13px,1.55vw,17px)] font-medium leading-[1.25] tracking-[-0.015em]"
                >
                  {client}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section variants={fadeUp} aria-labelledby="projects-heading" className="pt-12">
            <h2 id="projects-heading" className="caps mb-2.5">
              Things I build myself
            </h2>
            <div>
              {products.map((product) => (
                <Link
                  key={product.slug}
                  to={`/projects#${product.slug}`}
                  className="group grid gap-3 border-b border-border py-6 transition-[padding-left] duration-300 ease-out hover:pl-3 md:grid-cols-[1fr_auto] md:items-center md:gap-10"
                >
                  <span className="flex min-w-0 flex-col gap-2">
                    <span className="text-[26px] font-medium leading-[1.1] tracking-[-0.03em] transition-colors group-hover:text-primary md:text-[29px]">
                      {product.name}
                    </span>
                    <span className="max-w-[80ch] text-[14.5px] leading-relaxed text-muted-foreground">
                      {product.summary}
                    </span>
                  </span>
                  <span className="flex items-center gap-4 whitespace-nowrap">
                    <span className={`tag ${tagClasses[product.status]}`}>{product.statusLabel}</span>
                    <ArrowUpRight
                      className="h-[17px] w-[17px] text-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
