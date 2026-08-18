import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { products, productSchema, type ProductStatus } from "@/data/products";
import { clientTenures, engagementCount, firstEngagementYear } from "@/data/work";
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
  live: "bg-primary text-primary-foreground",
  beta: "bg-accent/15 text-accent",
  open: "bg-secondary text-faint",
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
      className="flex min-h-screen flex-col bg-background"
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
          <motion.h1
            variants={fadeUp}
            className="mt-16 max-w-[19ch] text-[clamp(2.5rem,7.5vw,4.75rem)] font-medium leading-[1.03] tracking-[-0.034em] md:mt-24"
          >
            I build the data, cloud and AI systems companies{" "}
            <span className="text-primary">actually run on.</span>
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
              className="inline-flex h-11 items-center gap-2 rounded-[3px] bg-primary px-[18px] text-[15px] font-medium text-primary-foreground transition-opacity hover:opacity-90 md:h-10"
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

          <motion.div
            variants={fadeUp}
            className="mb-16 mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1.5 rounded-[3px] border border-border px-[18px] py-4 font-mono text-[13px] text-muted-foreground md:mb-20"
          >
            <span className="text-[10.5px] font-medium uppercase tracking-[0.15em] text-primary">
              Now
            </span>
            <span>
              <strong className="font-medium text-foreground">AI Technical Advisor, Dialpad</strong>{" "}
              {"\u2014"} agentic enablement for telephony engineering
            </span>
            <span className="text-faint" aria-hidden="true">
              /
            </span>
            <span>
              building{" "}
              <Link
                to="/projects#pilot-shell"
                className="font-medium text-foreground transition-colors hover:text-primary"
              >
                Pilot Shell
              </Link>{" "}
              in the open
            </span>
          </motion.div>

          <motion.section
            variants={fadeUp}
            aria-labelledby="clients-heading"
            className="border-y border-border py-[22px]"
          >
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h2 id="clients-heading" className="caps">
                Selected clients
              </h2>
              <Link
                to="/work"
                className="group inline-flex items-center gap-1.5 font-mono text-[11px] text-faint transition-colors hover:text-foreground"
              >
                {engagementCount} engagements since {firstEngagementYear}
                <ArrowUpRight
                  className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
            <ul className="flex flex-wrap gap-x-8 gap-y-3.5 md:gap-x-10">
              {clients.map((client) => {
                const tenure = clientTenures[client];
                return (
                  <li key={client} className="flex flex-col gap-[3px]">
                    <span className="text-[19px] font-medium leading-tight tracking-[-0.015em]">
                      {client}
                    </span>
                    {tenure && (
                      <span className="font-mono text-[11px] text-faint">
                        {tenure.period}
                        {tenure.count > 1 && ` \u00b7 \u00d7${tenure.count}`}
                      </span>
                    )}
                  </li>
                );
              })}
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
