import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

const PageHeader = ({ title, subtitle, icon }: PageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="relative border-b border-border/50 bg-gradient-to-b from-muted/10 to-transparent"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            {icon && (
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-4 rounded-2xl">
                {icon}
              </div>
            )}
            <div>
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                {title}
              </h1>
              {subtitle && (
                <p className="text-muted-foreground mt-2 text-sm md:text-base">{subtitle}</p>
              )}
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button 
              onClick={() => navigate(-1)} 
              variant="outline"
              size="lg"
              className="group border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back
            </Button>
            <Button 
              onClick={() => navigate('/')} 
              variant="default"
              size="lg"
              className="group bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300"
            >
              <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Home
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PageHeader;
