import PageSection from "@/components/PageSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const blogs = [
  // Add blog posts here
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSection
        title="Blogs"
        subtitle="Thoughts, tutorials, and insights"
      >
        {blogs.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground text-lg">
              Blog posts coming soon! Stay tuned for insights on AI research, 
              3D generation, and software engineering.
            </p>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {blogs.map((blog, index) => (
              <Card key={index} className="p-6 hover:border-accent transition-colors cursor-pointer">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {blog.title}
                </h3>
                <p className="text-card-foreground mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags?.map((tag: string, tagIndex: number) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        )}
      </PageSection>
    </div>
  );
};

export default Blogs;
