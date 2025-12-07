import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Download, GraduationCap } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";
import ResearchDomainCard from "@/components/ResearchDomainCard";
import EventCalendar from "@/components/EventCalendar";
import AnimatedBlocks from "@/components/AnimatedBlocks";
import ResumePDF from '@/assets/MuhammadUsama2025.pdf';
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
    },
    {
      date: "02-12-2025",
      title: "Project Generative Design of a Double-Rocker Mechanism",
      description: "Details coming Soon."
    },
    {
      date: "07-12-2025",
      title: "NURBGen Project Page Launched.",
      description: "https://muhammadusama100.github.io/NURBGen-Project/"
    },
  ];

  const handleDownloadResume = () => {
    // Create a link to download resume
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'MuhammadUsama2025.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-8 md:py-16 overflow-hidden">
        <AnimatedBlocks />
        <div className="container max-w-5xl relative z-10 px-4">
          <div className="grid md:grid-cols-[2fr,1fr] gap-6 md:gap-8 items-start">
            {/* Left side - About content */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h1 className="text-4xl font-bold text-primary mb-2">Muhammad Usama</h1>
                <p className="text-xl text-muted-foreground mb-1">Research Assistant | Master's Student</p>
                <p className="text-lg text-muted-foreground">Technische Universität Kaiserslautern-Landau (RPTU)</p>
              </div>
            <div className="space-y-4 text-foreground">
              <p className="leading-relaxed">
                I am a Master's student in Computer Science at RPTU Kaiserslautern and a Research Assistant at the German Research Center for Artificial Intelligence (DFKI), driven by a focus on <strong>Generative AI</strong> and <strong>3D Computer Vision</strong>.
              </p>
              
              <p className="leading-relaxed">
                My 2 years of research centers on <strong>multimodal generation</strong> and <strong>3D retrieval/classification</strong>. My Master's thesis involves developing a <strong>multimodal 3D Retrieval Framework</strong> (targeting <strong>ECCV 2026</strong>), building on DFKI contributions in areas like <strong>LLM fine-tuning</strong> and diffusion models.
              </p>
              
              <p className="leading-relaxed">
                This research has resulted in publications at top-tier conferences, including <strong>AAAI</strong> and <strong>CVPR</strong>. Furthermore, my <strong>3 years of Software Engineering</strong> experience ensures I can deliver reliable, production-ready systems by managing <strong>distributed training</strong> and robust <strong>CI/CD pipelines</strong>.
              </p>
            </div>

              <div className="space-y-4 mt-6 md:mt-8">
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Link to="/publications" className="w-full sm:w-auto">
                    <Button variant="default" size="lg" className="w-full sm:w-auto">View Publications</Button>
                  </Link>
                  <Button variant="outline" size="lg" onClick={handleDownloadResume} className="w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">Get in Touch</Button>
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
            <div className="flex justify-center md:justify-end animate-fade-in order-first md:order-last" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-xl shadow-lg p-3 md:p-4 hover-scale overflow-hidden border border-border w-full max-w-sm md:max-w-none">
                <img 
                  src={profileImage} 
                  alt="Muhammad Usama" 
                  className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Domains and Events Section */}
      <section className="relative py-8 md:py-16 bg-muted/30 overflow-hidden">
        <AnimatedBlocks />
        <div className="container max-w-6xl relative z-10 px-4">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-6 md:gap-8">
            {/* Research Domains Grid */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-3">Research Domains</h2>
                <p className="text-base md:text-lg text-muted-foreground">Hover over cards to see related work</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
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
