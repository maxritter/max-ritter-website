import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail, Rss } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
  const navigate = useNavigate();

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
              <img
                src="/profile.png"
                alt="Max Ritter Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-2xl md:text-4xl font-bold mb-4 text-center">
              Hi, I'm Max.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl md:text-3xl text-primary font-bold mb-5 text-center">
              Advisor | Architect | Engineer
            </motion.p>

            <motion.div variants={fadeUp} className="text-lg text-center mb-5 max-w-2xl">
              <p className="mb-3">
                I am a <span className="text-primary">Senior IT Freelancer</span> from Germany, helping enterprises adopt <span className="text-primary">Agentic Engineering, AI-driven architectures, and modern cloud platforms</span>. My approach is both <span className="text-primary">high-level and hands-on</span> — I advise, I architect, and I engineer.
              </p>
              <p>
                As a <span className="text-primary">certified professional</span> with broad expertise across <span className="text-primary">Cloud, Data, DevOps and AI</span> with a deep specialization in agentic systems — I bridge the gap between <span className="text-primary">strategic vision and technical execution</span>.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-8">
              <Button
                variant="outline"
                size="lg"
                className="border-2 rounded-md transition-all duration-300 hover:bg-primary/10 hover:border-primary transform hover:scale-105"
                onClick={() => navigate('/work')}
              >
                WORK
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 rounded-md transition-all duration-300 hover:bg-primary/10 hover:border-primary transform hover:scale-105"
                onClick={() => navigate('/skills')}
              >
                SKILLS
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 rounded-md transition-all duration-300 hover:bg-primary/10 hover:border-primary transform hover:scale-105"
                onClick={() => window.open("https://maxritter.bloggi.co/", "_blank")}
              >
                BLOG
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex justify-center space-x-6 mb-2">
              <a href="mailto:mail@maxritter.net" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110" aria-label="Email">
                <Mail size={24} />
              </a>
              <a href="https://flowcv.com/resume/hcaa0q4wdd" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="CV">
                <FileText size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rittermax/" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/maxritter" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://dev.to/maxritter" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="Dev.to">
                <span className="font-bold">DEV</span>
              </a>
              <a href="https://maxritter.bloggi.co/feed" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="RSS Feed">
                <Rss size={24} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
