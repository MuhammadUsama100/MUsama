import PageSection from "@/components/PageSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, FileText } from "lucide-react";

const articles = [
  {
    title: "Controllable Style Transfer for Pose-Guided Human Image Generation Using Diffusion",
    type: "Seminar",
    authors: "Muhammad Usama, Muhammad Saif Ullah Khan",
    date: "2024",
    excerpt: "This seminar explores advancements in pose-guided human image generation using diffusion models, highlighting their superior performance over traditional GAN-based methods. Diffusion models, such as DALL-E 2 and Imagen, achieve high-fidelity and semantically accurate images by progressively refining noisy images. The seminar also discusses controllable style transfer techniques that integrate diverse styles while maintaining pose accuracy. Recent studies demonstrate the effectiveness of these models in addressing challenges like occlusions and complex deformations, making them a robust choice for applications in digital art, fashion, and computer vision.",
    tags: ["Diffusion Models", "Pose-Guided Generation", "Style Transfer", "Human Image Generation", "Computer Vision"],
    pdfComingSoon: true,
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSection
        title="Articles"
        subtitle="Seminars, notes, and research writeups"
      >
        {articles.length === 0 ? (
          <Card className="hairline-card p-12 text-center">
            <p className="text-muted-foreground text-lg">
              Articles coming soon! Stay tuned for insights on AI research,
              3D generation, and software engineering.
            </p>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article, index) => (
              <Card key={index} className="hairline-card p-6 transition-colors hover:border-accent">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {article.title}
                </h3>
                <p className="mb-1 text-sm font-medium text-accent">
                  {article.type} · {article.authors}
                </p>
                <p className="mb-4 text-muted-foreground">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags?.map((tag: string, tagIndex: number) => (
                    <Badge key={tagIndex} variant="secondary" className="rounded-md">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {article.pdfComingSoon && (
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                    className="mt-4 gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    PDF Coming Soon
                  </Button>
                )}
              </Card>
            ))}
          </div>
        )}
      </PageSection>
    </div>
  );
};

export default Blogs;
