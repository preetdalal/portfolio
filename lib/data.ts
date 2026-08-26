export type TechItem = {
  name: string;
  category?: string;
  level?: "production" | "core" | "pipeline";
  highlight?: boolean;
};

export type TechCategory = {
  label: string;
  code: string;
  badgeColor?: string;
  items: TechItem[];
};

export const systemSpecs = {
  host: "preet.sys.local",
  engineer: "Preet Dalal",
  role: "DevOps & Cloud Engineer | Spring Boot Backend Specialist",
  location: "Mumbai, India (IST / UTC+5:30)",
  statusText: "System Status: 100% Operational / Ready for Production",
  institution: "D. J. Sanghvi College of Engineering",
  degree: "B.Tech - Information Technology (2024-2028)",
  cgpa: "8.4 / 10",
  clusterUptime: "99.98%",
  activeNodes: "4 Nodes Active",
  primaryFocus: [
    "DevOps & Cloud Infrastructure",
    "Java & Spring Boot Microservices",
    "Kubernetes • Docker • CI/CD",
    "Applied AI/ML & Hugging Face Hub",
  ],
};

export const techStack: TechCategory[] = [
  {
    label: "DevOps & Cloud Infrastructure",
    code: "INFRA_LAYER",
    badgeColor: "border-spring/40 text-spring-light bg-spring/10",
    items: [
      { name: "Kubernetes (K8s)", highlight: true },
      { name: "Docker & Containerization", highlight: true },
      { name: "Linux / POSIX Shell", highlight: true },
      { name: "Prometheus Monitoring" },
      { name: "Grafana Dashboards" },
      { name: "CI/CD (GitHub Actions)" },
      { name: "Render & Vercel PaaS" },
      { name: "Cloud Networking & Ingress" },
    ],
  },
  {
    label: "Backend & Distributed Systems",
    code: "BACKEND_SVC",
    badgeColor: "border-spring/40 text-spring-light bg-spring/10",
    items: [
      { name: "Spring Boot 3", highlight: true },
      { name: "Java 17 / 21", highlight: true },
      { name: "Spring Security (JWT)", highlight: true },
      { name: "FastAPI (Python)" },
      { name: "PostgreSQL & JPA" },
      { name: "Redis Caching" },
      { name: "Flyway Migrations" },
      { name: "Testcontainers" },
    ],
  },
  {
    label: "AI / ML & Model Infrastructure",
    code: "AI_ML_CORE",
    badgeColor: "border-cyan-dim/40 text-cyan bg-cyan/10",
    items: [
      { name: "PyTorch Deep Learning", highlight: true },
      { name: "Hugging Face Hub & Spaces", highlight: true },
      { name: "TensorFlow / Keras" },
      { name: "scikit-learn" },
      { name: "OpenCV & Computer Vision" },
      { name: "Adversarial Defense (FGSM)" },
      { name: "GIS & Contour Extraction" },
    ],
  },
  {
    label: "Core Languages & Tooling",
    code: "LANG_CORE",
    badgeColor: "border-k8s/40 text-k8s-light bg-k8s/10",
    items: [
      { name: "Java", highlight: true },
      { name: "Python", highlight: true },
      { name: "TypeScript / JavaScript" },
      { name: "SQL (PostgreSQL)" },
      { name: "Bash / Zsh Shell" },
      { name: "Git / GitHub CLI" },
    ],
  },
];

export const buildingToward: string[] = [
  "Multi-cluster Kubernetes: Istio service mesh & GitOps (ArgoCD)",
  "Advanced IaC with Terraform & AWS / GCP Production Architecture",
  "Distributed telemetry with OpenTelemetry & Jaeger distributed tracing",
  "High-throughput event streaming with Apache Kafka",
];

