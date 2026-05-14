import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageSection from "@/components/PageSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Search, FileText, Globe, Code } from "lucide-react";
import { publications } from "@/data/publications";
import PublicationGraph from "@/components/PublicationGraph";
import nurbgenArchitecture from "@/assets/nurbgen-architecture.png";
import marvelTeaser from "@/assets/marvel-teaser.png";
import dreamCadTeaser from "@/assets/DreamCad.png";
import physicsInLoopTeaser from "@/assets/Physics_in_loop.png";

const Publications = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPublications = publications.filter((pub) =>
    pub.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const highlightName = (text: string) => {
    const parts = text.split(/(Usama, M\.|Muhammad Usama)/g);
    return parts.map((part, index) =>
      part === "Usama, M." || part === "Muhammad Usama" ? (
        <span key={index} className="font-semibold text-accent">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSection
        title="Publications"
        subtitle="Research papers and academic contributions"
      >
        <div className="mb-8 space-y-4">
          <div className="grid gap-3 lg:grid-cols-[1fr,auto] lg:items-center">
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search publications by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="grid gap-2 sm:grid-cols-3 lg:w-[26rem]">
              <Card className="hairline-card p-3">
                <p className="text-xl font-semibold text-foreground">{publications.length}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Total</p>
              </Card>
              <Card className="hairline-card p-3">
                <p className="text-xl font-semibold text-foreground">1</p>
                <p className="mt-0.5 text-xs text-muted-foreground">3D content</p>
              </Card>
              <Card className="hairline-card p-3">
                <p className="text-xl font-semibold text-foreground">{publications.length - 1}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">CAD</p>
              </Card>
            </div>
          </div>
          <PublicationGraph />
        </div>

        <div className="space-y-5">
          {filteredPublications.length === 0 ? (
            <Card className="hairline-card p-8 text-center">
              <p className="text-muted-foreground">
                No publications found matching "{searchQuery}"
              </p>
            </Card>
          ) : (
            filteredPublications.map((publication) => (
              <Card
                key={publication.id}
                className="hairline-card cursor-pointer overflow-hidden transition-colors hover:border-accent/60"
                onClick={() => navigate(`/publications/${publication.id}`)}
              >
                <div className="grid gap-0 md:grid-cols-[1fr,18rem]">
                  <div className="min-w-0 p-5 md:p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="rounded-md">{publication.venue}</Badge>
                      {publication.status && (
                        <Badge className="rounded-md" variant={publication.status === "In Review" || publication.status === "Preprint" ? "outline" : "default"}>
                          {publication.status}
                        </Badge>
                      )}
                      <span className="text-xs font-semibold text-muted-foreground">{publication.year}</span>
                    </div>

                    <h3 className="mb-2 text-xl font-semibold leading-snug text-foreground md:text-2xl">
                      {publication.title}
                    </h3>

                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                      {highlightName(publication.authors)}
                    </p>

                    <div className="mb-5">
                      <h4 className="mb-2 text-sm font-semibold text-foreground">
                        Key Contributions:
                      </h4>
                      <ul className="space-y-1.5">
                        {publication.contributions.map((contribution, idx) => (
                          <li key={idx} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                            <span className="text-accent">•</span>
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <TooltipProvider>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {publication.links.projectPage ? (
                          <Button asChild variant="outline" size="sm" className="rounded-md" onClick={(e) => e.stopPropagation()}>
                            <a href={publication.links.projectPage} target="_blank" rel="noopener noreferrer">
                              <Globe className="w-4 h-4 mr-2" />
                              Project Page
                            </a>
                          </Button>
                        ) : (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="outline" size="sm" className="rounded-md" disabled onClick={(e) => e.stopPropagation()}>
                                <Globe className="w-4 h-4 mr-2" />
                                Project Page
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent><p>Upcoming</p></TooltipContent>
                          </Tooltip>
                        )}

                        {publication.links.paper ? (
                          <Button asChild variant="outline" size="sm" className="rounded-md" onClick={(e) => e.stopPropagation()}>
                            <a href={publication.links.paper} target="_blank" rel="noopener noreferrer">
                              <FileText className="w-4 h-4 mr-2" />
                              Paper
                            </a>
                          </Button>
                        ) : (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="outline" size="sm" className="rounded-md" disabled onClick={(e) => e.stopPropagation()}>
                                <FileText className="w-4 h-4 mr-2" />
                                Paper
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent><p>Upcoming</p></TooltipContent>
                          </Tooltip>
                        )}

                        {publication.links.code ? (
                          <Button asChild variant="outline" size="sm" className="rounded-md" onClick={(e) => e.stopPropagation()}>
                            <a href={publication.links.code} target="_blank" rel="noopener noreferrer">
                              <Code className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        ) : (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="outline" size="sm" className="rounded-md" disabled onClick={(e) => e.stopPropagation()}>
                                <Code className="w-4 h-4 mr-2" />
                                Code
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent><p>Upcoming</p></TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    </TooltipProvider>
                  </div>

                  {publication.teaserImage && (
                    <div className="flex min-h-56 items-center justify-center border-t border-border bg-muted/40 p-4 md:border-l md:border-t-0">
                      <img
                        src={
                          publication.teaserImage === "nurbgen-teaser"
                            ? nurbgenArchitecture
                            : publication.teaserImage === "dreamcad-teaser"
                            ? dreamCadTeaser
                            : publication.teaserImage === "physics-in-loop-teaser"
                            ? physicsInLoopTeaser
                            : publication.teaserImage === "marvel-teaser"
                            ? marvelTeaser
                            : publication.teaserImage
                        }
                        alt={`${publication.title} preview`}
                        className="max-h-56 w-full rounded-md object-contain"
                      />
                    </div>
                  )}
                </div>
              </Card>
            ))
          )}
        </div>
      </PageSection>
    </div>
  );
};

export default Publications;
