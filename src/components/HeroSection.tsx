
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail, Rss } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="hero-gradient"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-muted">
              <img 
                src="/lovable-uploads/3de991a8-d081-4070-884f-69750fa99025.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
              Hi, I'm Max.
            </h1>
            <p className="text-xl md:text-3xl text-primary font-bold mb-6 text-center">
              I create Software.
            </p>
            
            <div className="text-lg text-center mb-6 max-w-2xl">
              <p className="mb-4">
                I am a <span className="text-primary">certified Senior IT Freelancer</span> from Germany, supporting my clients remotely in different industries and roles. My focus areas are <span className="text-primary">AWS Cloud, Data Engineering, DevOps Development and Artificial Intelligence</span>.
              </p>
              <p>
                My working modes are <span className="text-primary">high-level and hands-on</span>, combined with an agile mindset to deliver <span className="text-primary">high-quality, state-of-the-art solutions</span>.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="outline" size="lg" className="border-2 rounded-md transition-all duration-300 hover:bg-primary/10 hover:border-primary" onClick={() => window.open("https://maxritter.bloggi.co/", "_blank")}>
                BLOG
              </Button>
              <Button variant="outline" size="lg" className="border-2 rounded-md transition-all duration-300 hover:bg-primary/10 hover:border-primary" onClick={() => navigate('/work')}>
                WORK
              </Button>
              <Button variant="outline" size="lg" className="border-2 rounded-md transition-all duration-300 hover:bg-primary/10 hover:border-primary" onClick={() => navigate('/skills')}>
                SKILLS
              </Button>
            </div>
            
            <div className="flex justify-center space-x-6 mb-4">
              <a href="mailto:mail@maxritter.net" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110" aria-label="Email">
                <Mail size={28} />
              </a>
              <a href="https://flowcv.com/resume/hcaa0q4wdd" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="CV">
                <FileText size={28} />
              </a>
              <a href="https://www.linkedin.com/in/rittermax/" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={28} />
              </a>
              <a href="https://github.com/maxritter" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={28} />
              </a>
              <a href="https://dev.to/maxritter" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="Dev.to">
                <span className="font-bold">DEV</span>
              </a>
              <a href="https://maxritter.bloggi.co/feed" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="RSS Feed">
                <Rss size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
