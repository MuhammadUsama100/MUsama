import nurbgenArchitecture from "@/assets/nurbgen-architecture.png";
import marvelTeaser from "@/assets/marvel-teaser.png";

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  status?: "In Review" | "Published" | "Preprint" | "Accepted";
  contributions: string[];
  abstract?: string;
  methodology?: string;
  results?: string;
  links: {
    paper?: string;
    projectPage?: string;
    code?: string;
  };
  teaserImage?: string;
}

const publicationItems: Publication[] = [
  {
    id: "physics-in-the-loop",
    title: "Physics-in-the-Loop: A Hybrid Agentic Architecture for Autonomous CAD Engineering Design",
    authors: "Elias Berger, Muhammad Usama, Jan Mehlstäubl, Bernhard Saske, Kristin Paetzold-Byhain",
    venue: "IJCAI 2026",
    year: 2026,
    status: "Accepted",
    contributions: [
      "Proposed a hybrid agentic-physical architecture that embeds validated engineering tools directly into autonomous CAD design loops.",
      "Formulated generative CAD as a closed-loop Generate-Simulate-Refine process guided by explicit physical verification.",
      "Introduced a benchmark dataset and functional metrics for evaluating load-bearing CAD generation beyond geometric similarity.",
      "Improved generated design complexity by 4.2x while increasing compile rate by 3.5% compared with similar agentic methods."
    ],
    abstract: "Large Language Models can generate CAD code and parametric designs, but they do not inherently understand the physical constraints required for reliable engineering design. Physics-in-the-Loop proposes a hybrid agentic architecture that connects LLM/VLM agents with validated knowledge-based engineering tools, allowing generated CAD designs to be checked and revised using deterministic geometry and finite-element feedback.",
    methodology: "The system is built as a multi-agent Generate-Simulate-Refine loop. A planner interprets structured load cases, a CAD engineer generates executable CadQuery code, a geometry reviewer checks design-space compliance and connectivity, and a structural reviewer runs physics-based FEA to evaluate safety factor, stress hotspots, and overbuilt designs. Feedback from these reviewers is routed back into the planning and CAD generation loop until the design satisfies deterministic geometric and physical checks.",
    results: "The accepted IJCAI-ECAI 2026 AI4Tech paper shows that physics-based feedback substantially improves functional validity in generative CAD. The system generates more complex and physically verified engineering designs, achieving a 4.2x increase in structural complexity and a 3.5% compile-rate improvement compared with similar agentic methods. Ablations show that FEA feedback helps designs converge toward target safety factors, while planner and reviewer agents reduce iteration count and improve reliability.",
    links: {},
    teaserImage: "physics-in-loop-teaser"
  },
  {
    id: "dreamcad",
    title: "DreamCAD: Scaling Multi-modal CAD Generation using Differentiable Parametric Surfaces",
    authors: "Muhammad Sadil Khan, Muhammad Usama, Rolandos Alexandros Potamias, Didier Stricker, Muhammad Zeshan Afzal, Jiankang Deng, Ismail Elezi",
    venue: "arXiv 2026",
    year: 2026,
    status: "Preprint",
    contributions: [
      "Introduced DreamCAD, a multimodal framework for editable CAD generation from text, images, and point clouds.",
      "Represented shapes as C0-continuous rational Bezier patches with differentiable tessellation for scalable point-level supervision.",
      "Released CADCap-1M, a 1M+ caption dataset generated with GPT-5 for scalable text-to-CAD research.",
      "Achieved state-of-the-art results across Text2CAD, Image2CAD, and Point2CAD tasks with over 75% user preference."
    ],
    abstract: "DreamCAD addresses the scalability challenge in multimodal CAD generation by moving away from small design-history datasets and non-differentiable BRep topology. It represents shapes as C0-continuous rational Bezier patches that can be differentiably tessellated, allowing training from large-scale unannotated 3D meshes using point-level supervision. The generated surfaces are exportable as STEP files and editable in standard CAD software.",
    methodology: "DreamCAD uses a sparse voxel representation enriched with visual and geometric features to learn structured 3D latents. An initial parametric surface is created by removing internal voxel quads through flood fill and converting the exposed quads into bicubic rational Bezier patches. A parametric decoder then refines control points and weights while preserving shared boundaries for C0 continuity. Conditional generation follows a coarse-to-fine flow-matching pipeline for image and point inputs, while text-to-CAD uses a text-to-image stage followed by image-to-CAD generation.",
    results: "DreamCAD achieves state-of-the-art performance across point-, image-, and text-conditioned CAD generation on ABC and Objaverse. It reduces Chamfer Distance by up to 70% in point-to-CAD, reaches zero invalidity ratio in reported settings, and surpasses 75% preference in expert and GPT-based evaluations for text and image-to-CAD. The work also demonstrates topology recovery from DreamCAD outputs, suggesting a path toward production-ready CAD generation.",
    links: {
      projectPage: "https://sadilkhan.github.io/dreamcad2026/",
      paper: "https://arxiv.org/abs/2603.05607"
    },
    teaserImage: "dreamcad-teaser"
  },
  {
    id: "nurbgen",
    title: "NURBGen: High-Fidelity Text-to-CAD Generation through LLM-Driven NURBS Modeling",
    authors: "Muhammad Usama *, Mohammad Sadil Khan *, Didier Stricker, Muhammad Zeshan Afzal",
    venue: "AAAI 2026",
    year: 2026,
    status: "Published",
    contributions: [
      "First LLM-driven NURBS-based Text-to-CAD framework.",
      "Introduced PartABC, a 300K multi-modal CAD dataset with NURBS and captions.",
      "Proposed hybrid analytic–NURBS representation for robust CAD generation.",
      "Achieved state-of-the-art fidelity on CAD generation benchmarks."
    ],
    abstract: "Generating editable 3D CAD models from natural language remains challenging, as existing text-to-CAD systems either produce meshes or rely on scarce design-history data. We present NURBGen, the first framework to generate high-fidelity 3D CAD models directly from text using Non-Uniform Rational B-Splines (NURBS). To achieve this, we fine-tune a large language model (LLM) to translate free-form texts into JSON representations containing NURBS surface parameters (i.e, control points, knot vectors, degrees, and rational weights) which can be directly converted into BRep format using Python.",
    methodology: "We fine-tune Qwen3-4B model using AdamW optimizer with a learning rate of 5×10⁻⁵. LoRA is applied with rank 64 and α=128. Training runs for 180k steps with batch size 1 on 4×H200 GPUs. We propose a hybrid representation that combines untrimmed NURBS with analytic primitives to handle trimmed surfaces and degenerate regions more robustly. We introduce partABC, a curated subset of the ABC dataset consisting of 300k individual CAD components, annotated with detailed captions using an automated annotation pipeline.",
    results: "NURBGen outperforms prior baselines by significant margins in both geometric and visual alignment. We achieve 64.1% top-1 preference in human evaluation and 61.6% in GPT-4o evaluation. The model achieves the lowest invalidity ratio (0.018), indicating strong geometric correctness. On geometric metrics, NURBGen achieves CD: 4.43×10², HD: 0.25, JSD: 57.94×10², and MMD: 2.14×10², significantly outperforming Text2CAD, DeepCAD, and GPT-4o baselines.",
    links: {
      paper: "https://arxiv.org/abs/2511.06194"
    },
    teaserImage: "nurbgen-teaser"
  },
  {
    id: "marvel-40m",
    title: "MARVEL-40M+: Multi-Level Visual Elaboration for High-Fidelity Text-to-3D Content Creation",
    authors: "Sankalp Sinha *, Mohammad Sadil Khan *, Muhammad Usama, Shino Sam, Didier Stricker, Sk Aziz Ali, Muhammad Zeshan Afzal",
    venue: "CVPR 2025",
    year: 2025,
    status: "Published",
    contributions: [
      "Introduced the largest 3D captioning dataset (40M+ annotations, 8.9M assets).",
      "Proposed multi-level annotation structure for fine-to-coarse 3D understanding.",
      "Integrated domain-specific metadata to reduce VLM hallucinations.",
      "Developed MARVEL-FX3D, a two-stage text-to-3D generation pipeline."
    ],
    abstract: "MARVEL-40M+ is a large-scale 3D captioning dataset with over 40M+ captions for ~9M 3D models, featuring high-quality, domain-specific, and multi-level text descriptions of 3D assets from 7 datasets (Objaverse, Shapenet, Pix3D, ABO, OmniObject3D, Toys4K, GSO). We introduce a multi-stage pipeline for automatic 3D captioning that starts with human metadata and rendered multi-view images to create detailed visual descriptions using InternVL2, which are then processed by Qwen2 into five hierarchical levels.",
    methodology: "Our multi-level annotation framework introduces a hierarchical visual elaboration strategy, enabling flexible descriptions of 3D reconstructions at varying levels of detail. We adopt a progressive prompting approach that allows models to generate context-aware outputs. We leverage user-generated metadata from source datasets to enrich descriptions with relevant semantics. MARVEL-FX3D finetunes Stable Diffusion 3.5 on MARVEL captions of Objaverse dataset and uses pretrained Stable Fast 3D to generate a textured mesh in 15s.",
    results: "MARVEL-40M+ provides multi-level annotations spanning from detailed descriptions for fine-grained 3D reconstruction to concise tags for quick modeling. The dataset incorporates domain-specific information to reduce VLM hallucinations. MARVEL-FX3D demonstrates high-fidelity text-to-3D generation with improved quality and speed compared to existing methods. The annotations achieve an estimated accuracy of ~85% as validated by GPT-4o across 1,000 sampled captions.",
    links: {
      projectPage: "https://sankalpsinha-cmos.github.io/MARVEL",
      paper: "https://openaccess.thecvf.com/content/CVPR2025/html/Sinha_MARVEL-40M_Multi-Level_Visual_Elaboration_for_High-Fidelity_Text-to-3D_Content_Creation_CVPR_2025_paper.html",
      code: "https://github.com/SadilKhan/MARVEL-FX3D"
    },
    teaserImage: "marvel-teaser"
  }
];

const getMuhammadUsamaAuthorPosition = (authors: string) => {
  const authorList = authors.split(",").map((author) => author.trim());
  const index = authorList.findIndex((author) => author.includes("Muhammad Usama"));
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
};

export const publications: Publication[] = [...publicationItems].sort((a, b) => {
  const priority: Record<string, number> = {
    nurbgen: 0,
    dreamcad: 1,
  };

  const priorityDiff = (priority[a.id] ?? 100) - (priority[b.id] ?? 100);

  if (priorityDiff !== 0) {
    return priorityDiff;
  }

  const authorPositionDiff = getMuhammadUsamaAuthorPosition(a.authors) - getMuhammadUsamaAuthorPosition(b.authors);

  if (authorPositionDiff !== 0) {
    return authorPositionDiff;
  }

  return b.year - a.year;
});
