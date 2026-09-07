export interface StackCategory {
  title: string;
  icon: string;
  items: string[];
}

export const STACK_CATEGORIES: StackCategory[] = [
  {
    title: "Container & Orchestration",
    icon: "☸",
    items: [
      "Kubernetes (K8s)",
      "Docker",
      "Multi-stage Builds",
      "Helm 3",
      "HPA Autoscaling",
      "Kind / Minikube",
      "Ingress NGINX",
      "Docker Compose"
    ]
  },
  {
    title: "CI/CD & GitOps",
    icon: "⚡",
    items: [
      "GitHub Actions",
      "GitOps Workflows",
      "Linux / Bash Scripting",
      "Trivy Vulnerability Scanner",
      "Flake8 / Checkstyle",
      "Automated Testing",
      "Semantic Versioning"
    ]
  },
  {
    title: "Observability & SRE",
    icon: "📊",
    items: [
      "Prometheus",
      "Grafana Dashboards",
      "PromQL Queries",
      "Metrics Scraping",
      "Alertmanager",
      "System Reliability",
      "SLA / SLO Tracking"
    ]
  },
  {
    title: "Backend Engineering",
    icon: "☕",
    items: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security 6",
      "FastAPI (Python)",
      "RESTful API Design",
      "PostgreSQL",
      "Redis Caching",
      "Flyway Migrations",
      "Testcontainers"
    ]
  },
  {
    title: "MLOps & Applied AI",
    icon: "🧠",
    items: [
      "PyTorch",
      "TorchScript",
      "Model Containerization",
      "Hugging Face",
      "OpenCV",
      "Inference Optimization",
      "Dataset Pipelines"
    ]
  },
  {
    title: "Core Languages",
    icon: "💻",
    items: [
      "Python 3.x",
      "Java",
      "C++",
      "Bash / Shell",
      "SQL",
      "TypeScript",
      "YAML / JSON"
    ]
  }
];
