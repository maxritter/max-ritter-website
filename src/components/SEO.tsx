import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  pagePath?: string;
  type?: "Person" | "WebPage" | "Article";
  schemaData?: Record<string, unknown>;
}

const SEO = ({
  title = "Max Ritter | IT Freelancer - Advisor | Architect | Engineer | Agentic Engineering & Cloud",
  description = "Senior IT Freelancer from Germany - advising, architecting, and engineering AI-driven solutions. Specializing in Agentic Engineering, AWS Cloud Architecture, and enterprise AI enablement.",
  canonical = "https://maxritter.net",
  pagePath = "",
  type = "WebPage",
  schemaData = {},
}: SEOProps) => {
  const pageUrl = pagePath ? `${canonical}/${pagePath}` : canonical;
  
  const defaultSchemaData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": title,
    "description": description,
    "url": pageUrl,
  };
  
  const personSchema = type === "Person" ? {
    "image": "https://maxritter.net/profile.png",
    "jobTitle": "IT Freelancer - Advisor | Architect | Engineer",
    "knowsAbout": [
      "AI Technical Advisory",
      "Agentic Engineering",
      "Solution Architecture",
      "AWS Cloud Architecture",
      "AI Agent Systems & LLMs",
      "Context Engineering",
      "RAG Systems",
      "Engineering Enablement",
      "Data Engineering",
      "Infrastructure as Code"
    ],
    "hasCredential": [
      "AWS Certified DevOps Engineer Professional",
      "AWS Certified Solutions Architect Professional",
      "AWS Certified Data Analytics Specialty"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Germany"
    }
  } : {};
  
  const fullSchemaData = {
    ...defaultSchemaData,
    ...personSchema,
    ...schemaData
  };
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />
      
      {/* Keywords */}
      <meta name="keywords" content="AI Technical Advisor, Solution Architect, Agentic Engineering, AWS Cloud Architecture, AI Enablement, Engineering Advisory, LLM Engineering, RAG Architecture, AI Agents, Context Engineering, Claude Code, MCP, Infrastructure as Code, Terraform, AWS CDK, Data Engineering, Freelancer, Germany" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://maxritter.net/logo.jpg" />
      <meta property="og:site_name" content="Max Ritter" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://maxritter.net/logo.jpg" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(fullSchemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
