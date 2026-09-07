export interface PipelineStage {
  id: string;
  num: string;
  name: string;
  tool: string;
  badge: string;
  title: string;
  logs: string[];
}

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: "stage-push",
    num: "STAGE 01",
    name: "GitOps & Lint",
    tool: "GitHub Actions · Flake8",
    badge: "PASSED (0.8s)",
    title: "Stage 1: GitOps Push & Code Quality Gate",
    logs: [
      "[git] Fetching origin/main (commit: 7b8f99d6c)",
      "[lint:python] Running flake8 & black formatting check ... 0 errors found.",
      "[lint:java] Running Checkstyle on 14 Spring Boot source files ... PASSED",
      "[test:unit] Running JUnit 5 unit tests (42 tests passed, 0 failures)",
      "[status] Branch protection checks verified. Triggering container build worker."
    ]
  },
  {
    id: "stage-docker",
    num: "STAGE 02",
    name: "Container Build",
    tool: "Multi-Stage · Trivy CVE",
    badge: "BUILT & SCANNED (4.2s)",
    title: "Stage 2: Multi-Stage Container Build & Security Hardening",
    logs: [
      "[docker] Multi-stage build starting: Target -> distroless-python3.11-debian12",
      "[docker] Step 1/8: FROM python:3.11-slim as builder",
      "[docker] Step 2/8: RUN pip wheel --no-cache-dir -r requirements.txt",
      "[docker] Step 3/8: FROM gcr.io/distroless/python3-debian12",
      "[docker] Step 4/8: COPY --from=builder /wheels /wheels",
      "[trivy] Scanning ghcr.io/preetdalal/fraudguard:v1.4 for CVEs ...",
      "[trivy] Results: 0 CRITICAL, 0 HIGH, 0 MEDIUM. Image approved for push.",
      "[docker] Pushed image digest: sha256:d894b92ec1734a782e (Image size: 84MB)"
    ]
  },
  {
    id: "stage-mlops",
    num: "STAGE 03",
    name: "Model Registry",
    tool: "Hugging Face · TorchScript",
    badge: "BENCHMARKED (2.1s)",
    title: "Stage 3: MLOps Model Compilation & Inference Benchmark",
    logs: [
      "[mlops] Pulling latest quantized model weights from artifact registry ...",
      "[torch] Compiling PyTorch model to TorchScript C++ JIT runtime ...",
      "[bench] Running warmup batch (N=100 requests) ... P99: 38.4ms",
      "[metrics] Inference SLA guaranteed: P99 < 50ms verified.",
      "[model-card] Version tagged: v2.4.0-jit-quantized."
    ]
  },
  {
    id: "stage-k8s",
    num: "STAGE 04",
    name: "K8s Deployment",
    tool: "RollingUpdate · HPA Sync",
    badge: "ROLLED OUT (1.4s)",
    title: "Stage 4: Kubernetes RollingUpdate & Service Health Verification",
    logs: [
      "[k8s] Connecting to cluster: k8s-prod-ap-south (EKS)",
      "[k8s] Applying deployment: fraudguard-api (namespace: production)",
      "[k8s] Rolling update triggered: 2 new pods initializing ...",
      "[k8s] Readiness probe /healthz returned HTTP 200 (10/10 pods healthy)",
      "[k8s] Old replicaSet scaled down to 0. Zero downtime deployment complete."
    ]
  },
  {
    id: "stage-telemetry",
    num: "STAGE 05",
    name: "Observability",
    tool: "Prometheus · Grafana",
    badge: "SCRAPING (Active)",
    title: "Stage 5: Production Observability & Telemetry Verification",
    logs: [
      "[prometheus] Target registered: fraudguard-api.production:8000/metrics",
      "[prometheus] Scrape loop established: 15s interval",
      "[grafana] Dashboard 'SRE-Cluster-Overview' syncing metrics stream ...",
      "[alertmanager] Rules evaluated: HighLatencyThreshold (>100ms) -> READY",
      "[sre-status] Cluster health 100% nominal. Telemetry live on HUD."
    ]
  }
];
