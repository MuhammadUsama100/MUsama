import PageSection from "@/components/PageSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import covidTrackerImage from "@/assets/covid-tracker-app.png";

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
}

const projects: Project[] = [
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
              <Card key={index} className="p-6 hover:border-accent/50 transition-colors">
                <div className="flex gap-6">
                  {project.image && (
                    <div className="w-64 h-48 flex-shrink-0">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover rounded-lg border border-border"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-semibold text-primary mb-1">
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
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
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
