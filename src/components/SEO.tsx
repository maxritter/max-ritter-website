import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  pagePath?: string;
  type?: "Person" | "WebPage" | "Article";
  schemaData?: Record<string, unknown>;
  keywords?: string;
  noindex?: boolean;
}

const SITE_URL = "https://www.maxritter.net";
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.jpg`;
const buildPageUrl = (pagePath: string): string =>
  pagePath ? `${SITE_URL}/${pagePath}` : `${SITE_URL}/`;
const DEFAULT_KEYWORDS =
  "Max Ritter, IT Freelancer, AI Technical Advisor, Solution Architect, Agentic Engineering, AWS Cloud Architecture, AI Enablement, Engineering Advisory, LLM Engineering, RAG Architecture, AI Agents, Context Engineering, Claude Code, Codex CLI, MCP, Pilot Shell, Bahnsparer, DIY-Thermocam, Open Source, Infrastructure as Code, Terraform, AWS CDK, Data Engineering, Freelancer, Germany";

const SEO = ({
  title = "Max Ritter — IT Freelancer | Agentic Engineering & Cloud",
  description = "Senior IT Freelancer from Germany. Agentic Engineering, AWS Cloud Architecture, and enterprise AI enablement. Creator of Pilot Shell, Bahnsparer and DIY-Thermocam.",
  canonical = SITE_URL,
  pagePath = "",
  type = "WebPage",
  schemaData = {},
  keywords = DEFAULT_KEYWORDS,
  noindex = false,
}: SEOProps) => {
  const pageUrl =
    canonical === SITE_URL
      ? buildPageUrl(pagePath)
      : pagePath
        ? `${canonical}/${pagePath}`
        : canonical;

  const defaultSchemaData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": title,
    "description": description,
    "url": pageUrl,
  };

  const personSchema = type === "Person" ? {
    "image": `${SITE_URL}/profile.png`,
    "jobTitle": "IT Freelancer - AI | Data | Cloud | DevOps",
    "knowsAbout": [
      "AI Technical Advisory",
      "Agentic Engineering",
      "Solution Architecture",
      "AWS Cloud Architecture",
      "AI Agent Systems & LLMs",
      "Context Engineering",
      "RAG Systems",
      "Claude Code",
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
    ...schemaData,
  };

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
      <meta name="author" content="Max Ritter" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="574" />
      <meta property="og:image:alt" content="Max Ritter — IT Freelancer & Agentic Engineering" />
      <meta property="og:site_name" content="Max Ritter" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(fullSchemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
