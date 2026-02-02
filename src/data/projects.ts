import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Clinical Summarization API",
    problem:
      "Healthcare providers needed real-time clinical document summarization with strict latency and compliance requirements.",
    architecture:
      "FastAPI service with streaming responses, Redis caching layer, Pub/Sub for cache invalidation, and Vertex AI for LLM inference. Distributed tracing via OpenTelemetry for production observability.",
    technologies: ["FastAPI", "Vertex AI", "Redis", "Pub/Sub", "Docker", "GCP"],
    impact:
      "Reduced LLM latency by 50% (60s → <30s). Serves production traffic for clinical workflows at Mayo Clinic.",
  },
  {
    title: "Hybrid RAG Retrieval System",
    problem:
      "Standard semantic search had low relevance for domain-specific financial documents, leading to poor LLM answer quality.",
    architecture:
      "Hybrid retrieval combining dense embeddings, BM25 sparse retrieval, and late interaction models. Ensemble reranking pipeline with RAGAS-based evaluation for continuous quality monitoring.",
    technologies: ["LangChain", "Qdrant", "Pinecone", "RAGAS", "Python"],
    impact:
      "22% improvement in retrieval efficiency, 16% boost in relevance scores on benchmark evaluations.",
  },
  {
    title: "LLM Evaluation Framework",
    problem:
      "No systematic way to evaluate LLM output quality across prompt variations and model configurations.",
    architecture:
      "LLM-as-a-Judge pipeline using Vertex AI EvalTask with MLflow tracking. Automated evaluation runs across multiple dimensions (accuracy, coherence, safety) with versioned experiment tracking.",
    technologies: ["Vertex AI", "MLflow", "Python", "FastAPI"],
    impact:
      "Enabled data-driven model selection and prompt optimization. Reduced evaluation cycle time from days to hours.",
  },
  {
    title: "AI Agent Workflows",
    problem:
      "Complex multi-step reasoning tasks required orchestration beyond simple prompt chaining.",
    architecture:
      "LangGraph-based agent framework with stateful execution graphs, tool integration, and conditional branching for multi-step reasoning workflows.",
    technologies: ["LangGraph", "LangChain", "Python", "Redis"],
    impact:
      "Automated complex workflows that previously required manual intervention, reducing processing time by 60%.",
  },
];
