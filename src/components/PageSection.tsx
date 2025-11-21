import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const PageSection = ({ title, subtitle, children, className }: PageSectionProps) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-3">{title}</h1>
          {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default PageSection;
