import { Code, Rocket, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Rapid prototyping and agile development methodologies"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach with strong communication skills"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-impact text-center mb-16 text-foreground">
            ABOUT <span className="text-primary">ME</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-rockwell mb-6 text-accent">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-lg font-tahoma text-muted-foreground mb-6 leading-relaxed">
                With over 5 years of experience in full-stack development, I specialize in creating 
                robust, scalable applications that deliver exceptional user experiences. My journey 
                spans from startups to enterprise solutions, always focusing on clean architecture 
                and innovative problem-solving.
              </p>
              <p className="text-lg font-tahoma text-muted-foreground mb-8 leading-relaxed">
                I'm passionate about leveraging modern technologies to build solutions that make 
                a real impact. From responsive web applications to mobile apps and cloud infrastructure, 
                I bring ideas to life with precision and creativity.
              </p>
              
              <div className="font-courier text-cyber-green">
                <p>const developer = {`{`}</p>
                <p className="ml-4">name: "Full Stack Developer",</p>
                <p className="ml-4">experience: "1.5+ years",</p>
                <p className="ml-4">passion: "Building amazing things"</p>
                <p>{`}`}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <item.icon size={48} className="text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-franklin font-bold mb-3 text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground font-tahoma text-sm">
                      {item.description}
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

export default About;