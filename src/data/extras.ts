import { WritingPost, OpenSourceContribution, Certification } from "@/types";

export const writingPosts: WritingPost[] = [
  // Add your blog posts and articles here
  // {
  //   title: "Building Production RAG Systems: Lessons Learned",
  //   url: "https://linkedin.com/in/rohanrouth/...",
  //   platform: "LinkedIn",
  //   date: "2024",
  // },
];

export const openSourceContributions: OpenSourceContribution[] = [
  {
    project: "MLflow",
    description:
      "Contributed a fix for Vertex AI model support, enabling proper integration between MLflow tracking and Google Cloud Vertex AI models.",
    url: "https://github.com/mlflow/mlflow",
  },
  // Add more contributions here
];

export const certifications: Certification[] = [
  {
    name: "Google Cloud Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    date: "2025",
    url: "https://www.credly.com/badges/5a726de8-82be-472f-8d56-d22e435817e2/public_url",
    badge: "/images/image.png",
  },
];
