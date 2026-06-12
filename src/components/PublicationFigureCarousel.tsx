import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { cn } from "@/lib/utils";

const figureModules = import.meta.glob("/src/assets/publications/**/*.{png,jpg,jpeg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const figureOrder: Record<string, string[]> = {
  brepclip: [
    "previous_methods",
    "brep_encoder",
    "brepclip",
    "qualitative",
    "classification_score",
    "score_clip_long_brep",
  ],
  dreamcad: [
    "teaser",
    "tessellation",
    "architecture",
    "caption",
    "qual",
    "regularization",
    "metadata",
    "finetuning",
    "topology",
  ],
  nurbgen: [
    "teaser",
    "data_prep_fine_tuning",
    "hybrid_representation",
    "qualitative",
    "caption",
    "complexity",
    "failure_case",
    "ablation_study",
  ],
  "marvel-40m": [
    "teaser",
    "data_annot",
    "qual_data_annot",
    "qual_baselines",
    "metadata",
  ],
  "physics-in-the-loop": [
    "intro-result-1",
    "intro-result-2",
    "intro-result-3",
    "architecture",
    "result-gallery",
    "cad-verification",
    "evocad-comparison",
    "arch-bridge-evolution",
    "double-arch-evolution",
    "iteration-1",
    "iteration-2",
    "iteration-3",
  ],
};

const figureDetails: Record<string, { label: string; caption: string }> = {
  teaser: { label: "Overview", caption: "Overview of the method, dataset, and representative results." },
  previous_methods: { label: "BRep representation", caption: "Face and edge primitives preserve fine CAD details missed by point-based representations." },
  brep_encoder: { label: "BRep encoder", caption: "Separate discrete tokenizers encode BRep faces and edges before transformer aggregation." },
  brepclip: { label: "BRepCLIP framework", caption: "BRep geometry is aligned with frozen CLIP text and image embeddings through contrastive training." },
  qualitative: { label: "Qualitative results", caption: "Representative outputs show improved geometric detail and semantic alignment." },
  classification_score: { label: "Classification results", caption: "Zero-shot classification and BRepCLIP-Score reward prompt-faithful CAD models." },
  score_clip_long_brep: { label: "CAD similarity scores", caption: "Similarity scores decrease consistently as CAD prompts are progressively corrupted." },
  tessellation: { label: "Differentiable tessellation", caption: "Rational Bezier patches are differentiably tessellated for point-level supervision." },
  architecture: { label: "Architecture", caption: "The complete model pipeline from structured input to generated and validated CAD output." },
  caption: { label: "Captioning pipeline", caption: "Metadata-guided captions describe object type, dimensions, parts, and geometric details." },
  qual: { label: "Qualitative results", caption: "Examples across text, image, and point-conditioned CAD generation." },
  regularization: { label: "Regularization study", caption: "VAE reconstruction quality under different geometric regularization settings." },
  metadata: { label: "Metadata analysis", caption: "Metadata augmentation produces more precise, geometry-aware descriptions." },
  finetuning: { label: "Fine-tuning study", caption: "Fine-tuning improves image generation for CAD-focused text prompts." },
  topology: { label: "Topology recovery", caption: "Patch-based outputs are converted into editable hybrid NURBS CAD topology." },
  data_prep_fine_tuning: { label: "Training pipeline", caption: "Part extraction, hybrid CAD encoding, captioning, and LLM fine-tuning workflow." },
  hybrid_representation: { label: "Hybrid representation", caption: "NURBS surfaces and analytic primitives combine into a robust CAD representation." },
  complexity: { label: "Complexity analysis", caption: "PartABC examples span simple, moderate, and complex CAD geometry." },
  failure_case: { label: "Failure cases", caption: "Limitations include complex structures, self-intersections, and engraved text." },
  ablation_study: { label: "Ablation study", caption: "The hybrid model better handles thin regions and geometry near holes." },
  data_annot: { label: "Annotation pipeline", caption: "Multi-view images and metadata produce hierarchical captions for 3D assets." },
  qual_data_annot: { label: "Annotation examples", caption: "MARVEL captions capture more precise object, color, structure, and attribute details." },
  qual_baselines: { label: "Baseline comparison", caption: "Qualitative comparison of generated 3D content against existing approaches." },
  "intro-result-1": { label: "Generated design I", caption: "A generated load-bearing design verified through geometric and structural checks." },
  "intro-result-2": { label: "Generated design II", caption: "A second physics-validated CAD result produced from an engineering load case." },
  "intro-result-3": { label: "Generated design III", caption: "A structurally evaluated CAD design generated by the agentic workflow." },
  "result-gallery": { label: "Result gallery", caption: "Representative designs generated across varied engineering load cases." },
  "cad-verification": { label: "CAD verification", caption: "Comparison with CAD-code generation that lacks integrated physical validation." },
  "evocad-comparison": { label: "EvoCAD comparison", caption: "Qualitative comparison with evolutionary CAD-code generation." },
  "arch-bridge-evolution": { label: "Arch bridge refinement", caption: "Topology optimization and the final editable arch-bridge CAD result." },
  "double-arch-evolution": { label: "Double-arch refinement", caption: "Topology optimization compared with the generated double-arch CAD design." },
  "iteration-1": { label: "Refinement iteration I", caption: "Initial agent-generated design before physics-guided refinement." },
  "iteration-2": { label: "Refinement iteration II", caption: "Intermediate design updated using geometric and FEA feedback." },
  "iteration-3": { label: "Refinement iteration III", caption: "Final refined design after convergence toward the target safety range." },
};

