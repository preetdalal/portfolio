export type TechItem = { name: string };
export type TechCategory = { label: string; items: TechItem[] };

export const techStack: TechCategory[] = [
  {
    label: "DevOps & Cloud",
    items: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Linux" },
      { name: "Prometheus" },
      { name: "Grafana" },
      { name: "Render" },
      { name: "Vercel" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Spring Boot" },
      { name: "FastAPI" },
      { name: "Spring Security (JWT)" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "Flyway" },
    ],
  },
  {
    label: "Languages",
    items: [{ name: "Java" }, { name: "Python" }, { name: "TypeScript" }],
  },
  {
    label: "AI / ML",
    items: [
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "scikit-learn" },
      { name: "OpenCV" },
    ],
  },
];

export const buildingToward: string[] = [
  "CI/CD pipelines (GitHub Actions)",
  "Multi-service Kubernetes: ingress, secrets management",
  "Infrastructure as code",
  "Cloud platforms beyond free-tier hosts (AWS / GCP fundamentals)",
];

export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  problem: string;
  decisions: string[];
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "fraudguard-ai",
    name: "FraudGuard AI",
    oneLiner:
      "Multi-channel fraud and phishing detection platform analyzing SMS, email, and URLs in real time.",
    problem:
      "Fraud and phishing attempts arrive through several channels at once. FraudGuard AI unifies detection for SMS smishing, phishing email, and malicious URLs behind a single service, with confidence scoring per request.",
    decisions: [
      "FastAPI backend and React frontend run as separate services on Kubernetes",
      "A Horizontal Pod Autoscaler tracks memory utilization to absorb bursty inference traffic",
      "A /metrics endpoint is scraped by Prometheus and visualized in Grafana",
      "Detection uses TF-IDF classifiers for SMS/email and a Random Forest model for malicious URLs",
    ],
    tags: ["FastAPI", "React", "scikit-learn", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    githubUrl: "https://github.com/preetdalal/fraud-detection-system-scoe",
  },
  {
    slug: "job-tracker",
    name: "Job Application Tracker API",
    oneLiner:
      "A Spring Boot REST API for tracking job applications, built to cover real production backend patterns.",
    problem:
      "Built as a resume-grade backend project rather than a toy CRUD app, covering the pieces that actually show up in production Spring Boot services.",
    decisions: [
      "JWT authentication with role-based access control (USER, ADMIN)",
      "Dynamic filtering via JPA Specifications, Redis caching on stats endpoints",
      "Scheduled email reminders for interviews via Spring Mail",
      "Flyway-managed migrations, integration tests against real Postgres via Testcontainers",
      "Full stack (app, Postgres, Redis) runs through Docker Compose",
    ],
    tags: ["Java 17", "Spring Boot", "PostgreSQL", "Redis", "Docker", "Testcontainers"],
    githubUrl: "https://github.com/preetdalal/job-tracker",
  },
  {
    slug: "rasc-net",
    name: "RASC-Net: Adversarial Skin Cancer Defense",
    oneLiner:
      "A deep learning framework for skin lesion classification that stays accurate under adversarial attacks.",
    problem:
      "Standard CNNs for skin lesion classification are vulnerable to imperceptible adversarial perturbations. RASC-Net pairs a custom classifier with a defense pipeline, plus a clinical reporting layer.",
    decisions: [
      "Custom Residual Attention network (2.88M params) trained with a curriculum adversarial schedule",
      "Pre-processing defense pipeline: bit-depth reduction, blur, JPEG compression",
      "FGSM-attacked accuracy improved from 24% (baseline) to 62.5% with the proposed defenses",
      "Model weights hosted on Hugging Face Hub; backend deployable on Hugging Face Spaces or via local Dev Tunnels",
    ],
    tags: ["PyTorch", "TensorFlow", "React", "Docker", "Hugging Face Hub"],
    githubUrl: "https://github.com/preetdalal/adversial-skin-cancer",
  },
  {
    slug: "svamitva",
    name: "SVAMITVA AI Feature Extraction",
    oneLiner:
      "Converts drone orthophotos into vector GIS village maps for Smart India Hackathon.",
    problem:
      "Manual extraction of building footprints, roads, and waterbodies from drone imagery doesn't scale. This pipeline automates it end to end.",
    decisions: [
      "PyTorch U-Net handles semantic segmentation; EfficientNet-B0 classifies roof material",
      "Custom GIS vectorization: contour extraction, Shoelace area calculation for real-world measurements",
      "Deployed across three services: FastAPI backend on Render, Next.js frontend on Vercel",
      "Model weights synced from Hugging Face Hub at runtime",
    ],
    tags: ["PyTorch", "FastAPI", "Next.js", "Render", "Vercel", "Hugging Face Hub"],
    githubUrl: "https://github.com/preetdalal/svamvitva-sih",
    demoUrl: "https://nerdvana-sih.vercel.app",
  },
];

export const pipeline = ["Build", "Containerize", "Deploy", "Monitor", "Scale"];

export const links = {
  github: "https://github.com/preetdalal",
  linkedin: "https://linkedin.com/in/preetdalal",
  resume: "/resume.pdf",
};
