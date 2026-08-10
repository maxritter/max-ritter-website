import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, LucideIcon, Mail, Rss } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface SocialLink {
  href: string;
  label: string;
  external: boolean;
  icon?: LucideIcon;
  /** Wordmark for services without an icon in the set (dev.to). */
  text?: string;
}

const socialLinks: SocialLink[] = [
  { href: "mailto:mail@maxritter.net", label: "Email", external: false, icon: Mail },
  { href: "https://flowcv.com/resume/hcaa0q4wdd", label: "CV", external: true, icon: FileText },
  { href: "https://www.linkedin.com/in/rittermax/", label: "LinkedIn", external: true, icon: Linkedin },
  { href: "https://github.com/maxritter", label: "GitHub", external: true, icon: Github },
  { href: "https://dev.to/maxritter", label: "Dev.to", external: true, text: "DEV" },
  { href: "https://maxritter.bloggi.co/feed", label: "RSS Feed", external: true, icon: Rss },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center relative pt-4">
      <div className="hero-gradient"></div>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="flex flex-col items-center mb-3">
            <motion.div
              variants={scaleIn}
              className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-5 border-4 border-muted hover:border-primary transition-all duration-300 transform hover:scale-105"
            >
              <picture>
                <source srcSet="/profile.webp" type="image/webp" />
                <img
                  src="/profile.png"
                  alt="Max Ritter — Senior IT Freelancer from Germany"
                  width={288}
                  height={288}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </picture>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-center">
              Hi, I'm Max.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl md:text-3xl text-primary font-bold tracking-tight mb-5 text-center">
              AI | Data | Cloud | DevOps
            </motion.p>

            <motion.div variants={fadeUp} className="text-lg leading-relaxed text-center mb-6 max-w-2xl text-foreground/85">
              <p className="mb-3">
                I am a <span className="text-primary font-medium">Senior IT Freelancer</span> from Germany, helping enterprises adopt <span className="text-foreground font-medium">Agentic Engineering, AI-driven architectures, and modern cloud platforms</span>. My approach is both high-level and hands-on — I advise, I architect, and I engineer.
              </p>
              <p>
                As a certified professional with broad expertise across <span className="text-foreground font-medium">Cloud, Data, DevOps and AI</span> — and a deep specialization in agentic systems — I bridge the gap between <span className="text-primary font-medium">strategic vision and technical execution</span>.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 rounded-md transition-all duration-300 hover:bg-primary/10 hover:border-primary transform hover:scale-105"
              >
                <Link to="/work">WORK</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="rounded-md transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/projects">PROJECTS</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 rounded-md transition-all duration-300 hover:bg-primary/10 hover:border-primary transform hover:scale-105"
              >
                <Link to="/skills">SKILLS</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 rounded-md transition-all duration-300 hover:bg-primary/10 hover:border-primary transform hover:scale-105"
              >
                <a href="https://maxritter.bloggi.co/" target="_blank" rel="noopener noreferrer">BLOG</a>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-1 mb-2">
              {socialLinks.map(({ href, label, external, icon: Icon, text }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-300 hover:text-primary hover:bg-primary/10"
                >
                  {Icon ? <Icon size={22} aria-hidden="true" /> : <span className="text-sm font-bold tracking-tight" aria-hidden="true">{text}</span>}
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
