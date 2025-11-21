import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Download, GraduationCap } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";
import ResearchDomainCard from "@/components/ResearchDomainCard";
import EventCalendar from "@/components/EventCalendar";
import AnimatedBlocks from "@/components/AnimatedBlocks";

const About = () => {
  const researchDomains = [
    {
      title: "3D Retrieval",
      relatedWork: ["Upcoming Thesis (ECCV 2026 Target)"]
    },
    {
      title: "AI CAD Generation",
      relatedWork: ["NURBGen (AAAI 2026)"]
    },
    {
      title: "3D Reconstruction",
      relatedWork: ["MARVEL-40M+ (CVPR 2025)"]
    },
    {
      title: "Image/Video Generation",
      relatedWork: ["Upcoming"]
    }
  ];

  const recentEvents = [
    {
      date: "08-11-2025",
      title: "NURBGen accepted in AAAI 2026.",
      description: "Details coming Soon."
    }
  ];

  const handleDownloadResume = () => {
    // Create a link to download resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume.pdf to the public folder
    link.download = 'Muhammad_Usama_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-16 overflow-hidden">
        <AnimatedBlocks />
        <div className="container max-w-5xl relative z-10">
          <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-start">
            {/* Left side - About content */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h1 className="text-4xl font-bold text-primary mb-2">Muhammad Usama</h1>
                <p className="text-xl text-muted-foreground mb-1">Research Assistant | Master's Student</p>
                <p className="text-lg text-muted-foreground">Technische Universität Kaiserslautern-Landau (RPTU)</p>
              </div>

              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  Welcome! I'm a Research Assistant with 2 years of experience focused on multimodal generation, 
                  parametric shape reconstruction, and 3D retrieval/classification. I also bring 3 years of 
                  software engineering experience in distributed training, on-prem/cloud packaging, and CI/CD, 
                  bridging research with reliable, production-ready systems.
                </p>
                
                <p className="leading-relaxed">
                  Currently pursuing my Master's in Computer Science at RPTU Kaiserslautern, I'm working on my 
                  thesis exploring novel approaches in multimodal 3D Retrieval Framework (targeting submission 
                  to ECCV 2026). At the German Research Center (DFKI), I've contributed to cutting-edge projects 
                  involving LLM fine-tuning, automated 3D captioning pipelines, and diffusion models.
                </p>
                
                <p className="leading-relaxed">
                  My research has been published at top-tier conferences including AAAI and CVPR, focusing on 
                  LLM-driven CAD generation, text-to-3D content creation, and parametric surface modeling. 
                  Feel free to explore my publications, projects, and reach out for research opportunities or 
                  collaborations.
                </p>
              </div>

              <div className="space-y-4 mt-8">
                <div className="flex gap-4">
                  <Link to="/publications">
                    <Button variant="default" size="lg">View Publications</Button>
                  </Link>
                  <Button variant="outline" size="lg" onClick={handleDownloadResume}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                  <Link to="/contact">
                    <Button variant="outline" size="lg">Get in Touch</Button>
                  </Link>
                </div>
                <div>
                  <a href="https://scholar.google.com/citations?user=zcRPmUoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      View Google Scholar Profile
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Profile picture */}
            <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-xl shadow-lg p-4 hover-scale overflow-hidden border border-border">
                <img 
                  src={profileImage} 
                  alt="Muhammad Usama" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Domains and Events Section */}
      <section className="relative py-16 bg-muted/30 overflow-hidden">
        <AnimatedBlocks />
        <div className="container max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
            {/* Research Domains Grid */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-3">Research Domains</h2>
                <p className="text-lg text-muted-foreground">Hover over cards to see related work</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {researchDomains.map((domain, index) => (
                  <div 
                    key={index}
                    className="animate-scale-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <ResearchDomainCard
                      title={domain.title}
                      relatedWork={domain.relatedWork}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Event Calendar */}
            <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <EventCalendar events={recentEvents} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
