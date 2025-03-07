
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail, Rss } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="hero-gradient"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-8 border-4 border-muted">
              <img 
                src="/lovable-uploads/6d10ee04-d3a0-4ed6-ba40-8790eb4aa3c4.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Hi, I'm Max.
            </h1>
            <p className="text-3xl md:text-5xl text-primary font-bold mb-8 text-center">
              I create Software.
            </p>
            
            <div className="text-xl text-center mb-8 max-w-2xl">
              <p className="mb-4">
                I am a <span className="text-primary">certified Senior IT Freelancer</span> from Germany, supporting my clients remotely in different industries and roles. My focus areas are <span className="text-primary">AWS Cloud, Data Engineering, DevOps Development and Artificial Intelligence</span>.
              </p>
              <p>
                My working modes are <span className="text-primary">high-level and hands-on</span>, combined with an agile mindset to deliver <span className="text-primary">high-quality, state-of-the-art solutions</span>.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button variant="outline" size="lg" className="border-2 rounded-md">
                BLOG
              </Button>
              <Button variant="outline" size="lg" className="border-2 rounded-md">
                WORK
              </Button>
              <Button variant="outline" size="lg" className="border-2 rounded-md">
                SKILLS
              </Button>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FileText size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={28} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="font-bold">DEV</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
