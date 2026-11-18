export type ProjectCategory = 
  | 'All Projects'
  | 'Artificial Intelligence'
  | 'Machine Learning'
  | 'Generative AI'
  | 'Full-Stack Development'
  | 'Data Science';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  secondaryCategories?: ProjectCategory[];
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  features?: string[];
  architecture?: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured?: boolean;
  image?: string;
  badge?: string;
}

export type SkillCategory = 
  | 'Programming'
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'Artificial Intelligence and Machine Learning'
  | 'Cybersecurity and Ethical Hacking'
  | 'Cloud and DevOps'
  | 'Developer Tools';

export interface SkillItem {
  name: string;
  proficiencyLevel: 'Fundamental' | 'Proficient' | 'Advanced' | 'Practical Exposure';
  description?: string;
  iconName?: string;
  highlight?: boolean;
}

export interface SkillGroup {
  category: SkillCategory;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  degree: string;
  period: string;
  score?: string;
  scoreLabel?: string;
  description?: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isPlaceholderPeriod?: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  durationOrScore: string;
  credentialId?: string;
  pdfPath?: string;
  topics?: string[];
  summary: string;
  badgeText: string;
}
