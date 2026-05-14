import PageSection from "@/components/PageSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dfkiLogo from "@/assets/dfki.png";
import retrocausalLogo from "@/assets/Retrocausal.png";
import akdnLogo from "@/assets/AKDN.png";

const experiences = [
  {
    title: "German Research Center (DFKI)",
    logo: dfkiLogo,
    role: "Research Assistant",
    period: "Nov 2023 - May 2026",
    location: "Kaiserslautern, Germany",
    description: "Research Assistant until 31 May 2026, working on multimodal AI and 3D generation. Built automated captioning pipeline for 1M+ 3D assets using VLMs, fine-tuned LLMs (Qwen-3B/7B) with LoRA, and designed ethical filtering layer reducing concerns by 80%. Explored long-context fine-tuning, pose-guided image generation with diffusion models, and developed visual ML platform backend with distributed training capabilities.",
    tags: ["LLM Fine-tuning", "Diffusion Models", "3D Captioning", "VLM", "Distributed Training", "PyTorch"],
  },
  {
    title: "Retrocausal",
    logo: retrocausalLogo,
    role: "Software Engineer - ML Infrastructure",
    period: "Jul 2022 - Oct 2023",
    location: "Redmond, USA (Remote)",
    description: "Led software packaging for client deployments, contributing to expanding client base and securing 2nd funding round. Enhanced system scalability by implementing Redis and SQS for message transmission. Built efficient object labeling tool for 2D/3D objects. Transformed cloud architecture to on-premises using Localstack and developed thin web client with WebRTC streaming.",
    tags: ["ML Infrastructure", "Redis", "AWS", "Docker", "WebRTC", "System Architecture"],
  },
  {
    title: "Aga Khan Development Network Digital Health Resource Centre (AKDN)",
    logo: akdnLogo,
    role: "Software Engineer",
    period: "Jul 2020 - Mar 2022",
    location: "Karachi, Pakistan",
    description: "Developed scalable multi-module healthcare system for largest hospital network in Karachi and Nairobi subsidiaries. Led deployment automation initiative introducing Docker, Docker Compose, and GitHub Actions for CI/CD. Implemented full-stack solutions using .NET, NestJS, and Angular. Automated analytics reporting using Firebase functions and Google BigQuery.",
    tags: [".NET", "NestJS", "Angular", "Docker", "CI/CD", "Firebase", "Healthcare"],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSection
        title="Experience"
        subtitle="Professional work experience"
      >
        <div className="space-y-5">
          {experiences.map((experience, index) => (
            <Card key={index} className="hairline-card p-5 md:p-6">
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 gap-4">
                  <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-md border border-border/80 bg-white p-2">
                    <img
                      src={experience.logo}
                      alt={`${experience.title} logo`}
                      className="max-h-10 max-w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="mb-1 text-xl font-semibold leading-snug text-foreground md:text-2xl">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-accent font-medium">
                      {experience.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {experience.location}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-medium text-muted-foreground sm:whitespace-nowrap">
                  {experience.period}
                </span>
              </div>
              
              <p className="mb-4 leading-relaxed text-muted-foreground">
                {experience.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="rounded-md">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </PageSection>
    </div>
  );
};

export default Experience;
