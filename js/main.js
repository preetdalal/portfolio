/**
 * Preet Dalal Portfolio — DevOps & MLOps Interactive Engine
 * Live telemetry sparklines, pipeline visualizer, manifest drawer, cluster simulator
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Live IST Clock & Cluster Heartbeat
  const timeEl = document.getElementById('ist-clock');
  function tick() {
    if (!timeEl) return;
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }) + ' IST';
  }
  setInterval(tick, 1000);
  tick();

  // 2. Toast System
  const toastBox = document.getElementById('toast-box');
  function showToast(msg, type = 'info') {
    if (!toastBox) return;
    const t = document.createElement('div');
    t.className = `toast-msg ${type}`;
    t.innerHTML = `<span class="toast-indicator"></span><span>${msg}</span>`;
    toastBox.appendChild(t);

    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => {
      t.classList.remove('show');
      setTimeout(() => t.remove(), 250);
    }, 3200);
  }

  // 3. Copy Email Buttons
  document.querySelectorAll('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'mdalal.preet@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Copied "mdalal.preet@gmail.com" to clipboard', 'success');
      }).catch(() => {
        showToast('Email: mdalal.preet@gmail.com');
      });
    });
  });

  // 4. Project Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Interactive Pipeline Visualizer
  const pipelineStages = document.querySelectorAll('.pipeline-step-node');
  const pipelineLogViewer = document.getElementById('pipeline-log-content');
  const pipelineStageTitle = document.getElementById('pipeline-stage-title');
  const pipelineStageBadge = document.getElementById('pipeline-stage-badge');

  const STAGE_LOGS = {
    'stage-push': {
      title: 'Stage 1: GitOps Push & Linting',
      badge: 'PASSED (0.8s)',
      log: [
        '[git] Fetching origin/main (commit: 7b8f99d6c)',
        '[lint:python] Running flake8 & black check ... 0 errors found.',
        '[lint:java] Running Checkstyle on 14 Spring Boot source files ... PASSED',
        '[test:unit] Running JUnit 5 tests (42 tests passed, 0 failures)',
        '[status] Branch protection checks verified. Triggering container build worker.'
      ].join('\n')
    },
    'stage-docker': {
      title: 'Stage 2: Multi-Stage Container Build & Security Scan',
      badge: 'BUILT & SCANNED (4.2s)',
      log: [
        '[docker] Multi-stage build starting: Target -> distroless-python3.11-debian12',
        '[docker] Step 1/8: FROM python:3.11-slim as builder',
        '[docker] Step 2/8: RUN pip wheel --no-cache-dir -r requirements.txt',
        '[docker] Step 3/8: FROM gcr.io/distroless/python3-debian12',
        '[docker] Step 4/8: COPY --from=builder /wheels /wheels',
        '[trivy] Scanning ghcr.io/preetdalal/fraudguard:v1.4 for CVEs ...',
        '[trivy] Results: 0 CRITICAL, 0 HIGH, 0 MEDIUM vulnerabilities.',
        '[docker] Pushed image artifact to GitHub Container Registry (digest: sha256:9f82ab31c...)'
      ].join('\n')
    },
    'stage-mlops': {
      title: 'Stage 3: MLOps Model Registry & TorchScript Sync',
      badge: 'VERIFIED (2.1s)',
      log: [
        '[mlflow] Querying registered model artifact for FraudGuard classifier ...',
        '[huggingface] Downloading verified model weights from preetdalal/svamitva-unet (sha256 checked)',
        '[torchscript] Compiling PyTorch model to TorchScript JIT for zero-Python inference overhead',
        '[benchmark] Cold start latency: 42ms | Warm inference: 14.2ms',
        '[artifact] Packed model binary into runtime container volume mount.'
      ].join('\n')
    },
    'stage-k8s': {
      title: 'Stage 4: Kubernetes Rolling Deployment & HPA Sync',
      badge: 'HEALTHY (1.4s)',
      log: [
        '[kubectl] Applying manifest k8s/production/deployment.yaml ...',
        '[k8s] deployment.apps/fraudguard-api configured (strategy: RollingUpdate, maxSurge: 1, maxUnavailable: 0)',
        '[k8s] Pod fraudguard-api-7b8f99d6c-4k2x9 created -> ContainerCreating -> Running',
        '[k8s] Liveness probe: HTTP GET http://:8000/healthz [200 OK]',
        '[k8s] Readiness probe: HTTP GET http://:8000/readyz [200 OK]',
        '[hpa] HorizontalPodAutoscaler fraudguard-hpa bound (min: 2, max: 8, target: CPU 70%)',
        '[status] Ingress routing updated. 100% traffic shifted to new replica set.'
      ].join('\n')
    },
    'stage-telemetry': {
      title: 'Stage 5: Prometheus Scrape & Grafana Observability',
      badge: 'SCRAPING 15s (LIVE)',
      log: [
        '[prometheus] ServiceMonitor detected new endpoint: http://10.244.1.45:8000/metrics',
        '[prometheus] Scraped 48 metrics series in 1.8ms (rate: 3,412 req/sec)',
        '[grafana] Dashboard "FraudGuard Live Telemetry" synchronized with cluster datasource',
        '[alertmanager] Rules evaluated: P99_Latency_Exceeded -> OK, Error_Rate_Above_1pct -> OK',
        '[sre] Service Level Objective (SLO) compliance: 99.98% availability over last 30d'
      ].join('\n')
    }
  };

  if (pipelineStages.length > 0 && pipelineLogViewer) {
    pipelineStages.forEach(node => {
      node.addEventListener('click', () => {
        pipelineStages.forEach(n => n.classList.remove('active'));
        node.classList.add('active');

        const stageKey = node.getAttribute('data-stage');
        const data = STAGE_LOGS[stageKey];
        if (data) {
          if (pipelineStageTitle) pipelineStageTitle.textContent = data.title;
          if (pipelineStageBadge) pipelineStageBadge.textContent = data.badge;
          pipelineLogViewer.textContent = data.log;
        }
      });
    });
  }

  // 6. Live Cluster Telemetry & Sparkline Canvas
  const canvasReq = document.getElementById('sparkline-req');
  const canvasLat = document.getElementById('sparkline-lat');
  const valThroughput = document.getElementById('telemetry-throughput');
  const valLatency = document.getElementById('telemetry-latency');
  const valCpu = document.getElementById('telemetry-cpu');
  const valReplicas = document.getElementById('telemetry-replicas');

  const historyLength = 30;
  let reqHistory = Array(historyLength).fill(3400);
  let latHistory = Array(historyLength).fill(14);
  let isSpikeActive = false;

  function drawSparkline(canvas, data, color, minVal, maxVal) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const step = w / (data.length - 1);
    const range = (maxVal - minVal) || 1;

    ctx.beginPath();
    for (let i = 0; i < data.length; i++) {
      const x = i * step;
      const normalized = (data[i] - minVal) / range;
      const y = h - (normalized * (h - 8) + 4);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Subtle area fill
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fillStyle = color.replace(')', ', 0.12)').replace('rgb', 'rgba');
    ctx.fill();
  }

  function updateTelemetryData() {
    let baseReq = isSpikeActive ? 8500 : 3400;
    let baseLat = isSpikeActive ? 32 : 14;
    let baseCpu = isSpikeActive ? 78 : 24;
    let replicas = isSpikeActive ? 6 : 2;

    const curReq = Math.round(baseReq + (Math.random() - 0.5) * (isSpikeActive ? 1200 : 300));
    const curLat = (baseLat + (Math.random() - 0.5) * (isSpikeActive ? 8 : 2.5)).toFixed(1);
    const curCpu = Math.round(baseCpu + (Math.random() - 0.5) * (isSpikeActive ? 10 : 4));

    reqHistory.push(curReq);
    reqHistory.shift();

    latHistory.push(parseFloat(curLat));
    latHistory.shift();

    if (valThroughput) valThroughput.textContent = `${curReq.toLocaleString()} req/s`;
    if (valLatency) valLatency.textContent = `${curLat} ms`;
    if (valCpu) valCpu.textContent = `${curCpu}%`;
    if (valReplicas) valReplicas.textContent = `${replicas} pods`;

    drawSparkline(canvasReq, reqHistory, 'rgb(56, 189, 248)', 2000, 11000);
    drawSparkline(canvasLat, latHistory, 'rgb(52, 211, 153)', 5, 45);
  }

  setInterval(updateTelemetryData, 1200);
  updateTelemetryData();

  // Traffic Spike Simulator Button
  const spikeBtn = document.getElementById('btn-spike-traffic');
  if (spikeBtn) {
    spikeBtn.addEventListener('click', () => {
      isSpikeActive = !isSpikeActive;
      if (isSpikeActive) {
        spikeBtn.textContent = 'Reset Cluster Load ↺';
        spikeBtn.classList.add('active-spike');
        showToast('Traffic surge injected: HPA scaling replicas 2 -> 6', 'warning');
      } else {
        spikeBtn.textContent = 'Simulate Traffic Spike ⚡';
        spikeBtn.classList.remove('active-spike');
        showToast('Traffic normalized: HPA scaled down to 2 replicas', 'success');
      }
      updateTelemetryData();
    });
  }

  // 7. Interactive Manifest & Architecture Modal
  const manifestModal = document.getElementById('manifest-modal');
  const manifestModalTitle = document.getElementById('manifest-modal-title');
  const manifestModalCode = document.getElementById('manifest-modal-code');
  const manifestCloseBtn = document.getElementById('manifest-modal-close');

  const MANIFESTS = {
    'fraudguard-k8s': {
      title: 'FraudGuard AI — Kubernetes Deployment & HPA Manifest',
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: fraudguard-api
  namespace: fraud-prod
  labels:
    app: fraudguard-api
    tier: inference-backend
spec:
  replicas: 2
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
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
      - name: inference-service
        image: ghcr.io/preetdalal/fraudguard:v1.4
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 8000
          name: http
        resources:
          requests:
            cpu: "250m"
            memory: "256Mi"
          limits:
            cpu: "1000m"
            memory: "1Gi"
        livenessProbe:
          httpGet:
            path: /healthz
            port: 8000
          initialDelaySeconds: 5
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /readyz
            port: 8000
          initialDelaySeconds: 2
          periodSeconds: 5
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: fraudguard-hpa
  namespace: fraud-prod
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
    'jobtracker-docker': {
      title: 'Job Application Tracker — Multi-Stage Dockerfile',
      code: `# Build Stage
FROM maven:3.9.6-eclipse-temurin-17-alpine AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn clean package -DskipTests

# Production Distroless Runtime Stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=build /app/target/*.jar app.jar
USER appuser:appgroup
EXPOSE 8080
ENV JAVA_OPTS="-XX:+UseG1GC -XX:MaxRAMPercentage=75.0"
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]`
    },
    'svamitva-mlops': {
      title: 'SVAMITVA AI — MLOps Compute Service & Weight Sync',
      code: `import os
import torch
import segmentation_models_pytorch as smp
from fastapi import FastAPI, UploadFile, File
from huggingface_hub import hf_hub_download
from prometheus_fastapi_instrumentator import Instrumentator

app = FastAPI(title="SVAMITVA Cadastral Inference Service")
Instrumentator().instrument(app).expose(app)

MODEL_REPO = "preetdalal/svamitva-unet"
MODEL_FILENAME = "unet_efficientnet_b0.pt"

@app.on_event("startup")
async def load_model():
    global model, device
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"[*] Downloading weights from Hugging Face Hub: {MODEL_REPO}")
    weights_path = hf_hub_download(repo_id=MODEL_REPO, filename=MODEL_FILENAME)
    
    model = smp.Unet(encoder_name="efficientnet-b0", classes=1, activation="sigmoid")
    model.load_state_dict(torch.load(weights_path, map_location=device))
    model.to(device)
    model.eval()
    print("[*] Model successfully loaded & ready for production inference")`
    },
    'rascnet-defense': {
      title: 'RASC-Net — Adversarial Defense & Robustness Pipeline',
      code: `import torch
import torch.nn as nn
from torchvision.transforms import functional as F

class AdversarialPreprocessPipeline(nn.Module):
    """
    Hardens input vision tensor against Fast Gradient Sign Method (FGSM)
    and Projected Gradient Descent (PGD) perturbations before model inference.
    """
    def __init__(self, bit_depth: int = 5, smoothing_kernel: int = 3):
        super().__init__()
        self.bit_depth = bit_depth
        self.smoothing_kernel = smoothing_kernel

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # 1. Bit-depth quantization (disrupts high-frequency adversarial gradients)
        levels = 2 ** self.bit_depth
        x_quant = torch.round(x * levels) / levels

        # 2. Local spatial smoothing
        x_smooth = F.gaussian_blur(x_quant, kernel_size=[self.smoothing_kernel, self.smoothing_kernel])
        return x_smooth`
    }
  };

  document.querySelectorAll('.btn-view-manifest').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const manifestId = btn.getAttribute('data-manifest');
      const manifest = MANIFESTS[manifestId];
      if (manifest && manifestModal) {
        if (manifestModalTitle) manifestModalTitle.textContent = manifest.title;
        if (manifestModalCode) manifestModalCode.textContent = manifest.code;
        manifestModal.classList.add('open');
      }
    });
  });

  if (manifestCloseBtn && manifestModal) {
    manifestCloseBtn.addEventListener('click', () => manifestModal.classList.remove('open'));
    manifestModal.addEventListener('click', (e) => {
      if (e.target === manifestModal) manifestModal.classList.remove('open');
    });
  }

  // 8. Contact Form Mailer
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value || 'DevOps Colleague';
      const email = document.getElementById('form-email')?.value || '';
      const message = document.getElementById('form-message')?.value || '';

      const subject = encodeURIComponent(`DevOps/MLOps Inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\nSender: ${name} (${email})`);
      window.location.href = `mailto:mdalal.preet@gmail.com?subject=${subject}&body=${body}`;

      showToast(`Opening mail client for ${name}...`, 'success');
      form.reset();
    });
  }
});
