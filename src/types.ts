export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'motion' | 'editorial' | 'code';
  categoryLabel: string;
  tool: string;
  badge?: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  specs?: {
    resolution?: string;
    frameRate?: string;
    aspectRatio?: string;
    software?: string;
    deliverable?: string;
  };
  liveDemoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Service {
  number: string;
  title: string;
  tags: string;
  description: string;
}

export interface SkillGroup {
  number: string;
  title: string;
  icon: string;
  skills: {
    name: string;
    description: string;
    featured?: boolean;
    quote?: boolean;
  }[];
}

export interface ProcessStep {
  number: string;
  stageCode: string;
  title: string;
  description: string;
  footerTag: string;
}

export interface CodeRepo {
  number: string;
  badge: string;
  name: string;
  description: string;
  techTag: string;
  githubUrl: string;
  borderAccent: string;
}
