import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Boxes, Cpu, Download, Github, GraduationCap, Linkedin, Mail, MapPin, Network } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";
import AnimatedBlocks from "@/components/AnimatedBlocks";
import ResumePDF from "@/assets/MuhammadUsama2025.pdf";
import { publications } from "@/data/publications";

const About = () => {
  const focusAreas = ["3D Retrieval", "Text-to-CAD", "3D Reconstruction", "Multimodal LLMs"];

  const researchProfile = [
    {
      icon: Boxes,
      label: "Geometry",
      value: "CAD, BRep, NURBS, Bezier surfaces"
    },
    {
      icon: Network,
      label: "Learning",
      value: "LLMs, VLMs, diffusion, multimodal retrieval"
    },
    {
      icon: Cpu,
      label: "Systems",
      value: "Distributed training, evaluation, CI/CD"
    },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "MuhammadUsama2025.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <section className="relative border-b border-border/80 py-12 md:py-20">
        <div className="absolute inset-x-0 top-0 z-0 h-[30rem] opacity-35 md:inset-0 md:h-auto">
          <AnimatedBlocks />
        </div>

        <div className="container relative z-10 max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.35fr,0.65fr] lg:items-start">
            <div className="animate-fade-in space-y-7">
              <div>
                <p className="mb-3 inline-flex items-center rounded-md border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Master's Student · 3D Vision Researcher
                </p>
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
                  Muhammad Usama
                </h1>
                <p className="mt-4 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                  Building generative AI systems for CAD and 3D understanding.
                </p>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  Kaiserslautern, Rhineland-Palatinate, Germany
                </span>
                <span className="inline-flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-accent" />
                  RPTU · DFKI
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <Badge key={area} variant="secondary" className="rounded-md px-3 py-1">
                    {area}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link to="/publications" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto">
                    View Research
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" onClick={handleDownloadResume} className="w-full sm:w-auto">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
                <a href="mailto:usamamuhammad100@gmail.com" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Mail className="h-4 w-4" />
                    Contact
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-3 text-sm">
                <a className="academic-link inline-flex items-center gap-1" href="https://scholar.google.com/citations?user=zcRPmUoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                  <GraduationCap className="h-4 w-4" /> Scholar
                </a>
                <a className="academic-link inline-flex items-center gap-1" href="https://github.com/MuhammadUsama100" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a className="academic-link inline-flex items-center gap-1" href="https://linkedin.com/in/muhammadusama100" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>

            <aside className="animate-fade-in lg:pt-2" style={{ animationDelay: "0.15s" }}>
              <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                <img
                  src={profileImage}
                  alt="Muhammad Usama"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="border-t border-border p-5">
                  <p className="text-sm font-medium text-foreground">Academic profile</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Master's student in Computer Science at RPTU Kaiserslautern-Landau, focused on generative AI and 3D computer vision.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.35fr,0.65fr]">
            <div>
              <div className="mb-6 flex items-end justify-between gap-4 border-b border-border/80 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Selected Work</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Recent Publications</h2>
                </div>
                <Link to="/publications" className="hidden text-sm font-medium text-accent hover:underline sm:inline-flex">
                  All publications
                </Link>
              </div>

              <div className="space-y-4">
                {publications.slice(0, 3).map((publication) => (
                  <Card key={publication.id} className="hairline-card p-5 transition-colors hover:border-accent/50">
                    <div className="grid gap-4 sm:grid-cols-[1fr,4.5rem]">
                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <Badge variant="secondary">{publication.venue}</Badge>
                          {publication.status && <Badge variant="outline">{publication.status}</Badge>}
                        </div>
                        <Link to={`/publications/${publication.id}`} className="group">
                          <h3 className="text-xl font-semibold leading-snug text-foreground group-hover:text-accent">
                            {publication.title}
                          </h3>
                        </Link>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{publication.authors}</p>
                      </div>
                      <div className="text-left text-sm font-semibold text-muted-foreground sm:text-right">
                        {publication.year}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="hairline-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Research Profile</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  Building reliable generative systems for 3D and CAD
                </h3>
                <div className="mt-5 space-y-4">
                  {researchProfile.map((item) => (
                    <div key={item.label} className="flex gap-3 rounded-md border border-border/80 bg-muted/30 p-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-md border border-border/80 bg-background/70 p-3">
                    <p className="text-2xl font-semibold text-foreground">{publications.length}</p>
                    <p className="mt-1 text-xs text-muted-foreground">Research papers</p>
                  </div>
                  <div className="rounded-md border border-border/80 bg-background/70 p-3">
                    <p className="text-2xl font-semibold text-foreground">2</p>
                    <p className="mt-1 text-xs text-muted-foreground">Primary domains</p>
                  </div>
                </div>
              </Card>

              <Card className="hairline-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">About</p>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    My research centers on multimodal generation and 3D retrieval/classification, with current thesis work targeting a multimodal 3D retrieval framework.
                  </p>
                  <p>
                    I combine research practice with three years of software engineering experience across distributed training, CI/CD, infrastructure, and production systems.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-8 sm:hidden">
            <Link to="/publications">
              <Button variant="outline" className="w-full">All publications</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
