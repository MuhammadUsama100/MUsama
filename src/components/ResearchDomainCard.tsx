import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ResearchDomainCardProps {
  title: string;
  relatedWork: string[];
}

const ResearchDomainCard = ({ title, relatedWork }: ResearchDomainCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 w-full h-48"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500 transform-style-3d",
          isFlipped && "rotate-y-180"
        )}
      >
        {/* Front Side */}
        <Card
          className={cn(
            "absolute inset-0 backface-hidden flex items-center justify-center p-6 bg-card border-accent/20 hover:border-accent/50 transition-colors",
            "cursor-pointer"
          )}
        >
          <h3 className="text-lg font-semibold text-primary text-center">{title}</h3>
        </Card>

        {/* Back Side */}
        <Card
          className={cn(
            "absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center p-6 bg-accent/10 border-accent",
            "cursor-pointer"
          )}
        >
          <h4 className="text-sm font-semibold text-accent mb-3">Related Work:</h4>
          <ul className="space-y-1 text-sm text-foreground text-center">
            {relatedWork.map((work, index) => (
              <li key={index} className="text-muted-foreground">
                {work}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default ResearchDomainCard;
