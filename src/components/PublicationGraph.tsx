import { Link } from "react-router-dom";
import { publications } from "@/data/publications";
import { Card } from "@/components/ui/card";

const getShortTitle = (title: string) => {
  if (title.startsWith("DreamCAD")) return "DreamCAD";
  if (title.startsWith("Physics-in-the-Loop")) return "Physics-in-the-Loop";
  if (title.startsWith("NURBGen")) return "NURBGen";
  if (title.startsWith("MARVEL")) return "MARVEL-40M+";
  return title;
};

const getDomain = (id: string) =>
  id === "marvel-40m" ? "3D Content Generation" : "CAD Generation";

const domains = [
  {
    title: "3D Content Generation",
    papers: publications.filter((paper) => getDomain(paper.id) === "3D Content Generation"),
    color: "teal",
  },
  {
    title: "CAD Generation",
    papers: publications.filter((paper) => getDomain(paper.id) === "CAD Generation"),
    color: "sky",
  },
];

const colors = {
  teal: {
    section: "border-teal-500/40 bg-teal-500/5 dark:bg-teal-500/10",
    title: "text-teal-700 dark:text-teal-300",
    node: "border-teal-500/40 bg-white/80 hover:bg-teal-50 dark:bg-slate-900/70 dark:hover:bg-teal-500/15",
    line: "bg-teal-500/35",
  },
  sky: {
    section: "border-sky-500/40 bg-sky-500/5 dark:bg-sky-500/10",
    title: "text-sky-700 dark:text-sky-300",
    node: "border-sky-500/40 bg-white/80 hover:bg-sky-50 dark:bg-slate-900/70 dark:hover:bg-sky-500/15",
    line: "bg-sky-500/35",
  },
};

const PublicationGraph = () => {
  return (
    <Card className="hairline-card overflow-hidden">
      <div className="flex flex-col gap-3 border-b border-border/80 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Research Map</p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-foreground">Publication graph</h2>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">All papers grouped by domain.</p>
      </div>

      <div className="bg-muted/30 p-3 dark:bg-slate-950/70">
        <div className="grid gap-3 lg:grid-cols-[0.85fr,1.55fr]">
          {domains.map((domain) => {
            const styles = colors[domain.color as keyof typeof colors];

            return (
              <section key={domain.title} className={`rounded-lg border p-3 ${styles.section}`}>
                <h3 className={`text-sm font-semibold ${styles.title}`}>{domain.title}</h3>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-stretch">
                  {domain.papers.map((paper, index) => (
                    <div key={paper.id} className="flex min-w-0 flex-1 items-center gap-2">
                      {index > 0 && (
                        <span className={`hidden h-px w-5 shrink-0 sm:block ${styles.line}`} aria-hidden="true" />
                      )}
                      <Link
                        to={`/publications/${paper.id}`}
                        className={`block min-h-20 min-w-0 flex-1 rounded-md border px-3 py-2 transition-colors ${styles.node}`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-sm font-semibold leading-snug text-foreground">
                            {getShortTitle(paper.title)}
                          </span>
                          <span className="shrink-0 text-[0.65rem] font-semibold text-muted-foreground">{paper.year}</span>
                        </div>
                        <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          {paper.venue}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default PublicationGraph;
