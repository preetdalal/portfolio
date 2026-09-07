export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  bullets: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "fraudguard",
    title: "FraudGuard AI",
    subtitle: "FastAPI, React, scikit-learn, Docker, Kubernetes, Prometheus, Grafana",
    year: "2026",
    tags: ["FastAPI", "React", "scikit-learn", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    bullets: [
      "Built a multi-channel fraud and phishing detection platform analyzing SMS, email, and URLs in real time, using TF-IDF classifiers and a Random Forest model for scoring.",
      "Deployed the FastAPI and React services on Kubernetes with a Horizontal Pod Autoscaler to absorb bursty inference traffic, and instrumented a /metrics endpoint scraped by Prometheus and visualized in Grafana."
    ],
    githubUrl: "https://github.com/preetdalal/fraud-detection-system-scoe"
  },
  {
    id: "rasc-net",
    title: "RASC-Net: Adversarial Skin Cancer Defense",
    subtitle: "PyTorch, TensorFlow, React, Docker, Hugging Face",
    year: "2026",
    tags: ["PyTorch", "TensorFlow", "React", "Docker", "Hugging Face"],
    bullets: [
      "Designed a custom Residual Attention network (2.88M params) for skin lesion classification, trained with a curriculum adversarial schedule to resist adversarial perturbations.",
      "Built a multi-stage image defense pipeline (bit-depth reduction, blur, JPEG compression) that raised FGSM-attacked accuracy from 24% to 62.5%, plus a clinical decision support layer with automated PDF reporting."
    ],
    githubUrl: "https://github.com/preetdalal"
  },
  {
    id: "svamitva",
    title: "SVAMITVA AI Feature Extraction",
    subtitle: "PyTorch, FastAPI, Next.js, Render, Vercel",
    year: "2026",
    tags: ["PyTorch", "FastAPI", "Next.js", "Render", "Vercel"],
    bullets: [
      "Built for Smart India Hackathon: a PyTorch U-Net segmentation model and EfficientNet-B0 classifier that extract building footprints, roads, and waterbodies from drone orthophotos.",
      "Implemented custom GIS vectorization (contour extraction, Shoelace area calculation) and deployed the pipeline across three services with model weights synced from Hugging Face Hub at runtime."
    ],
    githubUrl: "https://github.com/preetdalal/svamvitva-sih",
    liveUrl: "https://nerdvana-sih.vercel.app"
  },
  {
    id: "jobtracker",
    title: "Job Application Tracker API",
    subtitle: "Java 17, Spring Boot, PostgreSQL, Redis, Docker",
    year: "In Progress",
    tags: ["Java 17", "Spring Boot", "PostgreSQL", "Redis", "Docker", "Testcontainers"],
    bullets: [
      "Developing a Spring Boot REST API covering JWT authentication with role-based access, Redis caching, Flyway-managed migrations, and Testcontainers-based integration tests, containerized with Docker Compose."
    ],
    githubUrl: "https://github.com/preetdalal/job-tracker"
  }
];
