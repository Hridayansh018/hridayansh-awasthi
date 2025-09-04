import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "SASS"],
      color: "cyber-blue"
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Python", "Express.js", "PostgreSQL", "MongoDB",],
      // skills: ["Node.js", "Python", "Express.js", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "cyber-purple"
    },
    // {
    //   title: "Mobile Development",
    //   skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "Firebase"],
    //   color: "cyber-green"
    // },
    // {
    //   title: "Cloud & DevOps",
    //   skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Nginx", "Linux"],
    //   color: "cyber-pink"
    // },
    {
      title: "Tools & Technologies",
      // skills: ["Git", "VS Code", "Figma", "Postman", "Jest", "Cypress", "Webpack", "Vite"],
      skills: ["Git", "VS Code", "Postman", "Vite"],
      color: "cyber-yellow"
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Leadership", "Agile/Scrum", "Communication", "Project Management"],
      color: "accent"
    }
  ];

  const services = [
    {
      title: "Web Application Development",
      description: "Full-stack web applications with modern frameworks and responsive design"
    },
    // {
    //   title: "Mobile App Development", 
    //   description: "Cross-platform mobile applications for iOS and Android"
    // },
    {
      title: "API Development & Integration",
      description: "RESTful APIs, GraphQL services, and third-party integrations"
    },
    // {
    //   title: "Cloud Solutions",
    //   description: "Scalable cloud infrastructure and deployment strategies"
    // },
    {
      title: "Technical Consulting",
      description: "Architecture planning, code reviews, and technology recommendations"
    },
    {
      title: "UI/UX Implementation",
      description: "Converting designs into pixel-perfect, interactive user interfaces"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-impact text-center mb-16 text-foreground">
            SKILLS & <span className="text-primary">SERVICES</span>
          </h2>

          {/* Skills Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-rockwell mb-12 text-accent text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className={`text-xl font-franklin text-cyber-${category.color}`}>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="font-tahoma text-xs bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-3xl font-rockwell mb-12 text-accent text-center">Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-franklin font-bold mb-4 text-foreground">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground font-tahoma">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;