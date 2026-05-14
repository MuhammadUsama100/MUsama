import { useParams, useNavigate } from "react-router-dom";
import { publications } from "@/data/publications";
import PageSection from "@/components/PageSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, FileText, Globe, Code } from "lucide-react";
import nurbgenArchitecture from "@/assets/nurbgen-architecture.png";
import marvelTeaser from "@/assets/marvel-teaser.png";
import dreamCadTeaser from "@/assets/DreamCad.png";
import physicsInLoopTeaser from "@/assets/Physics_in_loop.png";

const PublicationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const publication = publications.find(p => p.id === id);

  if (!publication) {
    return (
      <div className="min-h-screen bg-background">
        <PageSection title="Publication Not Found" subtitle="">
          <Card className="hairline-card p-8 text-center">
            <p className="text-muted-foreground mb-4">
              The publication you're looking for doesn't exist.
            </p>
            <Button onClick={() => navigate("/publications")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Publications
            </Button>
          </Card>
        </PageSection>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PageSection title={publication.title} subtitle="">
        <Button
          variant="ghost"
          onClick={() => navigate("/publications")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Publications
        </Button>

        <Card className="hairline-card p-5 md:p-8">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="rounded-md">{publication.venue}</Badge>
              {publication.status && (
                <Badge className="rounded-md" variant={publication.status === "In Review" || publication.status === "Preprint" ? "outline" : "default"}>
                  {publication.status}
                </Badge>
              )}
            </div>
            
            <p className="mb-4 text-muted-foreground">
              {publication.authors.split(", ").map((author, idx) => (
                <span key={idx}>
                  {author === "Usama, M." || author === "Muhammad Usama" ? (
                    <span className="font-semibold text-accent">{author}</span>
                  ) : (
                    author
                  )}
                  {idx < publication.authors.split(", ").length - 1 && ", "}
                </span>
              ))}
            </p>

            <div className="flex gap-3 mb-6">
              {publication.links.projectPage && (
                <Button asChild variant="default">
                  <a href={publication.links.projectPage} target="_blank" rel="noopener noreferrer">
                    <Globe className="w-4 h-4 mr-2" />
                    Project Page
                  </a>
                </Button>
              )}
              {publication.links.paper && (
                <Button asChild variant="outline">
                  <a href={publication.links.paper} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4 mr-2" />
                    Paper
                  </a>
                </Button>
              )}
              {publication.links.code && (
                <Button asChild variant="outline">
                  <a href={publication.links.code} target="_blank" rel="noopener noreferrer">
                    <Code className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {publication.teaserImage && (
            <div className="mb-6">
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
                alt={`${publication.title} teaser`}
                className="w-full rounded-md border border-border object-contain"
              />
            </div>
          )}

          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Key Contributions</h3>
            <ul className="space-y-2">
              {publication.contributions.map((contribution, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-muted-foreground">{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          {publication.abstract && (
            <div className="mt-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">Abstract</h3>
              <p className="leading-relaxed text-muted-foreground">
                {publication.abstract}
              </p>
            </div>
          )}

          {publication.methodology && (
            <div className="mt-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">Methodology</h3>
              <p className="leading-relaxed text-muted-foreground">
                {publication.methodology}
              </p>
            </div>
          )}

          {publication.results && (
            <div className="mt-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">Results</h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                {publication.results}
              </p>
              
              {publication.id === "nurbgen" && (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Model</TableHead>
                        <TableHead className="text-center font-semibold">User (1k) ↑</TableHead>
                        <TableHead className="text-center font-semibold">GPT ↑</TableHead>
                        <TableHead className="text-center font-semibold">IR ↓</TableHead>
                        <TableHead className="text-center font-semibold">CD ↓</TableHead>
                        <TableHead className="text-center font-semibold">HD ↓</TableHead>
                        <TableHead className="text-center font-semibold">JSD ↓</TableHead>
                        <TableHead className="text-center font-semibold">MMD ↓</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Undecided</TableCell>
                        <TableCell className="text-center">2.7</TableCell>
                        <TableCell className="text-center">3.2</TableCell>
                        <TableCell className="text-center">–</TableCell>
                        <TableCell className="text-center">–</TableCell>
                        <TableCell className="text-center">–</TableCell>
                        <TableCell className="text-center">–</TableCell>
                        <TableCell className="text-center">–</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">GPT-4o</TableCell>
                        <TableCell className="text-center">1.5</TableCell>
                        <TableCell className="text-center">1.9</TableCell>
                        <TableCell className="text-center">0.17</TableCell>
                        <TableCell className="text-center">7.2</TableCell>
                        <TableCell className="text-center">0.36</TableCell>
                        <TableCell className="text-center">72.87</TableCell>
                        <TableCell className="text-center">4.17</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">DeepCAD</TableCell>
                        <TableCell className="text-center">5.6</TableCell>
                        <TableCell className="text-center">6.1</TableCell>
                        <TableCell className="text-center">0.32</TableCell>
                        <TableCell className="text-center">10.28</TableCell>
                        <TableCell className="text-center">0.45</TableCell>
                        <TableCell className="text-center">89.77</TableCell>
                        <TableCell className="text-center">4.43</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Text2CAD</TableCell>
                        <TableCell className="text-center">26.1</TableCell>
                        <TableCell className="text-center">27.2</TableCell>
                        <TableCell className="text-center">0.05</TableCell>
                        <TableCell className="text-center">9.66</TableCell>
                        <TableCell className="text-center">0.42</TableCell>
                        <TableCell className="text-center">85.27</TableCell>
                        <TableCell className="text-center">4.54</TableCell>
                      </TableRow>
                      <TableRow className="bg-primary/5">
                        <TableCell className="font-bold">NURBGen</TableCell>
                        <TableCell className="text-center font-bold">64.1</TableCell>
                        <TableCell className="text-center font-bold">61.6</TableCell>
                        <TableCell className="text-center font-bold">0.018</TableCell>
                        <TableCell className="text-center font-bold">4.43</TableCell>
                        <TableCell className="text-center font-bold">0.25</TableCell>
                        <TableCell className="text-center font-bold">57.94</TableCell>
                        <TableCell className="text-center font-bold">2.14</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <p className="text-sm text-muted-foreground mt-4">
                    Note: CD, JSD, and MMD values are multiplied by 10². ↑ indicates higher is better, ↓ indicates lower is better.
                  </p>
                </div>
              )}
            </div>
          )}
        </Card>
      </PageSection>
    </div>
  );
};

export default PublicationDetail;
