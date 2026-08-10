import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  /** Leading, ink-colored part of the headline. */
  title: string;
  /** Trailing, amber part of the headline. */
  accent?: string;
  subtitle?: string;
}

const PageHeader = ({ title, accent, subtitle }: PageHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <Link
        to="/"
        className="group mb-2 inline-flex items-center gap-2 rounded-md py-2 pr-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        <span>Back to Home</span>
      </Link>
      <h1 className="max-w-[24ch] text-[clamp(2.2rem,6vw,3.375rem)] font-medium leading-[1.05] tracking-[-0.032em]">
        {title}
        {accent && (
          <>
            {" "}
            <span className="text-primary">{accent}</span>
          </>
        )}
      </h1>
      {subtitle && (
        <p className="mb-14 mt-5 max-w-[70ch] text-[16.5px] leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default PageHeader;
