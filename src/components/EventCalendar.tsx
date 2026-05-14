import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface Event {
  date: string;
  title: string;
  description: string;
}

interface EventCalendarProps {
  events: Event[];
}
const EventCalendar = ({ events }: EventCalendarProps) => {
  return (
    <Card className="hairline-card p-6">
      <div className="mb-5 flex items-center gap-2">
        <Calendar className="h-4 w-4 text-accent" />
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Updates</h3>
      </div>
      
      <div className="space-y-1">
        {events.map((event, index) => (
          <div 
            key={index}
            className="border-l border-border py-3 pl-4 transition-colors hover:border-accent"
          >
            <span className="text-xs font-semibold text-muted-foreground">
              {event.date}
            </span>
            <div className="mt-1 min-w-0">
              <p className="break-words text-sm leading-relaxed text-foreground">
                <span className="font-semibold">{event.title}</span>
                {event.description && (
                  <span className="text-muted-foreground"> {event.description}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default EventCalendar;
