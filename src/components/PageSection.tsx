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
    <section className={cn("py-10 md:py-16", className)}>
      <div className="container max-w-5xl px-4">
        <div className="mb-8 border-b border-border/80 pb-6 md:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Portfolio</p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">{title}</h1>
          {subtitle && <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default PageSection;
