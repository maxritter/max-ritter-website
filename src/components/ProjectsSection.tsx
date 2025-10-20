import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Database, Code, Bot } from "lucide-react";

const ProjectsSection = () => {
  const workProjects = [
    {
      id: 1,
      title: "Cloud (AWS) | AI | DevOps | Data",
      duration: "07/2025 - present",
      industry: "Telecommunications",
      company: "OEW Breitband GmbH",
      description: "Architected and implemented an enterprise-grade data integration and address management platform for Germany's government-subsidized fiber optic expansion program in Baden-Württemberg. Built comprehensive ETL pipelines aggregating multi-source data from CRM and ERP systems into centralized data lake with medallion architecture. Implemented a system for address validation using distributed event-driven architecture with serverless technology on AWS using latest infrastructure-as-code technologies and automated testing pipelines.",
      technologies: [
        "Event-Driven Architecture (AWS EventBridge, Lambda, Step Functions)",
        "Data Engineering (AWS Glue, RDS PostgreSQL, S3 Data Lake, Parquet)",
        "Infrastructure-as-Code (AWS CDK with Typescript, Terraform, CICD)",
        "Observability & Testing (CloudWatch, Unit/Integration/E2E Testing)"
      ],
      icon: Database
    },
    {
      id: 2,
      title: "Cloud (AWS) | AI | DevOps | Data",
      duration: "11/2024 - 06/2025",
      industry: "Pharmaceutical",
      company: "Boehringer Ingelheim",
      description: "Architected and implemented an enterprise-grade AI Agent Platform leveraging Retrieval Augmented Generation (RAG) architecture to enhance clinical data insights. Established robust CI/CD pipelines for LLM applications using AWS CDK, significantly reducing deployment times. Implemented comprehensive observability solutions that increased agent reliability across pharmaceutical environments. Designed scalable AI workflows with advanced orchestration that optimized context handling for enterprise data sources.",
      technologies: [
        "AI Agents (LangChain, LangGraph, AWS Bedrock, Anthropic, RAG)",
        "LLM Operations (Tracing, Testing, Evaluation, LangSmith, LangFuse)",
        "Infrastructure-As-Code (AWS CDK, Terraform, Typescript)",
        "Vector Databases (OpenSearch, pgvector)"
      ],
      icon: Bot
    },
    {
      id: 3,
      title: "Cloud (AWS) | DevOps | Data",
      duration: "07/2024 - 10/2024",
      industry: "E-Commerce / Retail",
      company: "Marc O'Polo",
      description: "Optimized the company's Data Lakehouse architecture built on Airflow, Spark and Dremio, substantially improving query performance and reducing operational costs. Transformed infrastructure management with Terraform-based automation, minimizing deployment errors. Enhanced Kubernetes cluster stability through advanced monitoring and autoscaling, decreasing system downtime. Redesigned ETL pipelines for increased reliability, ensuring consistent completion of mission-critical data flows supporting retail analytics.",
      technologies: [
        "Kubernetes (AWS EKS, Helm, Grafana, Prometheus, Autoscaling)",
        "Infrastructure-As-Code (Terraform, AWS CDK, GitOps, CI/CD)",
        "ETL Pipelines (Airflow, EMR, Spark, PySpark, Dremio, Delta Lake)",
        "Observability (CloudWatch, Elastic Stack, Grafana, AlertManager)"
      ],
      icon: Database
    },
    {
      id: 4,
      title: "Cloud (AWS) | AI | DevOps | Data",
      duration: "04/2023 - 06/2024",
      industry: "Pharmaceutical",
      company: "Boehringer Ingelheim",
      description: "Developed an analytics platform for clinical trials that reduced operational decision time and improved trial efficiency. Engineered scalable Python microservices that processed complex trial data with high reliability. Implemented AWS CDK infrastructure that automated deployment tasks and optimized cloud resources. Created efficient ETL pipelines that transformed raw clinical data into actionable insights. Trained and deployed specialized LLMs that answered complex clinical queries, supporting critical decision-making processes.",
      technologies: [
        "Backend Development (Python, FastAPI, Swagger, boto3, OpenSearch)",
        "Infrastructure-As-Code (AWS CDK, Typescript)",
        "ETL Pipelines (AWS Glue, Step Functions, Pandas, PySpark, Airflow)",
        "Large Language Models (AWS Bedrock, Anthropic, LangChain, RAG)"
      ],
      icon: Bot
    },
    {
      id: 5,
      title: "Cloud (AWS) | Data | DevOps",
      duration: "03/2022 - 03/2023",
      industry: "Publishing / Media",
      company: "Hubert Burda Media",
      description: "Engineered and deployed the company-wide identity and data management platform that unified access across multiple business units and millions of users. Architected event-driven microservices with Go that processed high-volume transactions with low latency. Revamped data architecture using Databricks and Delta Lake, improving analytics performance considerably. Implemented streaming data pipelines that reduced data processing time, enabling near real-time decision making for digital publishing operations.",
      technologies: [
        "Event-Driven Architecture (Go, Rust, Kafka, SQS, GraphQL)",
        "Cloud Infrastructure (AWS EKS, Lambda, API Gateway, CloudFront)",
        "Data Storage (S3, DynamoDB, RDS, ElastiCache, MongoDB, PostgreSQL)",
        "ETL & Data Engineering (Databricks, PySpark, Delta Lake, Airflow)",
        "Security & Compliance (IAM, Cognito, GDPR, KMS, Secrets Manager)"
      ],
      icon: Server
    },
    {
      id: 6,
      title: "Cloud (AWS) | AI | DevOps | Data",
      duration: "08/2021 - 02/2022",
      industry: "Automotive",
      company: "Porsche",
      description: "Designed and implemented cloud-native infrastructure that scaled to support connected vehicles with high availability. Built real-time data processing services that significantly reduced analytics latency, enabling timely customer insights. Developed machine learning pipelines that improved customer preference prediction, driving personalized experiences. Implemented infrastructure-as-code practices that accelerated deployment cycles, supporting rapid innovation for digital automotive services.",
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
      id: 7,
      title: "Cloud (Azure) | Data | DevOps | IoT",
      duration: "03/2021 - 07/2021",
      industry: "Climate",
      company: "Climeworks",
      description: "Architected a full-stack IoT data platform that processed environmental metrics from numerous sensors with high reliability. Implemented real-time analytics using Azure Databricks that improved carbon capture optimization processes. Developed a low-code annotation interface that enhanced data labeling efficiency, accelerating machine learning model development. Created automated data pipelines that enabled precise measurement of carbon capture performance, supporting the company's climate impact goals.",
      technologies: [
        "Microsoft Azure (Functions, Data Lake, Event Hub, IoT Hub, Synapse)",
        "Data Storage (Azure PostgreSQL, CosmosDB, Blob Storage, Data Lake)",
        "Data Processing (Databricks, PySpark, Delta Lake, Azure Functions)",
        "IoT (Azure IoT Hub, IoT Edge, Device Provisioning Service)"
      ],
      icon: Database
    },
    {
      id: 8,
      title: "Cloud (AWS) | DevOps",
      duration: "08/2020 - 02/2021",
      industry: "E-Commerce / Retail",
      company: "Marc O'Polo",
      description: "Created a blueprint infrastructure-as-code architecture that accelerated the company's cloud migration from on-premise to AWS. Designed and implemented secure network architecture with multi-account strategy that substantially improved security posture. Automated serverless deployments with CI/CD pipelines, significantly reducing release cycles. Established DevOps best practices that enhanced developer productivity and optimized infrastructure costs, supporting the company's digital transformation.",
      technologies: [
        "AWS Foundation (VPC, Transit Gateway, Direct Connect, VPN, Route53)",
        "Security & Compliance (IAM, GuardDuty, Security Hub, CloudTrail)",
        "Serverless (Lambda, API Gateway, SQS, SNS, EventBridge, DynamoDB)",
        "Infrastructure-As-Code (Terraform, Terragrunt, AWS CDK, YAML, HCL)"
      ],
      icon: Server
    },
    {
      id: 9,
      title: "Cloud (AWS) | Data | AI | DevOps",
      duration: "07/2019 - 07/2020",
      industry: "Mobility",
      company: "Wemolo",
      description: "Co-founded and led technical development of an IoT mobility platform that processed telemetry from numerous devices with low latency. Architected a serverless AWS backend that scaled automatically to handle traffic spikes while maintaining cost efficiency. Implemented machine learning algorithms that improved vehicle detection accuracy, creating competitive advantage in the mobility market. Designed an edge computing solution that reduced cloud data transfer, enabling real-time analytics in bandwidth-constrained environments.",
      technologies: [
        "Cloud Architecture (AWS Lambda, API Gateway, ECS, Fargate, SQS)",
        "Infrastructure-as-Code (Terraform, AWS CDK, Serverless Framework)",
        "Machine Learning (TensorFlow, PyTorch, Computer Vision, TensorRT)",
        "Edge Computing (Nvidia Jetson, ARM, C++, OpenCV, Embedded Linux)"
      ],
      icon: Code
    },
    {
      id: 10,
      title: "Cloud (AWS) | AI | IoT",
      duration: "03/2018 - 06/2019",
      industry: "Mobility",
      company: "ParkHere",
      description: "Led development of an AI-powered authentication system for parking facilities that increased security while reducing operational costs. Architected an IoT radar system for real-time parking space detection with high accuracy, surpassing market alternatives. Designed cloud connectivity solutions that maintained robust uptime even in challenging network environments. As team lead, implemented agile processes that increased development velocity and improved product quality, directly contributing to new enterprise contracts.",
      technologies: [
        "Machine Learning (TensorFlow, OpenCV, OpenVINO, ANPR, YOLO)",
        "Internet of Things (MQTT, Bluetooth, LoRaWAN, LTE-M, NB-IoT, OTA)",
        "Embedded Systems (C/C++, ARM Cortex, RTOS, Embedded Linux)",
        "Cloud Backend (AWS, Lambda, IoT Core, DynamoDB, S3)"
      ],
      icon: Code
    },
    {
      id: 11,
      title: "Cloud (AWS) | AI | IoT",
      duration: "09/2017 - 02/2018",
      industry: "Artificial Intelligence",
      company: "Bleenco",
      description: "Developed pioneering computer vision framework for industrial safety that reduced workplace accidents in pilot deployments. Engineered AI models that detected human emotional states and behaviors with high accuracy in real-world environments. Optimized deep learning inference for edge devices, achieving smooth performance on low-power hardware. Created modular architecture that enabled rapid customization for diverse industrial applications, accelerating product market fit and customer adoption.",
      technologies: [
        "Machine Learning (TensorFlow, Keras, PyTorch, Transfer Learning, CNN, RNN, LSTM)",
        "Computer Vision (OpenCV, Pose Estimation, Face Recognition, Emotion Detection)",
        "Edge AI (Nvidia Jetson, TensorRT, Coral TPU, Model Optimization, Quantization)",
        "Cloud Integration (AWS, Model Training, Data Storage, Monitoring, OTA Updates)",
        "Development Tools (Python, C++, CUDA, Git, Docker, PyTest, TensorBoard)"
      ],
      icon: Bot
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {workProjects.map((project) => (
            <Card key={project.id} className="card-hover overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:w-1/6 flex justify-center items-start md:border-r border-border">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <span className="text-sm text-muted-foreground">{project.duration}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">Industry:</span> {project.industry} | <span className="font-medium">Company:</span> {project.company}
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="mb-4 text-foreground/90">{project.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                      <ul className="space-y-1">
                        {project.technologies.map((tech, index) => (
                          <li key={index} className="flex gap-2">
                            <span className="text-primary">•</span>
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
