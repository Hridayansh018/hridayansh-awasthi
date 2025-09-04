import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary geometric-clip"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-accent geometric-clip"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-cyber-green geometric-clip"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Profile Image (Left side) */}
          <div className=" mt-20 lg:mt-0 lg:w-2/5 mb-10 lg:mb-0 flex justify-center lg:justify-start">
            <img 
              src={profileImage} 
              alt="Professional Developer Portrait" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary object-cover shadow-lg"
            />
          </div>
          
          {/* Text Content (Right side) */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-impact mb-6 text-foreground">
              FULL STACK
              <span className="block text-primary">DEVELOPER</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-tahoma text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Crafting digital experiences with modern technologies. 
              Specialized in web development, mobile apps, and cloud solutions.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-franklin text-lg px-8 py-3"
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-franklin text-lg px-8 py-3"
              >
                Get In Touch
              </Button>
            </div> */}

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-12">
              <a 
                href="https://github.com/Hridayansh018" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/hridayansh-awasthi-0095a12b6/" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <button 
                onClick={() => window.location.href = "mailto:work.with.hridayansh@gmail.com"}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="animate-bounce absolute bottom-2 left-1/2 pt-32  transform -translate-x-1/2">
          <ArrowDown size={32} className="text-primary mx-auto" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;