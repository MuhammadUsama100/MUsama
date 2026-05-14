import PageSection from "@/components/PageSection";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, GraduationCap } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "usamamuhammad100@gmail.com",
    link: "mailto:usamamuhammad100@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/muhammadusama100",
    link: "https://linkedin.com/in/muhammadusama100",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/MuhammadUsama100",
    link: "https://github.com/MuhammadUsama100",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-2 4v12l8-6-8-6z"/>
      </svg>
    ),
    label: "Hugging Face",
    value: "huggingface.co/MUsama100",
    link: "https://huggingface.co/MUsama100",
  },
  {
    icon: GraduationCap,
    label: "Google Scholar",
    value: "Muhammad Usama",
    link: "https://scholar.google.com/citations?user=zcRPmUoAAAAJ&hl=en",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSection
        title="Contact"
        subtitle="Let's connect and collaborate"
      >
        <div className="max-w-2xl mx-auto">
          <Card className="hairline-card mb-8 p-6 md:p-8">
            <p className="mb-6 leading-relaxed text-muted-foreground">
              I'm always interested in discussing research opportunities, collaborations, 
              or simply connecting with fellow researchers and professionals. Feel free to 
              reach out through any of the following channels:
            </p>
            
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-md border border-border/80 p-4 transition-all hover:border-accent hover:bg-accent/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <method.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{method.label}</p>
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </Card>

          <div className="text-center">
            <p className="text-muted-foreground">
              Based in <span className="font-medium text-foreground">Kaiserslautern, Germany</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Gerhart-Hauptmann-Str. 24, 67663 Kaiserslautern
            </p>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default Contact;
