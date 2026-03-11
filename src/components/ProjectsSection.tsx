import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Database, Code, Bot, Briefcase, Calendar, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" },
  }),
};

const ProjectsSection = () => {
  const workProjects = [
    {
      id: 1,
      title: "Senior AI Technical Advisor (Freelancer)",
      duration: "02/2026 - present",
      industry: "Agentic Platform",
      company: "Dialpad",
      description: "Serving as AI Technical Advisor to Dialpad's Telephony Engineering division, designing and delivering an agentic-first software engineering enablement program for multiple development teams. Building reusable workflows including playbooks and agent scripts for plan-implement-test-review development loops. Providing hands-on training, workshops, and pair programming coaching on agentic coding tools and context management practices for large-scale codebases.",
      technologies: [
        "Agentic Engineering (Claude Code, MCP, Hooks, Quality, LLM, Prompt)",
        "Context Engineering (RAG, Vector Stores, Codebase Embeddings)",
        "Software Delivery (CI/CD Integration, Agentic Loops, PR Automation)",
        "Enablement & Coaching (Workshops, Hands-On Labs, Training)"
      ],
      icon: Bot
    },
    {
      id: 2,
      title: "Senior Data and Cloud Architect (Freelancer)",
      duration: "07/2025 - 01/2026",
      industry: "Telecommunications",
      company: "OEW Breitband GmbH",
      description: "Architected and implemented an enterprise-grade data integration and intelligent document search platform for Germany's government-subsidized fiber optic expansion program in Baden-Württemberg. Built ETL pipelines aggregating multi-source data from CRM and ERP systems into a centralized data lake with medallion architecture. Implemented address validation using event-driven serverless architecture on AWS. Designed an AI-powered search engine using Amazon Bedrock Knowledge Bases with vector embeddings, OpenSearch Serverless and Reranking.",
      technologies: [
        "Event-Driven Architecture (Python, EventBridge, Step Functions)",
        "Data Engineering (AWS Glue, RDS PostgreSQL, S3 Data Lake, Parquet)",
        "AI & Search (AWS Bedrock, Vector Embeddings, OpenSearch Serverless)",
        "Infrastructure-as-Code (AWS CDK, TypeScript, Terraform, CI/CD, ECS)"
      ],
      icon: Database
    },
    {
      id: 3,
      title: "Senior AI, Data and Cloud Architect (Freelancer)",
      duration: "11/2024 - 06/2025",
      industry: "Pharmaceutical",
      company: "Boehringer Ingelheim",
      description: "Architected and implemented an enterprise-grade AI Agent Platform leveraging Retrieval Augmented Generation (RAG) architecture to enhance clinical data insights. Established robust CI/CD pipelines for LLM applications using CDK and Jenkins, significantly reducing deployment times. Implemented comprehensive observability solutions that increased agent reliability across pharmaceutical environments. Designed scalable AI workflows with advanced orchestration that optimized context handling for enterprise data sources.",
      technologies: [
        "AI Agents (Python, LangGraph, Bedrock, Smolagents, Streamlit)",
        "LLM Operations (Tracing, Testing, Evaluation, LangSmith, LangFuse)",
        "Infrastructure-As-Code (AWS CDK, Terraform, Typescript, Jenkins)",
        "Vectors, Embeddings, RAG (OpenSearch, pgvector, PDF Extraction)"
      ],
      icon: Bot
    },
    {
      id: 4,
      title: "Senior Cloud, Data and DevOps Engineer (Freelancer)",
      duration: "07/2024 - 10/2024",
      industry: "E-Commerce / Retail",
      company: "Marc O'Polo",
      description: "Optimized the company's Data Lakehouse architecture built on Airflow, Spark and Dremio, substantially improving query performance and reducing operational costs. Transformed infrastructure management with Terraform-based automation, minimizing deployment errors. Enhanced Kubernetes cluster stability through advanced monitoring and autoscaling, decreasing system downtime. Redesigned ETL pipelines for increased reliability, ensuring consistent completion of mission-critical data flows supporting retail analytics.",
      technologies: [
        "Kubernetes (AWS EKS, Helm, Grafana, Prometheus, Autoscaling)",
        "Infrastructure-As-Code (Terraform, AWS CDK, GitOps, CI/CD)",
        "ETL Pipelines (Airflow, EMR, Spark, PySpark, Python, Delta Lake)",
        "Observability (CloudWatch, Elastic Stack, Grafana, AlertManager)"
      ],
      icon: Database
    },
    {
      id: 5,
      title: "Senior Cloud, Data and DevOps Engineer (Freelancer)",
      duration: "04/2023 - 06/2024",
      industry: "Pharmaceutical",
      company: "Boehringer Ingelheim",
      description: "Developed an analytics platform for clinical trials that reduced operational decision time and improved trial efficiency. Engineered scalable Python microservices that processed complex trial data with high reliability. Implemented AWS CDK infrastructure that automated deployment tasks and optimized cloud resources. Created efficient ETL pipelines that transformed raw clinical data into actionable insights. Trained and deployed specialized LLMs that answered complex clinical queries, supporting critical decision-making processes.",
      technologies: [
        "Python Backend (FastAPI, OpenAPI, Pydantic, Open-/ElasticSearch)",
        "Infrastructure-As-Code (AWS CDK, Typescript, Cloudformation)",
        "ETL Pipelines (AWS Glue, Step Functions, Pandas, PySpark, Airflow)",
        "Large-Language-Models (Fine-Tuning, LangChain, Azure OpenAI)"
      ],
      icon: Bot
    },
    {
      id: 6,
      title: "Senior Cloud, Data and DevOps Engineer (Freelancer)",
      duration: "03/2022 - 03/2023",
      industry: "Publishing / Media",
      company: "Hubert Burda Media",
      description: "Engineered and deployed the company-wide identity and data management platform that unified access across multiple business units and millions of users. Architected event-driven microservices with Go that processed high-volume transactions with low latency. Revamped data architecture using Databricks and Delta Lake, improving analytics performance considerably. Implemented streaming data pipelines that reduced data processing time, enabling near real-time decision making for digital publishing operations.",
      technologies: [
        "Event-Driven Architecture (Node.js, Asynchron, Kafka, SQS, GraphQL)",
        "Cloud Infrastructure (EKS, ArgoCD, Lambda, Jenkins, CloudFront)",
        "Data Storage (S3, DynamoDB, RDS, ElastiCache, MongoDB, PostgreSQL)",
        "ETL & Data Engineering (Databricks, PySpark, Python, Airflow)",
        "Security & Compliance (IAM, Cognito, GDPR, KMS, Secrets Manager)"
      ],
      icon: Server
    },
    {
      id: 7,
      title: "Senior AI, Data and Cloud Engineer (Freelancer)",
      duration: "08/2021 - 02/2022",
      industry: "Automotive",
      company: "Porsche",
      description: "Designed and implemented cloud-native infrastructure that scaled to support connected vehicles with high availability. Built real-time data processing services that significantly reduced analytics latency, enabling timely customer insights. Developed machine learning pipelines that improved customer preference prediction, driving personalized experiences. Implemented infrastructure-as-code practices that accelerated deployment cycles, supporting rapid innovation for digital services under the SAFe ART framework.",
      technologies: [
        "AWS Services (Glue, Athena, Step Functions, Lambda, Sagemaker)",
        "Infrastructure-As-Code (CDK, Terraform, CloudFormation, Python)",
        "Microservices (Python, Java Spring Boot, REST, API Gateway)",
        "Containerization (Kubernetes, EKS, ECS, Fargate, Docker, ECR)",
        "Data Engineering (PySpark, EMR, Glue, Athena)"
      ],
      icon: Database
    },
    {
      id: 8,
      title: "Senior Cloud, Data and DevOps Engineer (Consultant)",
      duration: "03/2021 - 07/2021",
      industry: "Energy / Climate",
      company: "Climeworks",
      description: "Architected a full-stack IoT data platform that processed environmental metrics from numerous sensors with high reliability. Implemented real-time analytics of time-series data using Azure Databricks that improved carbon capture optimization processes. Developed a low-code annotation interface that enhanced data labeling efficiency, accelerating machine learning model development. Created automated data pipelines that enabled precise measurement of carbon capture performance, supporting the company's climate impact goals.",
      technologies: [
        "Microsoft Azure (Functions, Data Lake, Event Hub, Key Vault, Entra)",
        "Data Storage (PostgreSQL, Time-Series, Blob Storage, Data Lake)",
        "Data Processing (Databricks, PySpark, Python, Delta Lake)",
        "IoT (Azure IoT Hub, IoT Edge, Device Provisioning Service)"
      ],
      icon: Database
    },
    {
      id: 9,
      title: "Senior Cloud, Data and DevOps Engineer (Consultant)",
      duration: "08/2020 - 02/2021",
      industry: "E-Commerce / Retail",
      company: "Marc O'Polo",
      description: "Created a blueprint infrastructure-as-code architecture that accelerated the company's cloud migration from on-premise to AWS. Designed and implemented secure network architecture with multi-account strategy that substantially improved security posture. Automated serverless deployments with CI/CD pipelines, significantly reducing release cycles. Established DevOps best practices that enhanced developer productivity and optimized infrastructure costs, supporting the company's digital transformation.",
      technologies: [
        "AWS Foundation (VPC, Transit Gateway, Direct Connect, VPN, Route53)",
        "Security & Compliance (IAM, GuardDuty, Security Hub, CloudTrail)",
        "Serverless (API Gateway, SQS, SNS, EventBridge, Python, DynamoDB)",
        "Infrastructure-As-Code (Terraform, Terragrunt, AWS CDK, YAML, HCL)"
      ],
      icon: Server
    },
    {
      id: 10,
      title: "Chief Technology Officer (CTO and Co-Founder)",
      duration: "07/2019 - 07/2020",
      industry: "Mobility",
      company: "Wemolo",
      description: "Co-founded and led technical development of an IoT mobility platform that processed real-time, time-series data from numerous devices with low latency. Architected a serverless AWS backend that scaled automatically to handle traffic spikes while maintaining cost efficiency. Implemented machine learning algorithms that improved vehicle detection accuracy, creating competitive advantage in the mobility market. Designed an edge computing solution that reduced cloud data transfer, enabling real-time analytics in bandwidth-constrained environments.",
      technologies: [
        "Cloud Architecture (AWS Lambda, API Gateway, ECS, Fargate, SQS)",
        "Infrastructure-as-Code (Terraform, AWS CDK, Serverless Framework)",
        "Machine Learning (TensorFlow, PyTorch, Computer Vision, Python)",
        "Edge Computing (Nvidia Jetson, ARM, C++, OpenCV, Embedded Linux)"
      ],
      icon: Code
    },
    {
      id: 11,
      title: "Head of Embedded Systems and IoT Engineer (Employee)",
      duration: "03/2018 - 06/2019",
      industry: "Mobility",
      company: "ParkHere",
      description: "Led development of an AI-powered authentication system for parking facilities that increased security while reducing operational costs. Architected an IoT radar system for real-time parking space detection with high accuracy, surpassing market alternatives. Designed cloud connectivity solutions that maintained robust uptime even in challenging network environments. As team lead, implemented agile processes that increased development velocity and improved product quality, directly contributing to new enterprise contracts.",
      technologies: [
        "Machine Learning (TensorFlow, OpenCV, OpenVINO, ANPR, YOLO)",
        "Internet of Things (MQTT, Bluetooth, LoRaWAN, LTE-M, NB-IoT, OTA)",
        "Embedded Systems (C/C++, ARM Cortex, RTOS, Embedded Linux)",
        "Cloud Backend (AWS, Lambda, Python, IoT Core, DynamoDB)"
      ],
      icon: Code
    },
    {
      id: 12,
      title: "Machine Learning, Computer Vision and IoT Engineer (Employee)",
      duration: "09/2017 - 02/2018",
      industry: "Artificial Intelligence",
      company: "Bleenco",
      description: "Developed pioneering computer vision framework for industrial safety that reduced workplace accidents in pilot deployments. Engineered AI models that detected human emotional states and behaviors with high accuracy in real-world environments. Optimized deep learning inference for edge devices, achieving smooth performance on low-power hardware. Created modular architecture that enabled rapid customization for diverse industrial applications, accelerating product market fit and customer adoption.",
      technologies: [
        "Machine Learning (TensorFlow, Keras, PyTorch, CNN, RNN, LSTM)",
        "Computer Vision (OpenCV, Pose Estimation, Face Recognition)",
        "Edge AI (Nvidia Jetson, TensorRT, Coral TPU, Model Optimization)",
        "Cloud Integration (AWS, Model Training, Data Storage, OTA Updates)",
        "Development Tools (Python, C++, CUDA, Git, Docker, PyTest)"
      ],
      icon: Bot
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          {workProjects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <Card className="card-hover gradient-card border-border/50 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col md:flex-row relative">
                  <div className="p-6 md:w-24 flex justify-center items-start md:border-r border-border/30">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                      <project.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-3">
                        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-lg whitespace-nowrap">
                          <Calendar className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-lg">
                          <Building2 className="w-4 h-4 text-primary" />
                          <span className="font-medium">{project.industry}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-lg">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span className="font-medium">{project.company}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="mb-5 text-foreground/90 leading-relaxed">{project.description}</p>
                      <div className="bg-muted/20 rounded-lg p-4">
                        <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <Code className="w-4 h-4 text-primary" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="skill-badge text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
