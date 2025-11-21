import PageSection from "@/components/PageSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "German Research Center (DFKI)",
    role: "Research Assistant",
    period: "Nov 2023 - Present",
    location: "Kaiserslautern, Germany",
    description: "Leading research in multimodal AI and 3D generation. Built automated captioning pipeline for 1M+ 3D assets using VLMs, fine-tuned LLMs (Qwen-3B/7B) with LoRA, and designed ethical filtering layer reducing concerns by 80%. Explored long-context fine-tuning, pose-guided image generation with diffusion models, and developed visual ML platform backend with distributed training capabilities.",
    tags: ["LLM Fine-tuning", "Diffusion Models", "3D Captioning", "VLM", "Distributed Training", "PyTorch"],
  },
  {
    title: "Retrocausal",
    role: "Software Engineer - ML Infrastructure",
    period: "Jul 2022 - Oct 2023",
    location: "Redmond, USA (Remote)",
    description: "Led software packaging for client deployments, contributing to expanding client base and securing 2nd funding round. Enhanced system scalability by implementing Redis and SQS for message transmission. Built efficient object labeling tool for 2D/3D objects. Transformed cloud architecture to on-premises using Localstack and developed thin web client with WebRTC streaming.",
    tags: ["ML Infrastructure", "Redis", "AWS", "Docker", "WebRTC", "System Architecture"],
  },
  {
    title: "Aga Khan Development Network Digital Health Resource Centre (AKDN)",
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
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-accent font-medium">
                    {experience.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {experience.location}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {experience.period}
                </span>
              </div>
              
              <p className="text-card-foreground leading-relaxed mb-4">
                {experience.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
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
