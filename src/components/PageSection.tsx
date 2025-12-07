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
    <section className={cn("py-8 md:py-16", className)}>
      <div className="container max-w-4xl px-4">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 md:mb-3">{title}</h1>
          {subtitle && <p className="text-base md:text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default PageSection;
