export interface Hat {
  role: string;
  where: string;
}

/** The five ways of showing up, in career order. */
export const hats: Hat[] = [
  { role: "First engineer", where: "AI startup, Munich" },
  { role: "Team lead", where: "IoT scale-up" },
  { role: "Co-founder & CTO", where: "Own startup, Munich" },
  { role: "Consultant", where: "Enterprise cloud & data" },
  { role: "Freelancer", where: "Independent since 2021" },
];

export interface Engagement {
  period: string;
  title: string;
  company: string;
  description: string;
  tech: string[];
}

export const engagements: Engagement[] = [
  {
    period: "2026 \u2014 now",
    title: "AI Technical Advisor",
    company: "Dialpad",
    description:
      "Advising Dialpad's Telephony Engineering division on agentic-first software engineering: designing and delivering an enablement program for multiple development teams, building reusable workflows including playbooks and agent scripts for plan-implement-test-review loops, and coaching hands-on through workshops and pair programming on agentic coding tools and context management for large-scale codebases.",
    tech: ["Claude Code", "MCP", "RAG", "CI/CD agent loops"],
  },
  {
    period: "2025 \u2014 26",
    title: "Senior AI, Data & Cloud Engineer",
    company: "OEW Breitband",
    description:
      "Architected the data integration and intelligent document search platform for Germany's government-subsidised fibre expansion in Baden-Württemberg: ETL pipelines aggregating CRM and ERP data into a medallion-architecture data lake, event-driven serverless address validation, and an AI search engine on Amazon Bedrock Knowledge Bases with OpenSearch Serverless and reranking.",
    tech: ["AWS Bedrock", "OpenSearch", "Glue", "EventBridge", "CDK"],
  },
  {
    period: "2024 \u2014 25",
    title: "Senior AI, Data & Cloud Engineer",
    company: "Boehringer Ingelheim",
    description:
      "Built an enterprise AI agent platform on RAG architecture for clinical data insights: CI/CD pipelines for LLM applications, comprehensive observability that made agents reliable enough for pharmaceutical environments, and scalable AI workflows with orchestration tuned for enterprise data sources.",
    tech: ["LangGraph", "Bedrock", "LangSmith", "LangFuse", "Terraform"],
  },
  {
    period: "2024",
    title: "Senior Cloud, Data & DevOps Engineer",
    company: "Marc O'Polo",
    description:
      "Optimised the Data Lakehouse built on Airflow, Spark and Dremio - substantially better query performance at lower cost - and hardened the platform with Terraform automation, Kubernetes monitoring and autoscaling, and redesigned ETL pipelines for the retail analytics that depend on them.",
    tech: ["EKS", "Airflow", "Spark", "Dremio", "Delta Lake"],
  },
  {
    period: "2023 \u2014 24",
    title: "Senior AI, Cloud & Data Engineer",
    company: "Boehringer Ingelheim",
    description:
      "Developed a clinical trial analytics platform that cut operational decision time: Python microservices for complex trial data, AWS CDK infrastructure automation, efficient ETL pipelines - and specialised LLMs trained and deployed to answer complex clinical queries.",
    tech: ["Azure OpenAI", "LangChain", "FastAPI", "Glue", "PySpark"],
  },
  {
    period: "2022 \u2014 23",
    title: "Senior Cloud, Data & DevOps Engineer",
    company: "Hubert Burda Media",
    description:
      "Engineered the company-wide identity and data management platform unifying access for millions of users across business units: event-driven microservices processing high-volume transactions at low latency, a revamped Databricks and Delta Lake data architecture, and streaming pipelines enabling near real-time decisions.",
    tech: ["Kafka", "Databricks", "EKS", "DynamoDB", "GraphQL"],
  },
  {
    period: "2021 \u2014 22",
    title: "Senior AI, Data & Cloud Engineer",
    company: "Porsche",
    description:
      "Designed cloud-native infrastructure scaling to connected vehicles at high availability: real-time data processing for customer insights, machine learning pipelines improving preference prediction, and infrastructure-as-code that sped up deployment cycles under the SAFe framework.",
    tech: ["SageMaker", "Step Functions", "EMR", "Glue", "CDK"],
  },
  {
    period: "2021",
    title: "Cloud, Data & DevOps Engineer",
    company: "Climeworks",
    description:
      "Built a full-stack IoT data platform processing environmental metrics from carbon-capture plants: real-time time-series analytics on Azure Databricks, a low-code annotation interface for ML labelling, and automated pipelines measuring capture performance precisely.",
    tech: ["Azure IoT", "Databricks", "Event Hub", "PostgreSQL"],
  },
  {
    period: "2020 \u2014 21",
    title: "Senior Cloud, Data & DevOps Engineer",
    company: "Marc O'Polo",
    description:
      "Created the blueprint infrastructure-as-code architecture for the on-premise-to-AWS migration: secure multi-account network design, automated serverless deployments with CI/CD, and DevOps practices that lifted developer productivity while cutting infrastructure cost.",
    tech: ["Transit Gateway", "Terraform", "Terragrunt", "EventBridge"],
  },
  {
    period: "2019 \u2014 20",
    title: "Co-founder & CTO",
    company: "Wemolo",
    description:
      "Co-founded and led technical development of an IoT mobility platform: a serverless AWS backend scaling automatically with traffic, machine learning for vehicle detection accuracy, and an edge computing design that enabled real-time analytics on constrained bandwidth. The company has since scaled to 250 people across five countries.",
    tech: ["Lambda", "Fargate", "TensorFlow", "Nvidia Jetson", "C++"],
  },
  {
    period: "2018 \u2014 19",
    title: "Head of Embedded Systems",
    company: "ParkHere",
    description:
      "Led development of an AI-powered authentication system for parking facilities and an IoT radar system for real-time parking-space detection; as team lead, introduced agile development processes across the embedded team.",
    tech: ["ANPR", "YOLO", "LoRaWAN", "ARM Cortex", "AWS IoT"],
  },
  {
    period: "2017 \u2014 18",
    title: "ML & Computer Vision Engineer",
    company: "Bleenco",
    description:
      "First engineer: built a computer vision framework for industrial safety - AI models detecting human states and behaviors in real-world environments, with deep learning inference optimised for low-power edge devices.",
    tech: ["TensorFlow", "CNN/RNN", "OpenCV", "CUDA", "TensorRT"],
  },
];
