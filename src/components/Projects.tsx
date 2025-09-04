import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "PulseMail",
      description: "PulseMail is an AI-powered email automation tool that streamlines outreach, personalizes responses, and manages your inbox with intelligent prioritization",
      technologies: ["NextJs", "Django Rest Feamework", "Supabase Auth", "SMTp"],
      image: "/pulsemail.png",
      liveUrl: "https://pulsemail.vercel.app/",
      githubUrl: "https://github.com/Hridayansh018/pulsemail",
      featured: true
    },
    {
      title: "ToDo App",
      description: "Collaborative ToDo application with real-time Database.",
      technologies: ["Next.js", "MongoDB", "Rest API"],
      image: "/todoapp.png", 
      liveUrl: "learning-next-sooty.vercel.app",
      githubUrl: "https://github.com/Hridayansh018/Learning-Next",
      featured: true
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social sharing features.",
      technologies: ["React Native", "Firebase", "GraphQL", "Expo"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and agent management system with integrated CRM.",
      technologies: ["Vue.js", "Python", "FastAPI", "Docker"],
      image: "/placeholder.svg",
      liveUrl: "#", 
      githubUrl: "#",
      featured: false
    },
    {
      title: "Analytics Dashboard",
      description: "Business intelligence dashboard with real-time data visualization, custom reports, and automated insights generation.",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Social Media Platform",
      description: "Modern social networking platform with real-time messaging, content sharing, and advanced privacy controls.",
      technologies: ["Next.js", "WebRTC", "MongoDB", "AWS"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-impact text-center mb-16 text-foreground">
            FEATURED <span className="text-primary">PROJECTS</span>
          </h2>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-all duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-franklin text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-tahoma mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
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
                <CardFooter className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2" >
                    <ExternalLink size={16} />
                    <a href={project.liveUrl} target="_blank">Live Demo</a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github size={16} />
                    <a href={project.githubUrl} target="_blank">Code</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          {/* <div>
            <h3 className="text-3xl font-rockwell mb-12 text-accent text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-franklin text-foreground">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-tahoma mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary" 
                          className="font-tahoma text-xs bg-secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="font-tahoma text-xs bg-secondary">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      <ExternalLink size={14} className="mr-1" />
                      Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      <Github size={14} className="mr-1" />
                      Code
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
