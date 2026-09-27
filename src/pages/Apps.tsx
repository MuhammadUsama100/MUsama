import PageSection from "@/components/PageSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, MonitorPlay, Rocket } from "lucide-react";
import launchPadImage from "@/assets/LaunchPad.png";
import hololensBrainImage from "@/assets/hololens-brain-visualization.png";

interface AppItem {
  title: string;
  status: string;
  role?: string;
  description: string;
  tags: string[];
  image: string;
  url?: string;
  demoComingSoon?: boolean;
}

const apps: AppItem[] = [
  {
    title: "HoloLens 2 Human Brain Visualization",
    status: "In Development",
    role: "Project Lead / Team Manager",
    description:
      "Leading and coordinating the development team for a HoloLens 2 application that brings segmented brain and skull models into an immersive mixed-reality environment. The application supports high-performance 3D model loading, accurate spatial placement, hand-tracked rotation and scaling, anatomical layer controls, structure highlighting, and an OpenXR-based deployment workflow.",
    tags: ["HoloLens 2", "Mixed Reality", "Team Leadership", "OpenXR", "3D Visualization", "Hand Tracking", "Medical Imaging"],
    image: hololensBrainImage,
    demoComingSoon: true,
  },
  {
    title: "LaunchPad",
    status: "Beta Version",
    description:
      "LaunchPad will be a practical starter kit for new entrepreneurs, bringing early-stage planning, launch resources, and founder-friendly workflows into one simple place.",
    tags: ["Startup", "Entrepreneurship", "Founder Tools", "Launch Kit"],
    image: launchPadImage,
    url: "https://launchpad-fe-vmf3.onrender.com/",
  },
];

const Apps = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSection
        title="Apps"
        subtitle="Applications and product experiments"
      >
        <div className="space-y-5">
          {apps.map((app) => (
            <Card key={app.title} className="hairline-card overflow-hidden transition-colors hover:border-accent/50">
              <div className="grid gap-0 md:grid-cols-[22rem,1fr]">
                <div className="flex min-h-56 items-center justify-center border-b border-border bg-muted/40 p-3 md:min-h-full md:border-b-0 md:border-r">
                  <img
                    src={app.image}
                    alt={`${app.title} app preview`}
                    className="max-h-72 w-full rounded-md object-contain"
                  />
                </div>

                <div className="min-w-0 p-5 md:p-6">
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <Badge className="mb-3 rounded-md border-emerald-500/30 bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-300">
                        {app.status}
                      </Badge>
                      <h3 className="text-xl font-semibold leading-snug text-foreground md:text-2xl">
                        {app.title}
                      </h3>
                      {app.role && (
                        <p className="mt-1 text-sm font-medium text-accent">
                          {app.role}
                        </p>
                      )}
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <Rocket className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    {app.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {app.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-md">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {app.url && (
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a href={app.url} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4 text-cyan-700 dark:text-cyan-300" />
                        Open App
                      </a>
                    </Button>
                  )}

                  {app.demoComingSoon && (
                    <Button variant="outline" size="sm" disabled className="gap-2">
                      <MonitorPlay className="h-4 w-4 text-cyan-700 dark:text-cyan-300" />
                      Demo Available Soon
                    </Button>
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

export default Apps;
