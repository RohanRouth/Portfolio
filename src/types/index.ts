export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  about: string;
  email: string;
  location: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  highlights: { label: string; value: string }[];
}

export interface Experience {
  company: string;
  client?: string;
  role: string;
  period: string;
  logo?: string;
  bullets: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  problem: string;
  architecture: string;
  technologies: string[];
  impact: string;
  link?: string;
  github?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface WritingPost {
  title: string;
  url: string;
  platform: string;
  date: string;
}

export interface OpenSourceContribution {
  project: string;
  description: string;
  url: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  badge?: string;
}
