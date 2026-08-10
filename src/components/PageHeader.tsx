import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
}

const PageHeader = ({ title, subtitle, icon: Icon }: PageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mb-10"
    >
      <span className="page-glow" aria-hidden="true" />
      <button
        onClick={() => navigate("/")}
        className="group flex items-center gap-2 rounded-md py-2 pr-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Home</span>
      </button>
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/15 p-3 rounded-2xl shrink-0">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">{title}</h1>
          {subtitle && (
            <p className="text-muted-foreground mt-1.5">{subtitle}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PageHeader;
