import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, GraduationCap, Globe, Briefcase, Cloud, Brain, Database, Code } from "lucide-react";

const SkillsSection = () => {
  const skills = {
    degrees: [
      "B. Sc. Applied Informatics: Automation Engineering and Information Networks (HS Ravensburg-Weingarten, Final Grade: 1.5)",
      "M. Sc. Computer Engineering: Design and implementation of complex embedded systems (HS Pforzheim, Final Grade: 1.3)"
    ],
    certifications: [
      "AWS Certified DevOps Engineer Professional",
      "AWS Certified Solutions Architect Professional",
      "AWS re/Start Accredited Instructor",
      "AWS Certified Solutions Architect Associate",
      "AWS Certified Developer Associate",
      "AWS Certified SysOps Administrator Associate",
      "AWS Certified Data Analytics Speciality",
      "CNCF Kubernetes and Cloud Native Associate (KCNA)",
      "HashiCorp Certified Terraform Associate",
      "Microsoft Certified Azure Fundamentals",
      "Microsoft Certified Azure Data Fundamentals"
    ],
    languages: [
      "Javascript / Typescript",
      "Python",
      "SQL",
      "Spark / PySpark",
      "Golang",
      "C / C++",
      "Bash / Shell"
    ],
    roles: [
      "DevOps Engineer",
      "Cloud Engineer",
      "Data Engineer",
      "Machine Learning Engineer",
      "AI/LLM Engineer",
      "Software Architect",
      "Team Lead",
      "Chief Technology Officer"
    ],
    cloudAWS: [
      "Multi-Account Strategy",
      "Event-Driven Architecture",
      "Microservices",
      "Serverless",
      "Integration & APIs",
      "Security & Governance",
      "MLOps & AI Infrastructure",
      "Analytics & Data Lakes",
      "Networking & Identity"
    ],
    ai: [
      "AWS Bedrock & Foundation Models",
      "LangChain & LangGraph",
      "RAG Architecture",
      "Vector Databases & Embeddings",
      "Context Optimization",
      "Evaluation & Testing",
      "Prompt Engineering",
      "Model Fine-tuning",
      "LLM Observability"
    ],
    dataDevOps: [
      "Data Pipelines & ETL",
      "SQL & NoSQL Databases",
      "Data Lakehouse",
      "(Py)Spark & Databricks",
      "Iceberg & Delta Lake",
      "AWS CDK & Terraform",
      "CI/CD Pipelines",
      "Kubernetes & Containers",
      "Observability & Monitoring"
    ]
  };

  return (
    <section className="section-padding bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Cloud (AWS)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {skills.cloudAWS.map((skill, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>AI (LLMs & Agents)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {skills.ai.map((skill, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Data & DevOps</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {skills.dataDevOps.map((skill, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Degrees</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {skills.degrees.map((degree, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{degree}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {skills.certifications.map((certification, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{certification}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Programming Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {skills.languages.map((language, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{language}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Roles</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {skills.roles.map((role, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
