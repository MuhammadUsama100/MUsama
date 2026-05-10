import PageSection from "@/components/PageSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import covidTrackerImage from "@/assets/covid-tracker-app.png";
import doublerocker from "@/assets/maxresdefault.png";
import llmFinetuningImage from "@/assets/finetune.png"
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
  dataset?: string;
}

const projects: Project[] = [
    // --- NEW PROJECT ADDED HERE ---
  {
    title: "Generative Design of a Double-Rocker Mechanism",
    role: "Research Pre-Study / Generative AI Developer",
    period: "In Progress",
    location: "Mechanical & Robotics Engineering Research",
    image: doublerocker,
    description: "Our main goal was to design the physical lengths of the three moving bars (links) in a specific type of mechanism called a double-rocker four-bar linkage. We determined these lengths based on the specific angles we wanted the mechanism's input and output arms to swing through. We used basic mechanics rules, like the Grashof Condition, to make sure the resulting design was valid and worked as a double-rocker. We then collected all these successful designs into a high-quality dataset. This data was used to test how accurately we could predict the correct link lengths, which sets a benchmark for training an AI model to automatically generate new, correct designs.",
    tags: ["Kinematic Synthesis", "Generative AI", "Machine Learning", "Mechanical Engineering", "Four-Bar Linkage", "Synthetic Data"],
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
          <Card className="p-12 text-center">
            <p className="text-muted-foreground text-lg">
              Projects coming soon! Check out my publications and experience in the meantime.
            </p>
          </Card>
        ) : (
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-4 md:p-6 hover:border-accent/50 transition-colors">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  {project.image && (
                    <div className="w-full md:w-64 h-48 flex-shrink-0">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover rounded-lg border border-border"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-primary mb-1 break-words">
                          {project.title}
                        </h3>
                        {project.award && (
                          <Badge variant="default" className="mb-2">
                            🏆 {project.award}
                          </Badge>
                        )}
                        <p className="text-sm text-accent font-medium">
                          {project.role}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {project.location}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground sm:whitespace-nowrap">
                        {project.period}
                      </span>
                    </div>
                    
                    <p className="text-card-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag: string, tagIndex: number) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

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