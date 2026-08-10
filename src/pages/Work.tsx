import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import { engagements, hats } from "@/data/work";
import { pageVariants } from "@/utils/animations";

const Work = () => {
  return (
    <motion.div
      className="flex min-h-screen flex-col bg-background"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <SEO
        title={"Work \u2014 Client Engagements & Career | Max Ritter"}
        description={
          "Nine years across five roles: first engineer, team lead, co-founder and CTO, consultant, freelancer. Engagements for Dialpad, Boehringer Ingelheim, Porsche, Hubert Burda Media, Marc O'Polo and Climeworks."
        }
        pagePath="work"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ]}
      />
      <Header />
      <main className="flex-grow">
        <div className="shell pt-12 md:pt-16">
          <PageHeader
            title="Nine years,"
            accent="five hats."
            subtitle={
              "I've worked as first engineer, team lead, co-founder and CTO, consultant, and freelancer. Here is the full history, and what I built at each stop."
            }
          />

          <motion.ul
            className="grid grid-cols-1 border-y border-border sm:grid-cols-2 md:grid-cols-5"
            aria-label="Career roles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {hats.map((hat) => (
              <li
                key={hat.role}
                className="border-b border-border px-0 py-4 last:border-b-0 sm:border-b-0 sm:py-5 md:border-l md:pl-4 md:first:border-l-0 md:first:pl-0"
              >
                <span className="block text-[15px] font-medium tracking-[-0.01em]">{hat.role}</span>
                <span className="mt-1 block text-[12.5px] leading-snug text-faint">{hat.where}</span>
              </li>
            ))}
          </motion.ul>

          <section aria-labelledby="engagements-heading" className="mt-14">
            <h2 id="engagements-heading" className="caps">
              Engagements
            </h2>
            <div className="mt-2">
              {engagements.map((engagement) => (
                <article
                  key={`${engagement.company}-${engagement.period}`}
                  className="grid gap-2 border-b border-border py-7 last:border-b-0 md:grid-cols-[150px_1fr] md:gap-10"
                >
                  <span className="pt-1 font-mono text-xs text-faint">{engagement.period}</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-[18px] font-medium tracking-[-0.015em] md:text-[19px]">
                        {engagement.title}
                      </span>
                      <span className="text-sm text-accent">{engagement.company}</span>
                    </h3>
                    <p className="max-w-[82ch] text-[14.5px] leading-relaxed text-muted-foreground">
                      {engagement.description}
                    </p>
                    <p className="font-mono text-[11.5px] text-faint">
                      {engagement.tech.join(" · ")}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Work;
