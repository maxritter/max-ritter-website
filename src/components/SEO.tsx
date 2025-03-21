import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  pagePath?: string;
  type?: "Person" | "WebPage" | "Article";
  schemaData?: Record<string, any>;
}

const SEO = ({
  title = "Max Ritter | Senior IT Freelancer | AWS Cloud, Data Engineering & AI",
  description = "Senior IT Freelancer from Germany, supporting clients in different industries in the areas of AWS Cloud, Data Engineering, Artificial intelligence and DevOps.",
  canonical = "https://maxritter.net",
  pagePath = "",
  type = "WebPage",
  schemaData = {},
}: SEOProps) => {
  const pageUrl = pagePath ? `${canonical}/${pagePath}` : canonical;
  
  // Default schema.org data
  const defaultSchemaData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": title,
    "description": description,
    "url": pageUrl,
  };
  
  // Person schema for homepage
  const personSchema = type === "Person" ? {
    "image": "https://maxritter.net/profile.png",
    "jobTitle": "Senior IT Freelancer",
    "knowsAbout": ["AWS Cloud", "Data Engineering", "Artificial Intelligence", "DevOps"],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Germany"
    }
  } : {};
  
  // Combine default schema with custom schema and type-specific schema
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