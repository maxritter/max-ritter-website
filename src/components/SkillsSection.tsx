import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Globe, Briefcase, Cloud, Brain, Database, Code, BookOpen, LightbulbIcon, Calendar, Sparkles } from "lucide-react";

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
    <section className="section-padding">
      <div className="container mx-auto px-4">
        {/* Core Expertise */}
        <div className="section-header">
          <Sparkles className="w-8 h-8 text-primary" />
          <h2 className="section-title">Core Expertise</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="card-hover gradient-card border-border/50 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <Cloud className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Cloud (AWS)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex flex-wrap gap-2">
                {skills.cloudAWS.map((skill, index) => (
                  <Badge key={index} variant="outline" className="skill-badge">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover gradient-card border-border/50 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <Brain className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">AI (LLMs & Agents)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex flex-wrap gap-2">
                {skills.ai.map((skill, index) => (
                  <Badge key={index} variant="outline" className="skill-badge">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover gradient-card border-border/50 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <Database className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Data & DevOps</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex flex-wrap gap-2">
                {skills.dataDevOps.map((skill, index) => (
                  <Badge key={index} variant="outline" className="skill-badge">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card className="card-hover gradient-card border-border/50 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-xl group-hover:scale-110 transition-transform duration-500">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Programming Languages</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((language, index) => (
                  <Badge key={index} variant="outline" className="skill-badge">
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover gradient-card border-border/50 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-xl group-hover:scale-110 transition-transform duration-500">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Professional Roles</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex flex-wrap gap-2">
                {skills.roles.map((role, index) => (
                  <Badge key={index} variant="outline" className="skill-badge">
                    {role}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Certifications */}
        <div className="mb-16">
          <Card className="card-hover gradient-card border-border/50 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-xl group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex flex-wrap gap-2">
                {skills.certifications.map((certification, index) => (
                  <Badge key={index} variant="outline" className="skill-badge">
                    {certification}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Academic Background */}
        <div className="section-header">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="section-title">Academic Background</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.degrees.map((degree, index) => (
            <Card key={index} className="card-hover gradient-card border-border/50 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="pt-6 relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-1 text-primary">{degree.type}</h3>
                    <p className="text-lg font-semibold mb-2">{degree.field}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-lg">
                    <Calendar className="w-4 h-4" />
                    <span>{degree.period}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="text-muted-foreground">{degree.institution}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="font-medium text-primary">Grade: {degree.grade}</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-muted/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-sm">Focus Area</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{degree.focus}</p>
                  </div>
                  
                  <div className="bg-muted/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <LightbulbIcon className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-sm">Key Topics</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {degree.keyTopics.map((topic, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-secondary/50">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-muted/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-sm">Thesis</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">"{degree.thesis}"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
