import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohan Routh — AI / Machine Learning Engineer",
  description:
    "Data Science & MLOps Engineer building production-grade LLM systems across healthcare and finance. Specializing in RAG pipelines, low-latency APIs, and evaluation frameworks.",
  keywords: [
    "Machine Learning Engineer",
    "MLOps",
    "LLM",
    "RAG",
    "AI Engineer",
    "FastAPI",
    "Vertex AI",
  ],
  authors: [{ name: "Rohan Routh" }],
  openGraph: {
    title: "Rohan Routh — AI / Machine Learning Engineer",
    description:
      "Building production-grade LLM systems across healthcare and finance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-zinc-950 font-sans text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
