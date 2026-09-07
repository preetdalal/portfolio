export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "Python", "TypeScript", "SQL"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring Boot", "FastAPI", "React", "Next.js", "PyTorch", "TensorFlow", "scikit-learn"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Docker", "Kubernetes", "Git", "Linux", "PostgreSQL", "Redis", "Prometheus", "Grafana"]
  }
];

export const AWARDS_DATA = [
  {
    title: "UGEE Rank 53",
    description: "Ranked 53 in the University Grants Entrance Examination"
  }
];
