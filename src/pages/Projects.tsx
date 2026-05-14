import PageSection from "@/components/PageSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import covidTrackerImage from "@/assets/covid-tracker-app.png";
import doublerocker from "@/assets/maxresdefault.png";
import llmFinetuningImage from "@/assets/finetune.png";
import hoiGenerationImage from "@/assets/inpaint_project.png";
interface Project {
  title: string;
  role: string;
  period: string;
  location: string;
  award?: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  projectUrl?: string;
  dataset?: string;
  pdfComingSoon?: boolean;
  pptComingSoon?: boolean;
  reportComingSoon?: boolean;
}

const projects: Project[] = [
    // --- NEW PROJECT ADDED HERE ---
  {
    title: "Generative Design of a Double-Rocker Mechanism",
    role: "Research Pre-Study / Generative AI Developer",
    period: "Completed · 10.05.2026",
    location: "Mechanical & Robotics Engineering Research",
    image: doublerocker,
    description: "Our main goal was to design the physical lengths of the three moving bars (links) in a specific type of mechanism called a double-rocker four-bar linkage. We determined these lengths based on the specific angles we wanted the mechanism's input and output arms to swing through. We used basic mechanics rules, like the Grashof Condition, to make sure the resulting design was valid and worked as a double-rocker. We then collected all these successful designs into a high-quality dataset. This data was used to test how accurately we could predict the correct link lengths, which sets a benchmark for training an AI model to automatically generate new, correct designs.",
    tags: ["Kinematic Synthesis", "Generative AI", "Machine Learning", "Mechanical Engineering", "Four-Bar Linkage", "Synthetic Data"],
    pdfComingSoon: true,
  },
  {
    title: "Human Image Generation through Multimodal Diffusion Models",
    role: "Project · Muhammad Usama, Muhammad Saif Ullah Khan",
    period: "2024",
    location: "RPTU Winter Project",
    image: hoiGenerationImage,
    description: "Pose-guided human image generation remains a challenging yet significant task in computer vision. To tackle limitations in current Human-Object Interaction datasets, we introduce a HOI dataset containing 29K images with structured object annotations, detailed captions, and diverse interactions. Leveraging this dataset, we propose HOIGEN, a diffusion-based multimodal model capable of generating realistic human-object interaction images conditioned on textual descriptions and object appearance. Extensive benchmarking demonstrates that HOIGEN effectively synthesizes structurally coherent, style-controllable, and photorealistic images, significantly advancing pose-conditioned image generation.",
    tags: ["Diffusion Models", "Human-Object Interaction", "Pose-Guided Generation", "Multimodal AI", "Computer Vision", "Dataset Creation"],
    projectUrl: "https://www.saifkhichi.com/collaborate/rptu/2024-winter-project-hoi-image-generation/",
    pptComingSoon: true,
    reportComingSoon: true,
  },
  {
  title: "Finetuning LLM for Code Generation",
  role: "Solo Project",
  period: "2023",
  location: "Open-Source Research Project",
  award: null,
  description:
    "Fine-tuned large language models for Python code generation with a focus on functional correctness and reasoning accuracy. Extended the MBPP benchmark by creating MBPP-Extended-3104, a significantly larger and more diverse dataset covering edge cases, algorithmic reasoning, and real-world programming patterns. Implemented data curation, prompt normalization, unit-test alignment, and evaluation pipelines to measure pass@k, execution accuracy, and generalization. The fine-tuned models demonstrate improved performance on code synthesis, bug fixing, and function-level reasoning tasks compared to baseline models.",
  tags: [
    "LLM Fine-Tuning",
    "Code Generation",
    "MBPP",
    "Benchmarking",
    "Python",
    "Evaluation Metrics",
    "Prompt Engineering",
    "Machine Learning"
  ],
  image: llmFinetuningImage,
  dataset: "https://huggingface.co/datasets/MUsama100/MBPP-Extended-3104",
},
  // --- EXISTING PROJECT ---
  {
    title: "COVID-19 Contact Tracker",
    role: "Co-founder & Mobile Developer",
    period: "2020",
    location: "National Health Hackathon, Pakistan",
    award: "4th Prize Winner",
    description: "A contact tracing mobile application that tracks user contacts in the community and alerts users of probable COVID-19 exposure. The app uses 14-tier contact analysis to determine risk factors and enables efficient pandemic progression tracking and identification of hotspots. Developed using Flutter for cross-platform deployment (Android & iOS) with Firebase and AWS backend infrastructure.",
    tags: ["Flutter", "Firebase", "AWS", "Mobile Development", "Healthcare", "Contact Tracing", "Cross-Platform"],
    image: covidTrackerImage,
    githubUrl: "https://github.com/MuhammadUsama100/Covid-19-Tracker",
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSection
        title="Projects"
        subtitle="Research and personal projects"
      >
        {projects.length === 0 ? (
          <Card className="hairline-card p-12 text-center">
            <p className="text-muted-foreground text-lg">
              Projects coming soon! Check out my publications and experience in the meantime.
            </p>
          </Card>
        ) : (
          <div className="space-y-5">
            {projects.map((project, index) => (
              <Card key={index} className="hairline-card overflow-hidden transition-colors hover:border-accent/50">
                <div className="grid gap-0 md:grid-cols-[16rem,1fr]">
                  {project.image && (
                    <div className="flex min-h-56 items-center justify-center border-b border-border bg-muted/40 p-4 md:min-h-full md:border-b-0 md:border-r">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="max-h-72 w-full rounded-md object-contain"
                      />
                    </div>
                  )}
                  <div className="min-w-0 p-5 md:p-6">
                    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="mb-1 text-xl font-semibold leading-snug text-foreground md:text-2xl">
                          {project.title}
                        </h3>
                        {project.award && (
                          <Badge variant="default" className="mb-2 rounded-md">
                            {project.award}
                          </Badge>
                        )}
                        <p className="text-sm text-accent font-medium">
                          {project.role}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {project.location}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground sm:whitespace-nowrap">
                        {project.period}
                      </span>
                    </div>
                    
                    <p className="mb-4 leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag: string, tagIndex: number) => (
                        <Badge key={tagIndex} variant="secondary" className="rounded-md">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View on GitHub
                      </Button>
                    )}

                    {project.dataset && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.dataset, '_blank')}
                        className="gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Dataset
                      </Button>
                    )}

                    {project.projectUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.projectUrl, '_blank')}
                        className="gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Project Site
                      </Button>
                    )}

                    {project.pdfComingSoon && (
                      <Button
                        variant="outline"
                        size="sm"
                        disabled
                        className="gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        PDF Coming Soon
                      </Button>
                    )}

                    {project.pptComingSoon && (
                      <Button
                        variant="outline"
                        size="sm"
                        disabled
                        className="gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        PPT Coming Soon
                      </Button>
                    )}

                    {project.reportComingSoon && (
                      <Button
                        variant="outline"
                        size="sm"
                        disabled
                        className="gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        Report Coming Soon
                      </Button>
                    )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </PageSection>
    </div>
  );
};

export default Projects;
