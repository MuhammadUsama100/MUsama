import PageSection from "@/components/PageSection";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Technische Universität Kaiserslautern-Landau (RPTU)",
    location: "Kaiserslautern, Germany",
    period: "Oct 2023 - Present",
    description: "Master's Thesis (in progress): Exploring novel approaches in multimodal 3D Retrieval Framework (targeting submission to ECCV 2026). Focus on multimodal generation, parametric shape reconstruction, and 3D understanding.",
    gpa: "",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "National University of Computer and Emerging Sciences (NUCES-FAST)",
    location: "Karachi, Pakistan",
    period: "Aug 2018 - Jul 2022",
    description: "Comprehensive computer science education with strong foundation in software engineering, algorithms, and machine learning. Developed practical skills in full-stack development and deployment automation.",
    gpa: "",
  },
];

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSection
        title="Education"
        subtitle="My academic background and qualifications"
      >
        <div className="space-y-5">
          {education.map((edu, index) => (
            <Card key={index} className="hairline-card p-5 md:p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/10">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold leading-snug text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-accent font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.location}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="mb-2 leading-relaxed text-muted-foreground">
                    {edu.description}
                  </p>
                  
                  {edu.gpa && (
                    <p className="text-sm font-medium text-accent">
                      {edu.gpa}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>
    </div>
  );
};

export default Education;
