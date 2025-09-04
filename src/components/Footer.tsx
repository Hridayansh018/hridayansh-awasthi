import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@portfolio.dev", label: "Email" },
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