interface PublicationFigureCarouselProps {
  publicationId: string;
  title: string;
  compact?: boolean;
  className?: string;
}

const PublicationFigureCarousel = ({
  publicationId,
  title,
  compact = false,
  className,
}: PublicationFigureCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isEngaged, setIsEngaged] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimer = useRef<number>();

  const figures = useMemo(() => {
    const prefix = `/src/assets/publications/${publicationId}/`;
    const order = figureOrder[publicationId] ?? [];

    return Object.entries(figureModules)
      .filter(([path]) => path.startsWith(prefix))
      .map(([path, src]) => ({
        name: path.slice(prefix.length).replace(/\.[^.]+$/, ""),
        src,
      }))
      .filter((figure) => order.includes(figure.name))
      .sort((a, b) => {
        const aIndex = order.indexOf(a.name);
        const bIndex = order.indexOf(b.name);
        return (aIndex === -1 ? order.length : aIndex) - (bIndex === -1 ? order.length : bIndex);
      });
  }, [publicationId]);

  const showFigure = (index: number) => {
    if (figures.length < 2) return;

    setSelectedIndex((index + figures.length) % figures.length);
    setIsTransitioning(false);
    window.requestAnimationFrame(() => setIsTransitioning(true));
    window.clearTimeout(transitionTimer.current);
    transitionTimer.current = window.setTimeout(() => setIsTransitioning(false), 720);
  };

  useEffect(() => {
    if (!isEngaged || figures.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setSelectedIndex((current) => {
        const next = (current + 1) % figures.length;
        setIsTransitioning(false);
        window.requestAnimationFrame(() => setIsTransitioning(true));
        return next;
      });
    }, 3000);

    return () => window.clearInterval(timer);
  }, [figures.length, isEngaged]);

  useEffect(() => () => window.clearTimeout(transitionTimer.current), []);

  if (figures.length === 0) return null;

  const selectedFigure = figures[selectedIndex];

  return (
    <div
      className={cn(
        "publication-figure group/figures relative overflow-hidden",
        compact ? "h-72 w-full" : "h-[26rem] md:h-[34rem]",
        className,
      )}
      tabIndex={figures.length > 1 ? 0 : undefined}
      aria-label={`${title} paper figures`}
      onMouseEnter={() => setIsEngaged(true)}
      onMouseLeave={() => setIsEngaged(false)}
      onFocusCapture={() => setIsEngaged(true)}
      onBlurCapture={() => setIsEngaged(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          showFigure(selectedIndex - 1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          showFigure(selectedIndex + 1);
        }
      }}
    >
      <div className={cn("publication-figure-stage", isTransitioning && "is-transitioning")}>
        {figures.map((figure, index) => (
          <img
            key={figure.src}
            src={figure.src}
            alt={`${title}, ${figureDetails[figure.name]?.label ?? `figure ${index + 1}`}`}
            loading={index === 0 ? "eager" : "lazy"}
            draggable={false}
            className={cn("publication-figure-slide", index === selectedIndex && "is-active")}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-4 bg-gradient-to-b from-slate-950/65 via-slate-950/20 to-transparent p-3 pb-10 text-white">
        <div className="min-w-0">
          <span className="flex items-center gap-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-cyan-300">
            <Images className="h-3 w-3" />
            Paper figure
          </span>
        </div>
        <span className="shrink-0 rounded-full border border-white/15 bg-slate-950/55 px-2.5 py-1 font-mono text-[0.65rem] font-bold tracking-wider backdrop-blur-md">
          {String(selectedIndex + 1).padStart(2, "0")} / {String(figures.length).padStart(2, "0")}
        </span>
      </div>

      <div className="publication-figure-caption">
        <span>
          <strong className="font-semibold text-foreground">
            {figureDetails[selectedFigure.name]?.label ?? `Figure ${selectedIndex + 1}`}.
          </strong>{" "}
          {figureDetails[selectedFigure.name]?.caption}
        </span>
      </div>

      {figures.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous paper figure"
            className="publication-figure-nav left-3"
            onClick={() => showFigure(selectedIndex - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next paper figure"
            className="publication-figure-nav right-3"
            onClick={() => showFigure(selectedIndex + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="publication-figure-dots">
            {figures.map((figure, index) => (
              <button
                key={figure.src}
                type="button"
                aria-label={`Show ${figureDetails[figure.name]?.label ?? `figure ${index + 1}`}`}
                className={cn("publication-figure-dot", index === selectedIndex && "is-active")}
                onClick={() => showFigure(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PublicationFigureCarousel;
