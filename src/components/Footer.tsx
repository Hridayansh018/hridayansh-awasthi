import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub,FaLinkedin  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Hridayansh018", label: "GitHub" },
    { icon: FaLinkedin , href: "https://www.linkedin.com/in/hridayansh-awasthi-0095a12b6/", label: "LinkedIn" },
    { icon: RiTwitterXLine , href: "https://x.com/hridayansh018", label: "Twitter" },
    { icon: IoIosMail, href: "mailto:work.with.hridayansh@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-impact text-primary mb-4">
                PORTFOLIO
              </h3>
              <p className="text-muted-foreground font-tahoma text-sm leading-relaxed">
                Full Stack Developer passionate about creating innovative digital solutions. 
                Let's build something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-franklin font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      target="_blank"
                      className="text-muted-foreground font-tahoma text-sm hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-franklin font-semibold text-foreground mb-4">
                Connect
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
              <p className="text-muted-foreground font-tahoma text-sm mt-4">
                Always open to new opportunities and collaborations.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground font-tahoma text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </p>
            <div className="font-courier text-cyber-green text-sm mt-4 md:mt-0">
              {'<'} Built with React & Tailwind CSS {'/>'} 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;