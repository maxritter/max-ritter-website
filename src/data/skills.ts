export interface Discipline {
  title: string;
  items: string[];
}

export const disciplines: Discipline[] = [
  {
    title: "Agentic Engineering",
    items: [
      "Agentic workflows & loops",
      "Claude Code & MCP",
      "Voice & text agents",
      "RAG architecture",
      "Vector search & embeddings",
      "Context engineering",
      "Evaluation & testing",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS multi-account architecture",
      "Event-driven & serverless",
      "Kubernetes & containers",
      "Infrastructure as code",
      "CI/CD pipelines",
      "Security & governance",
      "Observability",
    ],
  },
  {
    title: "Data Engineering",
    items: [
      "Pipelines & ETL",
      "Lakehouse: Iceberg, Delta",
      "Spark & Databricks",
      "SQL & NoSQL stores",
      "Streaming & event data",
      "MLOps & model serving",
      "Analytics foundations",
    ],
  },
];

export const languages: string[] = [
  "TypeScript",
  "Python",
  "SQL",
  "Go",
  "C / C++",
  "PySpark",
  "Bash",
];

export const certifications: string[] = [
  "Claude Code Partner Badge \u2014 Anthropic",
  "AWS Certified DevOps Engineer \u2014 Professional",
  "AWS Certified Solutions Architect \u2014 Professional",
  "AWS Certified Data Analytics \u2014 Specialty",
  "AWS Certified Solutions Architect \u2014 Associate",
  "AWS Certified Developer \u2014 Associate",
  "AWS Certified SysOps Administrator \u2014 Associate",
  "AWS re/Start Accredited Instructor",
  "CNCF Kubernetes & Cloud Native Associate",
  "HashiCorp Certified Terraform Associate",
  "Microsoft Certified Azure Fundamentals",
  "Microsoft Certified Azure Data Fundamentals",
];

export interface Degree {
  period: string;
  title: string;
  focus: string;
  thesis: string;
  /** Optional plain-text note after the thesis. */
  thesisNote?: string;
}

export const degrees: Degree[] = [
  {
    period: "2015 \u2014 17",
    title: "M.Sc. Computer Engineering \u2014 HS Pforzheim, grade 1.3",
    focus:
      "Design and implementation of complex embedded systems; machine learning for embedded applications.",
    thesis: "Investigation of neural networks \u2014 design, training and usage",
  },
  {
    period: "2011 \u2014 15",
    title: "B.Sc. Applied Informatics \u2014 HS Ravensburg-Weingarten, grade 1.5",
    focus: "Automation engineering and information networks.",
    thesis: "Development of a low-cost thermal imaging camera",
    thesisNote: "the origin of DIY-Thermocam",
  },
];
