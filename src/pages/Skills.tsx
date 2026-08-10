import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHeader from "@/components/PageHeader";
import { certifications, degrees, disciplines, languages } from "@/data/skills";
import { pageVariants } from "@/utils/animations";

const Skills = () => {
  return (
    <motion.div
      className="flex min-h-screen flex-col bg-background"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <SEO
        title={"Skills \u2014 AI, Data, Cloud & DevOps Engineering | Max Ritter"}
        description={
          "Agentic AI engineering, data engineering, cloud and DevOps. AWS Professional certifications, M.Sc. Computer Engineering. Deep where it counts, wide where it helps."
        }
        pagePath="skills"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Skills", path: "/skills" },
        ]}
      />
      <Header />
      <main className="flex-grow">
        <div className="shell pt-12 md:pt-16">
          <PageHeader
            title="Deep where it counts,"
            accent="wide where it helps."
            subtitle={
              "Current depth is agentic systems; underneath sits a decade of cloud, data, DevOps and embedded engineering. Certified on the infrastructure the agents run on."
            }
          />

          <section aria-labelledby="disciplines-heading">
            <h2 id="disciplines-heading" className="caps">
              Disciplines
            </h2>
            <div className="mb-14 mt-6 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
              {disciplines.map((discipline) => (
                <div key={discipline.title}>
                  <h3 className="mb-3.5 text-base font-semibold tracking-[-0.01em]">
                    {discipline.title}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {discipline.items.map((item) => (
                      <li
                        key={item}
                        className="dash-item text-sm text-muted-foreground before:bg-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="languages-heading" className="border-y border-border py-5">
            <h2 id="languages-heading" className="caps mb-3">
              Languages
            </h2>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14.5px] text-muted-foreground">
              {languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="certifications-heading" className="pt-11">
            <h2 id="certifications-heading" className="caps">
              Certifications
            </h2>
            <ul className="mb-14 mt-4 gap-x-14 md:columns-2">
              {certifications.map((certification) => (
                <li
                  key={certification}
                  className="break-inside-avoid border-b border-border py-2.5 text-sm text-muted-foreground"
                >
                  {certification}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="academic-heading">
            <h2 id="academic-heading" className="caps">
              Academic background
            </h2>
            <div className="mt-2">
              {degrees.map((degree) => (
                <article
                  key={degree.title}
                  className="grid gap-2 border-b border-border py-7 last:border-b-0 md:grid-cols-[150px_1fr] md:gap-10"
                >
                  <span className="pt-1 font-mono text-xs text-faint">{degree.period}</span>
                  <div>
                    <h3 className="text-[17px] font-medium tracking-[-0.01em] md:text-lg">
                      {degree.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {degree.focus}
                    </p>
                    <p className="mt-2 text-[13px] text-faint">
                      Thesis: <em className="text-muted-foreground">{degree.thesis}</em>
                      {degree.thesisNote && (
                        <>
                          {" \u2014 "}
                          <Link
                            to="/projects#diy-thermocam"
                            className="text-muted-foreground underline decoration-faint underline-offset-2 transition-colors hover:text-primary"
                          >
                            {degree.thesisNote}
                          </Link>
                        </>
                      )}
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

export default Skills;
