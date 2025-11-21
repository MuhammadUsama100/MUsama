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
import nurbgenArchitecture from "@/assets/nurbgen-architecture.png";
import marvelTeaser from "@/assets/marvel-teaser.png";

const Publications = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPublications = publications.filter((pub) =>
    pub.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const highlightName = (text: string) => {
    const parts = text.split(/(Usama, M\.)/g);
    return parts.map((part, index) =>
      part === "Usama, M." ? (
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
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search publications by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-8">
          {filteredPublications.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">
                No publications found matching "{searchQuery}"
              </p>
            </Card>
          ) : (
            filteredPublications.map((publication) => (
              <Card
                key={publication.id}
                className="p-6 hover:border-accent transition-colors cursor-pointer"
                onClick={() => navigate(`/publications/${publication.id}`)}
              >
                <div className="flex gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary">{publication.venue}</Badge>
                      {publication.status && (
                        <Badge variant={publication.status === "In Review" ? "outline" : "default"}>
                          {publication.status}
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-2xl font-semibold text-primary mb-2">
                      {publication.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      {highlightName(publication.authors)}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Key Contributions:
                      </h4>
                      <ul className="space-y-1">
                        {publication.contributions.map((contribution, idx) => (
                          <li key={idx} className="text-sm text-card-foreground flex gap-2">
                            <span className="text-accent">•</span>
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <TooltipProvider>
                      <div className="flex gap-3">
                        {publication.links.projectPage ? (
                          <Button asChild variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
                            <a href={publication.links.projectPage} target="_blank" rel="noopener noreferrer">
                              <Globe className="w-4 h-4 mr-2" />
                              Project Page
                            </a>
                          </Button>
                        ) : (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="outline" size="sm" disabled onClick={(e) => e.stopPropagation()}>
                                <Globe className="w-4 h-4 mr-2" />
                                Project Page
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent><p>Upcoming</p></TooltipContent>
                          </Tooltip>
                        )}

                        {publication.links.paper ? (
                          <Button asChild variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
                            <a href={publication.links.paper} target="_blank" rel="noopener noreferrer">
                              <FileText className="w-4 h-4 mr-2" />
                              Paper
                            </a>
                          </Button>
                        ) : (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="outline" size="sm" disabled onClick={(e) => e.stopPropagation()}>
                                <FileText className="w-4 h-4 mr-2" />
                                Paper
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent><p>Upcoming</p></TooltipContent>
                          </Tooltip>
                        )}

                        {publication.links.code ? (
                          <Button asChild variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
                            <a href={publication.links.code} target="_blank" rel="noopener noreferrer">
                              <Code className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        ) : (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="outline" size="sm" disabled onClick={(e) => e.stopPropagation()}>
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
                    <div className="w-96 h-64 flex-shrink-0">
                      <img
                        src={
                          publication.teaserImage === "nurbgen-teaser"
                            ? nurbgenArchitecture
                            : publication.teaserImage === "marvel-teaser"
                            ? marvelTeaser
                            : publication.teaserImage
                        }
                        alt={`${publication.title} preview`}
                        className="w-full h-full object-contain rounded-lg border border-border"
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