export type Project = {
  slug: string;
  nodeId: string;
  name: string;
  roleType: "Spring Boot / Java" | "DevOps & Cloud" | "AI/ML & Vision";
  oneLiner: string;
  problem: string;
  decisions: string[];
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  buildStatus: "PASSING" | "HEALTHY" | "DEPLOYED";
  healthScore: string;
  pods: string;
  accentColor: "spring" | "k8s" | "cyan";
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "job-tracker",
    nodeId: "NODE-01 // BACKEND-SVC",
    name: "Job Application Tracker API",
    roleType: "Spring Boot / Java",
    oneLiner:
      "Production-grade Spring Boot 3 REST API featuring JWT authentication, role-based access control, Redis caching, scheduled jobs, and Docker Compose orchestration.",
    problem:
      "Engineered as a robust, resilient enterprise backend system instead of a basic CRUD application, covering real-world production patterns: database versioning, security filters, scheduled asynchronous dispatchers, and integration test coverage.",
    decisions: [
      "Spring Security 6 with stateless JWT authentication and role-based authorization (USER / ADMIN)",
      "Dynamic filtering queries implemented via JPA Specifications with multi-criteria criteria builders",
      "Redis distributed caching on high-frequency analytics and stats endpoints for low latency",
      "Asynchronous email scheduling engine via Spring Mail and cron background workers",
      "Flyway database schema migration pipelines and automated integration tests with Testcontainers against live PostgreSQL",
      "Containerized multi-container orchestration (API service, Postgres, Redis) with Docker Compose",
    ],
    tags: ["Java 17", "Spring Boot 3", "Spring Security", "PostgreSQL", "Redis", "Docker Compose", "Flyway", "Testcontainers"],
    githubUrl: "https://github.com/preetdalal/job-tracker",
    buildStatus: "PASSING",
    healthScore: "99.95%",
    pods: "3/3 Pods Ready",
    accentColor: "spring",
    metrics: [
      { label: "Engine", value: "Spring Boot 3" },
      { label: "Storage", value: "PostgreSQL + Redis" },
      { label: "Orchestration", value: "Docker Compose" },
      { label: "Integration Test", value: "Testcontainers" },
    ],
  },
  {
    slug: "fraudguard-ai",
    nodeId: "NODE-02 // K8S-INFRA",
    name: "FraudGuard AI & Telemetry Cluster",
    roleType: "DevOps & Cloud",
    oneLiner:
      "Multi-channel fraud and phishing detection platform orchestrated on Kubernetes with Horizontal Pod Autoscalers, Prometheus scraping, and Grafana telemetry.",
    problem:
      "Modern cyber attacks span SMS smishing, phishing emails, and zero-day malicious URLs. FraudGuard AI unifies detection under high-concurrency microservices with automated horizontal autoscaling and real-time observability.",
    decisions: [
      "FastAPI inference backend and React client decoupled and deployed as independent microservices in Kubernetes",
      "Kubernetes Horizontal Pod Autoscaler (HPA) configured to scale pod replicas based on memory & inference latency",
      "Custom Prometheus /metrics endpoint scraped in real-time and visualised across Grafana operational dashboards",
      "TF-IDF n-gram text vectorizers and ensemble Random Forest classifiers for ultra-fast sub-50ms verdict generation",
    ],
    tags: ["Kubernetes", "Docker", "FastAPI", "Prometheus", "Grafana", "scikit-learn", "HPA Autoscaling"],
    githubUrl: "https://github.com/preetdalal/fraud-detection-system-scoe",
    buildStatus: "HEALTHY",
    healthScore: "100%",
    pods: "5/5 Pods Ready",
    accentColor: "k8s",
    metrics: [
      { label: "Orchestrator", value: "Kubernetes Cluster" },
      { label: "Observability", value: "Prometheus + Grafana" },
      { label: "Autoscale", value: "HPA Memory-Based" },
      { label: "Latency", value: "< 45ms Avg" },
    ],
  },
  {
    slug: "rasc-net",
    nodeId: "NODE-03 // AI-DEFENSE",
    name: "RASC-Net: Adversarial Defense System",
    roleType: "AI/ML & Vision",
    oneLiner:
      "Deep learning computer vision framework with residual attention mechanisms engineered to resist FGSM adversarial perturbations with Hugging Face Hub integration.",
    problem:
      "Standard convolutional vision networks for lesion classification suffer severe degradation under imperceptible adversarial noise. RASC-Net delivers hardened classification with automated defense layers and clinical report generation.",
    decisions: [
      "Engineered a custom Residual Attention Network (2.88M parameters) with curriculum adversarial training",
      "Architected a pre-processing defense pipeline incorporating bit-depth reduction, spatial smoothing, and compression filtering",
      "Boosted accuracy under Fast Gradient Sign Method (FGSM) adversarial attack from 24.0% baseline to 62.5%",
      "Serialized and hosted production model weights on Hugging Face Hub with seamless runtime pulling to inference instances",
    ],
    tags: ["PyTorch", "Hugging Face Hub", "Adversarial FGSM", "Computer Vision", "Docker", "FastAPI"],
    githubUrl: "https://github.com/preetdalal/adversial-skin-cancer",
    buildStatus: "DEPLOYED",
    healthScore: "99.8%",
    pods: "2/2 Ready",
    accentColor: "cyan",
    metrics: [
      { label: "Robustness Gain", value: "+38.5% Accuracy" },
      { label: "Model Hub", value: "Hugging Face" },
      { label: "Architecture", value: "Residual Attention" },
      { label: "Parameters", value: "2.88M params" },
    ],
  },
  {
    slug: "svamitva",
    nodeId: "NODE-04 // GIS-PIPELINE",
    name: "SVAMITVA AI GIS Vector Extraction",
    roleType: "AI/ML & Vision",
    oneLiner:
      "Automated drone orthophoto vectorization pipeline for Smart India Hackathon transforming high-resolution aerial imagery into geospatial polygons.",
    problem:
      "Manual cadastral survey mapping of village land parcels and road networks fails to scale nationwide. This pipeline automates feature boundary segmentation and geo-referenced vectorization at scale.",
    decisions: [
      "PyTorch U-Net architecture for high-resolution semantic segmentation paired with EfficientNet-B0 for structural classification",
      "Algorithmic GIS vectorization engine: boundary contour tracing with Shoelace polygon area calculation for ground-truth measurements",
      "Decoupled microservice architecture with FastAPI computational engine on Render and Next.js frontend on Vercel",
      "Dynamic model parameter weights synchronized from Hugging Face Hub on container boot",
    ],
    tags: ["PyTorch", "FastAPI", "Next.js", "Hugging Face Hub", "GIS Vectorization", "Render", "Vercel"],
    githubUrl: "https://github.com/preetdalal/svamvitva-sih",
    demoUrl: "https://nerdvana-sih.vercel.app",
    buildStatus: "PASSING",
    healthScore: "99.9%",
    pods: "Active Service",
    accentColor: "spring",
    metrics: [
      { label: "Hackathon", value: "Smart India Hackathon" },
      { label: "Segmentation", value: "U-Net + EfficientNet" },
      { label: "Live Demo", value: "nerdvana-sih.vercel.app" },
      { label: "Vector Output", value: "GeoJSON / Polygons" },
    ],
  },
];

