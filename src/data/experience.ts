import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "CitiusTech",
    client: "Mayo Clinic",
    role: "MLOps Engineer",
    period: "2023 — Present",
    logo: "/images/mayo_clinic_logo.jpeg",
    bullets: [
      "Built 3 production-grade clinical summarization APIs using FastAPI, serving real-time requests in regulated healthcare environments.",
      "Cut LLM latency from ~60s to <30s via pipeline optimization, including prompt restructuring and model configuration tuning.",
      "Implemented LLM-as-a-Judge evaluation using Vertex AI EvalTask + MLflow for systematic quality assessment of model outputs.",
      "Enabled sub-second delivery with Redis caching and Pub/Sub invalidation, reducing redundant LLM calls by 40%.",
      "Added distributed tracing, structured logging, and streaming responses for production observability and debugging.",
      "Contributed an open-source fix to MLflow for Vertex AI model support, merged into the main repository.",
    ],
    technologies: [
      "FastAPI",
      "Vertex AI",
      "MLflow",
      "Redis",
      "Pub/Sub",
      "Docker",
      "GCP",
      "Python",
    ],
  },
  {
    company: "Raven Risk AI",
    role: "Data Science Engineer",
    period: "2022 — 2023",
    logo: "/images/raven_risk_logo.jpeg",
    bullets: [
      "Built and optimized RAG systems, improving retrieval efficiency by 22% through architectural improvements.",
      "Designed hybrid retrieval (dense + BM25 + late interaction), boosting relevance by 16% on benchmark evaluations.",
      "Implemented ensemble retrievers, rerankers, and RAG evaluation using RAGAS for systematic quality tracking.",
      "Developed AI agents and automation workflows with LangGraph for complex multi-step reasoning tasks.",
    ],
    technologies: [
      "LangChain",
      "LangGraph",
      "Qdrant",
      "Pinecone",
      "Python",
      "RAGAS",
      "AWS",
    ],
  },
];
