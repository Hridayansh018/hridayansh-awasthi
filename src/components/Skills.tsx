import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS"
      ],
      color: "cyber-blue"
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Python",
        "Express.js",
        "FastAPI",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Supabase"
      ],
      color: "cyber-purple"
    },
    {
      title: "AI & Agentic Systems",
      skills: [
        "LangChain",
        "LangGraph",
        "RAG",
        "OpenAI",
        "LLMs",
        "AI Agents",
        "Agentic Workflows",
        "Prompt Engineering",
        "Vector Search",
        "Embeddings",
        "Semantic Search",
        "Tool Calling",
        "FAISS",
        "Document Processing"
      ],
      color: "cyber-green"
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Docker",
        "Linux",
        "Vite",
        "AWS"
      ],
      color: "cyber-yellow"
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Team Leadership",
        "Communication",
        "Project Management",
        "Agile Development"
      ],
      color: "accent"
    }
  ];

  const services = [
    {
      title: "Full Stack Development",
      description:
        "Building scalable web applications using Next.js, FastAPI, Django REST Framework, PostgreSQL, and modern cloud technologies."
    },
    {
      title: "AI & Agentic Applications",
      description:
        "Developing AI-powered applications, intelligent assistants, multi-step agent workflows, and LLM-integrated products."
    },
    {
      title: "RAG Systems",
      description:
        "Building Retrieval-Augmented Generation systems using LangChain, LangGraph, embeddings, vector databases, and semantic search."
    },
    {
      title: "API Development & Integration",
      description:
        "Designing RESTful APIs, backend services, authentication systems, and third-party integrations."
    },
    {
      title: "Real-Time Applications",
      description:
        "Developing WebSocket-powered applications with low-latency communication and live collaboration features."
    },
    {
      title: "Technical Consulting",
      description:
        "Architecture planning, performance optimization, technology selection, and code reviews."
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
            <h3 className="text-3xl font-rockwell mb-12 text-accent text-center">
              Technical Skills
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle
                      className={`text-xl font-franklin text-cyber-${category.color}`}
                    >
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
            <h3 className="text-3xl font-rockwell mb-12 text-accent text-center">
              Services
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-franklin font-bold mb-4 text-foreground">
                      {service.title}
                    </h4>

                    <p className="text-muted-foreground font-tahoma leading-relaxed">
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
