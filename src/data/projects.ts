export interface Project {
  id: string;
  category: 'devops' | 'backend' | 'aiml';
  categoryLabel: string;
  title: string;
  summary: string;
  points: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  manifestType?: 'k8s' | 'dockerfile';
  manifestTitle?: string;
  manifestCode?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "fraudguard",
    category: "devops",
    categoryLabel: "DEVOPS & KUBERNETES ORCHESTRATION",
    title: "FraudGuard AI — Autoscaling K8s Fraud Engine",
    summary:
      "Distributed fraud detection platform deployed on Kubernetes with Horizontal Pod Autoscaling (HPA), Prometheus metrics scraping, and Grafana dashboard visualization.",
    points: [
      "Engineered decoupled Kubernetes deployments for FastAPI inference backend and React client.",
      "Configured HPA to autoscale pod replicas dynamically based on CPU thresholds and request latency.",
      "Implemented custom Prometheus /metrics instrumentation for sub-second SRE visibility.",
      "Sub-50ms inference classification pipeline for malicious phishing and transaction fraud detection."
    ],
    tags: ["Kubernetes", "Docker", "Prometheus", "Grafana", "FastAPI", "HPA"],
    githubUrl: "https://github.com/preetdalal/fraud-detection-system-scoe",
    manifestType: "k8s",
    manifestTitle: "Kubernetes Deployment & HPA Manifest (fraudguard-k8s.yaml)",
    manifestCode: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: fraudguard-api
  namespace: production
  labels:
    app: fraudguard-api
    tier: inference-backend
spec:
  replicas: 2
  selector:
    matchLabels:
      app: fraudguard-api
  template:
    metadata:
      labels:
        app: fraudguard-api
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "8000"
        prometheus.io/path: "/metrics"
    spec:
      containers:
      - name: inference-engine
        image: ghcr.io/preetdalal/fraudguard:v1.4.2
        imagePullPolicy: IfNotPresent
        resources:
          limits:
            cpu: "1000m"
            memory: "512Mi"
          requests:
            cpu: "200m"
            memory: "256Mi"
        ports:
        - containerPort: 8000
        livenessProbe:
          httpGet:
            path: /healthz
            port: 8000
          initialDelaySeconds: 15
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 8000
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: fraudguard-hpa
  namespace: production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: fraudguard-api
  minReplicas: 2
  maxReplicas: 8
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70`
  },
  {
    id: "jobtracker",
    category: "backend",
    categoryLabel: "BACKEND SYSTEMS & CONTAINERIZATION",
    title: "Job Application Tracker — Spring Boot 3 API",
    summary:
      "Production-grade Spring Boot 3 REST microservice architecture with multi-stage Docker builds, Redis caching, and automated integration testing via Testcontainers.",
    points: [
      "Spring Security 6 stateless JWT authentication and role-based access control (RBAC).",
      "Redis caching layer cutting response times on high-frequency analytics endpoints by 80%.",
      "Database versioning with Flyway migrations ensuring zero-downtime schema evolution.",
      "Integration tests running with Testcontainers spinning up isolated PostgreSQL instances in CI."
    ],
    tags: ["Java 17", "Spring Boot 3", "PostgreSQL", "Redis", "Docker", "Testcontainers"],
    githubUrl: "https://github.com/preetdalal/job-tracker",
    manifestType: "dockerfile",
    manifestTitle: "Multi-Stage Distroless Dockerfile (Dockerfile)",
    manifestCode: `# Stage 1: Build & Package
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /app
COPY pom.xml .
# Cache maven dependencies
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn clean package -DskipTests -B

# Stage 2: Hardened Distroless Runtime
FROM gcr.io/distroless/java17-debian12:nonroot
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar

ENV SPRING_PROFILES_ACTIVE=prod \\
    JAVA_OPTS="-XX:+UseG1GC -XX:MaxRAMPercentage=75.0"

USER nonroot:nonroot
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]`
  },
  {
    id: "svamitvaih",
    category: "aiml",
    categoryLabel: "APPLIED MLOPS & DISTRIBUTED PIPELINES",
    title: "SVAMITVA AI — Cadastral Vectorization Pipeline",
    summary:
      "Full-stack MLOps pipeline for high-resolution drone imagery segmentation and cadastral parcel boundary vectorization with sub-100ms tile processing.",
    points: [
      "Engineered an automated data preprocessing pipeline converting GeoTIFF drone maps into segmented vector geometries.",
      "Fine-tuned U-Net segmentation models for real-time land boundary extraction.",
      "Deployed model inference backend containerized on Docker with Hugging Face integration.",
      "Built for Smart India Hackathon solving rural land demarcation at national scale."
    ],
    tags: ["Python", "FastAPI", "PyTorch", "OpenCV", "Docker", "MLOps", "React"],
    githubUrl: "https://github.com/preetdalal/svamvitva-sih",
    liveUrl: "https://nerdvana-sih.vercel.app",
    manifestType: "k8s",
    manifestTitle: "MLOps Inference Worker Deployment (unet-inference.yaml)",
    manifestCode: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: svamitva-unet-inference
  namespace: mlops
spec:
  replicas: 2
  selector:
    matchLabels:
      app: unet-inference
  template:
    metadata:
      labels:
        app: unet-inference
    spec:
      containers:
      - name: torch-worker
        image: ghcr.io/preetdalal/svamitva-model:v2.1
        resources:
          limits:
            nvidia.com/gpu: "1"
            memory: "4Gi"
          requests:
            cpu: "1000m"
            memory: "2Gi"
        env:
        - name: MODEL_PATH
          value: "/models/unet_weights_v2.pt"
        - name: BATCH_SIZE
          value: "16"`
  },
  {
    id: "gitops-infra",
    category: "devops",
    categoryLabel: "INFRASTRUCTURE AS CODE & GITOPS",
    title: "Cloud Native Telemetry & GitOps Cluster Bootstrap",
    summary:
      "Automated Kubernetes cluster provisioning scripts with Helm charts for Prometheus Operator, Grafana dashboards, Alertmanager routing, and automated GitHub Actions CI/CD.",
    points: [
      "Custom Helm value overrides for Prometheus scraping intervals, retention policies, and persistent storage.",
      "Pre-configured Grafana dashboards visualizing pod CPU/Memory saturation, ingress request latency, and HTTP status codes.",
      "End-to-end GitHub Actions pipeline with Trivy vulnerability scanning, multi-arch Docker image builds, and automated cluster rollouts.",
      "Shell automation scripts for zero-friction local development with Kind/Minikube clusters."
    ],
    tags: ["Kubernetes", "Helm", "Prometheus", "Grafana", "GitHub Actions", "Shell", "Linux"],
    githubUrl: "https://github.com/preetdalal",
    manifestType: "k8s",
    manifestTitle: "Prometheus ServiceMonitor Configuration (service-monitor.yaml)",
    manifestCode: `apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: app-telemetry-monitor
  namespace: monitoring
  labels:
    release: prometheus-stack
spec:
  selector:
    matchLabels:
      tier: inference-backend
  endpoints:
  - port: http
    interval: 15s
    scrapeTimeout: 10s
    path: /metrics`
  }
];
