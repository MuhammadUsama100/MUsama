import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageSection from "@/components/PageSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { publications } from "@/data/publications";
import PublicationGraph from "@/components/PublicationGraph";
import PublicationFigureCarousel from "@/components/PublicationFigureCarousel";
import PublicationActions from "@/components/PublicationActions";

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
                <div className="grid gap-0 md:grid-cols-[minmax(20rem,34%)_minmax(0,1fr)]">
                  <div className="order-2 min-w-0 p-5 md:p-6">
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

                    <PublicationActions publication={publication} compact />
                  </div>

                  <div
                    className="order-1 flex min-w-0 items-center border-b border-border bg-muted/40 py-4 md:border-b-0 md:border-r"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <PublicationFigureCarousel
                      publicationId={publication.id}
                      title={publication.title}
                      compact
                    />
                  </div>
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
