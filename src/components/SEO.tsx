import { Helmet } from "react-helmet-async";

interface Crumb {
  name: string;
  path: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  pagePath?: string;
  type?: "Person" | "WebPage" | "Article";
  schemaData?: Record<string, unknown>;
  keywords?: string;
  breadcrumbs?: Crumb[];
  noindex?: boolean;
}

const SITE_URL = "https://www.maxritter.net";
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.jpg`;
const buildPageUrl = (pagePath: string): string =>
  pagePath ? `${SITE_URL}/${pagePath}` : `${SITE_URL}/`;
const DEFAULT_KEYWORDS =
  "Max Ritter, IT Freelancer, Agentic Engineering, AI Engineer, Data Engineering, Cloud Architecture, AWS, DevOps, Voice Agents, LLM Systems, RAG, Claude Code, Codex CLI, MCP, Pilot Shell, Bahnsparer, DIY-Thermocam, Infrastructure as Code, Terraform, AWS CDK, Freelancer Germany";

const SEO = ({
  title = "Max Ritter \u2014 Data, Cloud & AI Systems Engineer | IT Freelancer",
  description = "Senior IT freelancer in Germany. Agentic AI, data, cloud and DevOps engineering \u2014 high-level and hands-on, from architecture to shipped code. Creator of Pilot Shell, Bahnsparer and DIY-Thermocam.",
  canonical = SITE_URL,
  pagePath = "",
  type = "WebPage",
  schemaData = {},
  keywords = DEFAULT_KEYWORDS,
  breadcrumbs,
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
    "jobTitle": "IT Freelancer \u2014 AI, Data, Cloud & DevOps",
    "knowsAbout": [
      "Agentic Engineering",
      "AI Agent Systems & LLMs",
      "Voice & Text Agents",
      "Context Engineering",
      "RAG Architecture",
      "Claude Code",
      "Cloud Architecture (AWS)",
      "Data Engineering",
      "DevOps & Platform Engineering",
      "Infrastructure as Code",
      "Embedded Systems & IoT",
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

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": buildPageUrl(crumb.path.replace(/^\//, "")),
    })),
  } : null;

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
      <meta property="og:image:alt" content={"Max Ritter \u2014 Data, Cloud & AI Systems Engineer"} />
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
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
