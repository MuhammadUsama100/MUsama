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
    <Card className="p-6 bg-card border-accent/20">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="h-5 w-5 text-primary" />
        <h3 className="text-2xl font-bold text-primary">Recent Events</h3>
      </div>
      
      <div className="space-y-4">
        {events.map((event, index) => (
          <div 
            key={index}
            className="p-4 rounded-lg bg-muted/30 border border-accent/20 hover:border-accent/50 transition-colors"
          >
            <div className="flex items-start gap-3">
              {/* DATE: Keep the date small and non-shrinking */}
              <span className="text-xs font-semibold text-accent shrink-0">
                [{event.date}]
              </span>
              
              {/* CONTENT AREA: Must have min-w-0 to allow shrinking */}
              <div className="flex-1 min-w-0">
                {/* TEXT WRAPPER: Use text-sm for smaller font and ensure wrapping/breaking */}
                <p className="text-sm text-foreground break-words">
                  <span className="font-semibold">{event.title}</span>
                  {event.description && (
                    <span className="text-muted-foreground"> {event.description}</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default EventCalendar;
