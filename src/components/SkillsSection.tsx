
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, Database, Server, Layout, 
  Globe, Terminal, Monitor, Laptop 
} from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: Layout,
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "Redux"]
  },
  {
    category: "Backend Development",
    icon: Server,
    items: ["Node.js", "Express", "Django", "Flask", "REST API", "GraphQL", "Authentication"]
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Prisma", "Mongoose"]
  },
  {
    category: "Tools & Deployment",
    icon: Terminal,
    items: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify", "CI/CD", "Webpack", "Vite"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground">
            I have experience with a wide range of technologies across the full development stack.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <Card key={skill.category} className="card-hover">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle>{skill.category}</CardTitle>
                  <CardDescription>Technologies I've worked with</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge key={item} variant="secondary">{item}</Badge>
                  ))}
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
