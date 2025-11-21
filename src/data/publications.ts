import nurbgenArchitecture from "@/assets/nurbgen-architecture.png";
import marvelTeaser from "@/assets/marvel-teaser.png";

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  status?: "In Review" | "Published";
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

export const publications: Publication[] = [
  {
    id: "nurbgen",
    title: "NURBGen: High-Fidelity Text-to-CAD Generation through LLM-Driven NURBS Modeling",
    authors: "Muhammad Usama, Mohammad Sadil Khan, Didier Stricker, Muhammad Zeshan Afzal",
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
    authors: "Sankalp Sinha, Mohammad Sadil Khan, Muhammad Usama, Shino Sam, Didier Stricker, Sk Aziz Ali, Muhammad Zeshan Afzal",
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
