import PageSection from "@/components/PageSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, Users } from "lucide-react";
import { Link } from "react-router-dom";
import noahsArkLogo from "@/assets/NoAHs.png";
import manLogo from "@/assets/Man.png";

const collaborations = [
  {
    title: "DreamCAD",
    logo: noahsArkLogo,
    organization: "Huawei Noah's Ark Lab",
    type: "Research Publication Collaboration",
    status: "In Progress",
    collaborator: "Muhammad Sadil Khan",
    collaboratorRole: "Senior PhD Student at RPTU Kaiserslautern and Intern at Huawei Noah's Ark Lab, London",
    summary:
      "A research collaboration focused on generative CAD modeling and AI-assisted design systems, connecting multimodal generation with structured 3D/CAD representations.",
    areas: ["Generative CAD", "3D Modeling", "Multimodal AI", "Research Systems"],
  },
  {
    title: "Physics-in-the-Loop",
    logo: manLogo,
    organization: "MAN Truck & Bus SE",
    type: "Research Publication Collaboration",
    status: "Accepted at IJCAI-ECAI 2026 AI4Tech",
    collaborator: "Elias Berger",
    collaboratorRole: "AI Research Scientist at MAN Truck & Bus SE and PhD Student at Technische Universitat Dresden",
    summary:
      "A research collaboration around physics-aware AI, integrating model behavior with physical constraints to improve reliability and practical deployment in engineering settings.",
    areas: ["Physics-Aware AI", "Scientific Machine Learning", "Engineering AI", "IJCAI-ECAI"],
  },
];

const Collaborate = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSection
        title="Collaborate"
        subtitle="Research publication collaborations across generative design, CAD intelligence, and physics-aware AI."
      >
        <div className="grid gap-8 lg:grid-cols-[0.75fr,1.25fr]">
          <aside className="space-y-5">
            <Card className="hairline-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent/10">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                Research with strong collaborators
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                I collaborate on publication-driven research where generative AI, geometry, CAD, and physically grounded modeling meet practical engineering problems.
              </p>
              <div className="mt-5">
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Discuss collaboration
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="hairline-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Current Focus</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Text-to-CAD", "3D Generation", "Physics-Aware AI", "Research Publication"].map((item) => (
                  <Badge key={item} variant="secondary" className="rounded-md">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          </aside>

          <div className="space-y-5">
            {collaborations.map((collaboration) => (
              <Card key={collaboration.title} className="hairline-card p-5 transition-colors hover:border-accent/50 md:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex min-w-0 gap-4">
                    <div className="flex h-14 w-24 shrink-0 items-center justify-center rounded-md border border-border/80 bg-white p-2">
                      <img
                        src={collaboration.logo}
                        alt={`${collaboration.organization} logo`}
                        className="max-h-10 max-w-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="rounded-md">
                        {collaboration.type}
                      </Badge>
                      <Badge variant={collaboration.status.includes("Accepted") ? "default" : "outline"} className="rounded-md">
                        {collaboration.status}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                      {collaboration.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{collaboration.organization}</p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {collaboration.summary}
                </p>

                <div className="mt-5 rounded-md border border-border/80 bg-muted/30 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Collaborator</p>
                  <p className="mt-2 font-semibold text-foreground">{collaboration.collaborator}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {collaboration.collaboratorRole}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {collaboration.areas.map((area) => (
                    <Badge key={area} variant="secondary" className="rounded-md">
                      {area}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}

            <Card className="hairline-card p-5 md:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">Interested in working together?</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    I am open to research discussions around 3D generation, CAD, multimodal learning, and physically grounded AI.
                  </p>
                </div>
                <a href="mailto:usamamuhammad100@gmail.com">
                  <Button>
                    <Mail className="h-4 w-4" />
                    Email me
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default Collaborate;