export const systemLogs = [
  {
    timestamp: "2026-08-26 09:14:02.118",
    level: "INFO",
    component: "sys.kernel",
    message: "Initializing Preet Dalal engineering environment on Linux kernel 6.x...",
  },
  {
    timestamp: "2026-08-26 09:14:02.340",
    level: "SUCCESS",
    component: "spring.boot",
    message: "Loaded Spring Boot 3 microservice modules: Security (JWT), Data JPA, Flyway, Redis caching.",
  },
  {
    timestamp: "2026-08-26 09:14:02.592",
    level: "SUCCESS",
    component: "k8s.orchestrator",
    message: "Cluster node preet-node-01 initialized. 4/4 service pods healthy with Prometheus scraping active.",
  },
  {
    timestamp: "2026-08-26 09:14:02.780",
    level: "INFO",
    component: "ai.pipeline",
    message: "Synchronized PyTorch models & Hugging Face Hub weights for inference pipelines.",
  },
  {
    timestamp: "2026-08-26 09:14:03.012",
    level: "READY",
    component: "ops.control",
    message: "System 100% operational. Ready for high-impact backend & cloud infrastructure missions.",
  },
];

export const pipelineStages = [
  { id: "01", name: "BUILD", desc: "Maven / Java 17 & Python Compiles", icon: "code", status: "ONLINE" },
  { id: "02", name: "CONTAINERIZE", desc: "Multi-stage Docker images & layers", icon: "box", status: "ONLINE" },
  { id: "03", name: "DEPLOY", desc: "Kubernetes Pods, Ingress & Secrets", icon: "cloud", status: "ONLINE" },
  { id: "04", name: "MONITOR", desc: "Prometheus metrics & Grafana alerts", icon: "activity", status: "ONLINE" },
  { id: "05", name: "SCALE", desc: "Horizontal Pod Autoscalers (HPA)", icon: "trending-up", status: "ONLINE" },
];

export const links = {
  github: "https://github.com/preetdalal",
  linkedin: "https://linkedin.com/in/preetdalal",
  resume: "/resume.pdf",
  email: "mailto:preetdalal.dev@gmail.com",
};
