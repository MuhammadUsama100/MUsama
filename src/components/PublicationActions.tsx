import { useState } from "react";
import {
  Box,
  Check,
  Copy,
  Database,
  FileText,
  Github,
  Globe2,
  Quote,
  ScrollText,
} from "lucide-react";
import { Publication } from "@/data/publications";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface PublicationActionsProps {
  publication: Publication;
  compact?: boolean;
  featuredProject?: boolean;
}

const PublicationActions = ({
  publication,
  compact = false,
  featuredProject = false,
}: PublicationActionsProps) => {
  const [copied, setCopied] = useState(false);
  const size = compact ? "sm" : "default";
  const links = publication.links;

  const copyBibtex = async () => {
    await navigator.clipboard.writeText(publication.bibtex);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const linkActions = [
    links.paper && { label: "Paper", href: links.paper, icon: FileText, color: "text-blue-700 dark:text-blue-300" },
    links.arxiv && { label: "arXiv", href: links.arxiv, icon: ScrollText, color: "text-red-700 dark:text-red-300" },
    links.projectPage && { label: "Project", href: links.projectPage, icon: Globe2, color: "text-cyan-700 dark:text-cyan-300" },
    links.code && { label: "Code", href: links.code, icon: Github, color: "text-foreground" },
    links.dataset && { label: "Dataset", href: links.dataset, icon: Database, color: "text-emerald-700 dark:text-emerald-300" },
    links.model && { label: "Models", href: links.model, icon: Box, color: "text-amber-700 dark:text-amber-300" },
  ].filter(Boolean) as Array<{
    label: string;
    href: string;
    icon: typeof FileText;
    color: string;
  }>;

  return (
    <div className="flex flex-wrap gap-2">
      {linkActions.map(({ label, href, icon: Icon, color }) => (
        <Button
          key={label}
          asChild
          variant={featuredProject && label === "Project" ? "default" : "outline"}
          size={size}
          className="rounded-md"
          onClick={(event) => event.stopPropagation()}
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Icon className={cn("h-4 w-4", featuredProject && label === "Project" ? "" : color)} />
            {label}
          </a>
        </Button>
      ))}

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size={size}
            className="rounded-md"
            onClick={(event) => event.stopPropagation()}
          >
            <Quote className="h-4 w-4 text-violet-700 dark:text-violet-300" />
            BibTeX
          </Button>
        </DialogTrigger>
        <DialogContent
          className="max-w-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <DialogHeader>
            <DialogTitle>BibTeX citation</DialogTitle>
            <DialogDescription>{publication.title}</DialogDescription>
          </DialogHeader>
          <pre className="max-h-[55vh] overflow-auto rounded-md border border-border bg-muted/60 p-4 text-xs leading-relaxed text-foreground">
            <code>{publication.bibtex}</code>
          </pre>
          <DialogFooter>
            <Button type="button" onClick={copyBibtex}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy BibTeX"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PublicationActions;
