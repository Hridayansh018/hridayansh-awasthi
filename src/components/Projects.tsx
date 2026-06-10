import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "PulseMail",
      description:
        "AI-powered email automation platform that streamlines outreach, personalizes responses, manages campaigns, and provides intelligent inbox prioritization.",
      technologies: [
        "Next.js",
        "Django REST Framework",
        "Supabase",
        "SMTP"
      ],
      image: "/pulsemail.png",
      liveUrl: "https://pulsemail.vercel.app/",
      githubUrl: "https://github.com/Hridayansh018/pulsemail",
      featured: true
    },

    {
      title: "AI Resume Analyzer",
      description:
        "AI-powered resume analysis platform that calculates ATS scores, extracts skills, identifies keyword gaps, and generates personalized improvement suggestions.",
      technologies: [
        "FastAPI",
        "LangChain",
        "OpenAI",
        "Python"
      ],
      image: "/resume-analyzer.png",
      liveUrl: "https://resume-analyzer-henna-gamma.vercel.app/",
      githubUrl: "https://github.com/Hridayansh018/resume-analyzer",
      featured: true
    },

    {
      title: "AI Chatbot",
      description:
        "Conversational AI chatbot with context-aware responses, scalable APIs, and architecture designed for future RAG, memory, and tool-calling integrations.",
      technologies: [
        "FastAPI",
        "Python",
        "LLMs",
        "OpenAI"
      ],
      image: "/ai-chat.png",
      liveUrl: "https://ai-chatbot-client-six.vercel.app/",
      githubUrl: "https://github.com/Hridayansh018/ai_chatbot",
      featured: true
    },

    {
      title: "NeuralDesk",
      description:
        "A Retrieval-Augmented Generation (RAG) chatbot that answers employee questions using company knowledge base documents. Built with FastAPI, FAISS vector search, LLM inference via OpenRouter, and a dark-themed chat UI.",
      technologies: [
        "FastAPI",
        "Python",
        "LLMs",
        "OpenAI"
      ],
      image: "/neuraldesk.png",
      liveUrl: "https://neuraldesk-kappa.vercel.app/",
      githubUrl: "https://github.com/Hridayansh018/neuraldesk",
      featured: true
    },

    {
      title: "Mind Sprint",
      description:
        "Real-time multiplayer quiz platform supporting 1500+ concurrent users with live leaderboards, team scoring, and low-latency communication.",
      technologies: [
        "Next.js",
        "WebSockets",
        "TypeScript",
        "Real-Time Systems"
      ],
      image: "/mindsprint.png",
      liveUrl: "https://mind-sprint-eight.vercel.app/",
      githubUrl: "https://github.com/Hridayansh018/mind-sprint",
      featured: true
    },

    {
      title: "Nexus Chat",
      description:
        "A FastAPI-based Retrieval-Augmented Generation (RAG) system that lets you upload PDF files and ask questions about their contents using AI.",
      technologies: [
        "FastAPI",
        "Python",
        "LLMs",
        "OpenAI"
      ],
      image: "/nexuspdf.png",
      liveUrl: "https://nexus-chat-pi.vercel.app/",
      githubUrl: "https://github.com/Hridayansh018/nexus-chat",
      featured: true
    },

    {
      title: "ToDo App",
      description:
        "Collaborative task management application with real-time database synchronization and responsive user experience.",
      technologies: [
        "Next.js",
        "MongoDB",
        "REST API"
      ],
      image: "/todoapp.png",
      liveUrl: "https://learning-next-sooty.vercel.app/",
      githubUrl: "https://github.com/Hridayansh018/Learning-Next",
      featured: true
    }
  ];

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-impact text-center mb-16 text-foreground">
            FEATURED <span className="text-primary">PROJECTS</span>
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-all duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-franklin text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground font-tahoma mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="font-tahoma text-xs bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
