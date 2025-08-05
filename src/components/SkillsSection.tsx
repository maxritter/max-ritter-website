import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, GraduationCap, Globe, Briefcase, Cloud, Brain, Database, Code, BookOpen, LightbulbIcon, Calendar } from "lucide-react";

const SkillsSection = () => {
  const skills = {
    degrees: [
      {
        type: "Master of Science",
        field: "Computer Engineering",
        focus: "Design and implementation of complex embedded systems",
        institution: "HS Pforzheim",
        grade: "1.3",
        period: "2015 - 2017",
        keyTopics: [
          "Real-time operating systems and embedded Linux",
          "System on Chip (SoC) design and verification",
          "Hardware/software co-design methodologies",
          "Advanced digital signal processing",
          "Machine learning for embedded applications"
        ],
        thesis: "Investigation of neural networks in relation to design, training and usage"
      },
      {
        type: "Bachelor of Science",
        field: "Applied Informatics",
        focus: "Automation Engineering and Information Networks",
        institution: "HS Ravensburg-Weingarten",
        grade: "1.5",
        period: "2011 - 2015",
        keyTopics: [
          "Network protocols and distributed systems",
          "Industrial automation and control systems",
          "Database design and management",
          "Software engineering principles",
          "Web technologies and application development"
        ],
        thesis: "Development of a low-cost thermal imaging camera"
      }
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
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-8">
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.certifications.map((certification, index) => (
                  <div key={index} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{certification}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Academic background section with columns */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            <span>Academic Background</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.degrees.map((degree, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="font-bold text-lg">{degree.type} in {degree.field}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{degree.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-3 text-muted-foreground">
                    <span>{degree.institution}</span>
                    <span className="hidden md:block">•</span>
                    <span>Final Grade: {degree.grade}</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span className="font-medium">Focus Area</span>
                    </div>
                    <p className="pl-6">{degree.focus}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <LightbulbIcon className="w-4 h-4 text-primary" />
                      <span className="font-medium">Key Topics</span>
                    </div>
                    <ul className="pl-6 space-y-1">
                      {degree.keyTopics.map((topic, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="font-medium">Thesis</span>
                    </div>
                    <p className="pl-6">{degree.thesis}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;