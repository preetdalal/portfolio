export interface CommandResult {
  output: string[];
  isError?: boolean;
}

export const TERMINAL_COMMANDS: Record<string, () => string[]> = {
  "help": () => [
    "Available DevOps & Cluster commands:",
    "  kubectl get pods        - List active microservice pod replicas",
    "  kubectl get nodes       - Inspect Kubernetes worker nodes",
    "  kubectl get hpa         - Check Horizontal Pod Autoscaler status",
    "  kubectl describe svc    - Describe cluster ingress services",
    "  kubectl logs fraudguard - Stream live backend inference logs",
    "  helm list               - List installed Helm chart releases",
    "  neofetch                - Display system telemetry specs",
    "  skills                  - Overview of technical engineering stack",
    "  contact                 - Display communication channels",
    "  clear                   - Clear the terminal screen"
  ],

  "kubectl get pods": () => [
    "NAME                                 READY   STATUS    RESTARTS   AGE     IP",
    "fraudguard-api-7b8f99d6c-2x9la       2/2     Running   0          4d12h   10.244.1.42",
    "fraudguard-api-7b8f99d6c-m4k8p       2/2     Running   0          4d12h   10.244.2.19",
    "jobtracker-spring-6dfb889bc-9z1wq    2/2     Running   0          12d     10.244.1.33",
    "jobtracker-spring-6dfb889bc-k892a    2/2     Running   0          12d     10.244.3.08",
    "unet-inference-54c7d9bc-x81zp        1/1     Running   0          2d      10.244.2.91",
    "prometheus-server-0                 1/1     Running   0          34d     10.244.0.12",
    "grafana-dashboard-78b9c8b8-44pl2     1/1     Running   0          34d     10.244.0.15",
    "redis-master-0                       1/1     Running   0          18d     10.244.1.09"
  ],

  "kubectl get nodes": () => [
    "NAME                           STATUS   ROLES           AGE   VERSION",
    "ip-10-0-1-120.ap-south-1.ec2   Ready    control-plane   45d   v1.30.2",
    "ip-10-0-2-45.ap-south-1.ec2    Ready    worker-node-1   45d   v1.30.2",
    "ip-10-0-2-88.ap-south-1.ec2    Ready    worker-node-2   45d   v1.30.2",
    "ip-10-0-3-14.ap-south-1.ec2    Ready    gpu-worker-ml   20d   v1.30.2"
  ],

  "kubectl get hpa": () => [
    "NAME             REFERENCE                   TARGETS         MINPODS   MAXPODS   REPLICAS   AGE",
    "fraudguard-hpa   Deployment/fraudguard-api   cpu: 24%/70%    2         8         2          18d",
    "jobtracker-hpa   Deployment/jobtracker-api   cpu: 18%/75%    2         6         2          12d"
  ],

  "kubectl describe svc": () => [
    "Name:                     fraudguard-ingress-svc",
    "Namespace:                production",
    "Labels:                   app=fraudguard-api",
    "Selector:                 app=fraudguard-api",
    "Type:                     LoadBalancer",
    "IP:                       10.100.45.182",
    "LoadBalancer Ingress:     k8s-prod-ingress.ap-south-1.elb.amazonaws.com",
    "Port:                     http  80/TCP -> 8000/TCP",
    "Endpoints:                10.244.1.42:8000, 10.244.2.19:8000",
    "Session Affinity:         None"
  ],

  "kubectl logs fraudguard": () => [
    "[2026-09-07 20:30:11 UTC] [INFO] FastAPI inference worker initialized on port 8000",
    "[2026-09-07 20:30:14 UTC] [INFO] Prometheus /metrics endpoint mounted",
    "[2026-09-07 20:30:22 UTC] [INFO] POST /v1/predict - batch_size=1 - latency=12.4ms - 200 OK",
    "[2026-09-07 20:30:28 UTC] [INFO] POST /v1/predict - batch_size=4 - latency=18.1ms - 200 OK",
    "[2026-09-07 20:30:35 UTC] [INFO] GET /healthz - status=healthy - 200 OK"
  ],

  "helm list": () => [
    "NAME                NAMESPACE    REVISION  UPDATED                               STATUS    CHART                   APP VERSION",
    "prometheus-stack    monitoring   4         2026-08-20 14:22:11.458921 +0530 IST  deployed  kube-prometheus-58.2.2  v0.73.1",
    "ingress-nginx       ingress      2         2026-08-15 09:12:04.119283 +0530 IST  deployed  ingress-nginx-4.10.1    v1.10.1",
    "redis-cache         production   1         2026-08-10 18:45:33.729183 +0530 IST  deployed  redis-18.14.1           7.2.4"
  ],

  "neofetch": () => [
    "                   -`                     preet@djsce-k8s-node",
    "                  .o+`                    ---------------------",
    "                 `ooo/                    OS: Arch Linux / Alpine Linux",
    "                `+oooo:                   Host: Production Cloud Infrastructure",
    "               `+oooooo:                  Kernel: 6.9.8-cloud-native",
    "               -+oooooo+:                 Uptime: 45 days, 14 hours",
    "             `/:-:++oooo+:                Orchestrator: Kubernetes v1.30.2",
    "            `/++++/+++++++:               Containers: 10/10 Healthy",
    "           `/++++++++++++++:              Memory: 1.42 GiB / 16.00 GiB",
    "          `/+++ooooooooooooo/`            Telemetry: Prometheus 15s Scrape",
    "         ./ooosssso++osssssso+`           Shell: zsh 5.9 (x86_64-pc-linux-gnu)",
    "        .oossssso-````/ossssss+`          Status: 99.98% SRE Availability"
  ],

  "skills": () => [
    "Preet Dalal - Technical Capabilities:",
    "  • DevOps / Cloud: Kubernetes, Docker, Helm, HPA, Multi-stage builds, Ingress NGINX",
    "  • CI/CD & SRE: GitHub Actions, Trivy scanner, Prometheus, Grafana, Alertmanager",
    "  • Backend Microservices: Java 17, Spring Boot 3, FastAPI (Python), PostgreSQL, Redis",
    "  • MLOps & Applied AI: PyTorch, TorchScript, Model Serving, Hugging Face, OpenCV",
    "  • Core Languages: Python, Java, C++, Bash/Shell, SQL, TypeScript"
  ],

  "contact": () => [
    "Communication & Profile Links:",
    "  • Email: mdalal.preet@gmail.com",
    "  • GitHub: https://github.com/preetdalal",
    "  • Location: Mumbai, India",
    "  • Education: DJSCE Mumbai (B.Tech IT with DevOps Honours, Class of '28)"
  ]
};
