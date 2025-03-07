
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Database, Code, Robot } from "lucide-react";

const ProjectsSection = () => {
  const workProjects = [
    {
      id: 1,
      title: "Cloud (AWS) | AI Agents | DevOps",
      duration: "01.11.24 - Now",
      industry: "Medical",
      company: "Pharmaceutical (Confidential)",
      description: "Max worked on building an enterprise-grade AI Agent Platform leveraging Retrieval Augmented Generation (RAG) architecture. He developed the infrastructure and CI/CD pipelines for LLM applications using AWS CDK and implemented observability for AI agents. He architected scalable AI workflows using orchestration frameworks and optimized context handling for enterprise data sources.",
      technologies: [
        "AI Agents (LangChain, LangGraph, Python, AWS Bedrock, RAG)",
        "LLM Operations (Tracing, LangSmith, LangFuse)",
        "Infrastructure-As-Code (AWS CDK, Typescript)"
      ],
      icon: Robot
    },
    {
      id: 2,
      title: "Cloud (AWS) | Data Engineering | DevOps",
      duration: "01.07.24 - 31.10.24",
      industry: "E-Commerce",
      company: "Medium-Sized (Confidential)",
      description: "Max worked in the Data Engineering team to improve the Data Lakehouse of the company built on top of Airflow, Spark and Dremio. He worked on the infrastructure and DevOps topics in Terraform and optimized the stability of the Kubernetes Cluster and scheduled ETL pipelines including enhanced monitoring.",
      technologies: [
        "Kubernetes (AWS EKS, Helm, Grafana, Autoscaling)",
        "Infrastructure-As-Code (Terraform)",
        "ETL Pipelines (Airflow, EMR, Spark)"
      ],
      icon: Database
    },
    {
      id: 3,
      title: "Cloud (AWS) | Data Engineering | DevOps | AI",
      duration: "01.04.23 - 30.06.24",
      industry: "Medical",
      company: "Pharmaceutical (Confidential)",
      description: "Max assisted in creating an analytics software product for clinical trial operation that visualizes complex operational clinical trial data. The projects involves building backend Python microservices and deploying the services on AWS, implementing IaC using AWS CDK and writing ETL jobs. A Large Language Model was trained on AWS to answer data-specific questions.",
      technologies: [
        "Containerized Backend (Python, FastAPI, Swagger, boto3)",
        "Infrastructure-As-Code (AWS CDK for Typescript, CDK Pipelines)",
        "ETL Pipelines (AWS Glue, Pandas, PySpark)",
        "Artificial Intelligence (LLM, AWS Bedrock, LangChain)"
      ],
      icon: Robot
    },
    {
      id: 4,
      title: "Cloud (AWS) | Data Engineering | DevOps",
      duration: "01.03.22 - 31.03.23",
      industry: "Media",
      company: "OEM (Confidential)",
      description: "Max helped creating the company-wide identity and data management platform based on Golang, Microservice architecture and Kubernetes infrastructure. He also worked in the Data Engineering department to build reliable ETL pipelines using Databricks with dbx and PySpark on AWS.",
      technologies: [
        "Event-Driven Microservice Architecture on EKS (Golang, Kafka, Terraform)",
        "ETL Pipelines (PySpark, Databricks, S3, Delta Tables)",
        "AWS (S3, SQS, MSK, RDS) and Storage (Redis, MongoDB, PostgreSQL)"
      ],
      icon: Server
    },
    {
      id: 5,
      title: "Cloud (AWS) | Data Engineering | DevOps | AI",
      duration: "01.08.21 - 28.02.22",
      industry: "Automotive",
      company: "OEM (Confidential)",
      description: "Max worked in a team of Cloud Engineers to implement a highly scalable and reliable infrastructure based on cloud-native technologies. The services provide smart insights based on customer data and machine learning.",
      technologies: [
        "AWS (Glue, Athena, Step Functions, Sagemaker, S3, VPC, CloudWatch)",
        "Infrastructure-As-Code with CDK (Typescript) and Terraform",
        "Event-Driven Microservice Architecture (Python, Kafka)",
        "Services with Kubernetes (EKS on EC2), ECS on Fargate and Lambda",
        "Data Pipelines / ETL (PySpark and Python on EMR and Glue)"
      ],
      icon: Database
    },
    {
      id: 6,
      title: "Cloud (Azure) | Data Engineering | DevOps",
      duration: "01.03.21 - 31.07.21",
      industry: "Climate / Sustainability",
      company: "Startup (Confidential)",
      description: "Max implemented a full-stack data processing and analytics platform using modern cloud technologies and Apache Spark on Databricks. He also created a low-code UI solution to allow workers to annotate the data.",
      technologies: [
        "Microsoft Azure (VMs, Data Lake, Event Hub, AD, Synapse)",
        "SQL Database (Azure PostgreSQL, TimescaleDB)",
        "Data Pipelines / ETL (PySpark on Azure Databricks)"
      ],
      icon: Database
    },
    {
      id: 7,
      title: "Cloud (AWS) | Migration | DevOps",
      duration: "01.09.20 - 28.02.21",
      industry: "E-Commerce",
      company: "Medium-Sized (Confidential)",
      description: "Max facilitated the creation of a blueprint infrastructure-as-code architecture for migration from on-premise into the AWS cloud using Terraform. He utilized the Serverless Framework and AWS CDK to improve the development and deployment of the various microservices.",
      technologies: [
        "AWS (Networking, VPNs, Security, Account Setup, Lambda, DMS, RDS)",
        "Serverless Functions (Python, Serverless Framework)",
        "Terraform (Terragrunt) and CDK with Typescript"
      ],
      icon: Server
    },
    {
      id: 8,
      title: "Cloud (AWS) | Data Engineering | DevOps | MLOps",
      duration: "01.07.19 - 31.07.20",
      industry: "Mobility",
      company: "Wemolo GmbH",
      description: "Max founded the company together with four co-founders in 2019. Starting from scratch, he developed a low-cost hardware system and a scalable backend on AWS to process and analyze the device data in realtime.",
      technologies: [
        "AWS (Serverless, Containers, ETL, Database, Data Warehouse)",
        "Infrastructure-as-Code (Terraform, AWS CDK, Pulumi)",
        "Deep Learning (Python, Tensorflow, TensorRT) and Computer Vision",
        "Edge Computing (Nvidia Jetson, ARM, C++, Embedded Linux)"
      ],
      icon: Code
    },
    {
      id: 9,
      title: "Computer Vision | Deep Learning | IoT",
      duration: "01.03.2018 - 30.06.2019",
      industry: "Mobility",
      company: "ParkHere GmbH",
      description: "Max developed an authentication terminal for corporate parking lots using ANPR technology and a radar based system for on-street parking spaces. As a team lead, he was responsible for Scrum and strategic product decisions.",
      technologies: [
        "Deep Learning (Python, Tensorflow, OpenVino)",
        "Internet of Things (OTA Updates, Cloud Connectivity, MQTT)",
        "Embedded Linux and Microcontroller (C / C++, ARM, balenaCloud)"
      ],
      icon: Code
    },
    {
      id: 10,
      title: "Computer Vision | Deep Learning | IoT",
      duration: "01.09.2017 - 28.02.2018",
      industry: "Industrial Safety",
      company: "Bleenco GmbH",
      description: "Max created the first stable version of a Deep Learning and Computer Vision based AI framework for industrial safety applications. He worked on predicting various human-centered features like emotions, intention, drowsiness and full-body pose estimation, running on low-cost edge devices.",
      technologies: [
        "Deep Learning (Python, Tensorflow, Keras)",
        "Computer Vision (OpenCV)",
        "Edge Computing (Nvidia Jetson, C++)"
      ],
      icon: Robot
    }
  ];

  return (
    <section id="work" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Selected Work</h2>
        </div>
        
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
