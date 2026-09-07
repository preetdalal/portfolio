/**
 * Preet Dalal — DevOps, Cloud & MLOps Interactive Shell (v2.4)
 * Authentic Kubernetes, Docker, Prometheus & ML Inference CLI emulator
 */
(function () {
  const inputElem = document.getElementById('term-input');
  const outputContainer = document.getElementById('term-output');
  const termWindow = document.getElementById('term-window');
  const quickCmds = document.querySelectorAll('.quick-cmd');

  if (!inputElem || !outputContainer) return;

  const history = [];
  let historyIndex = -1;

  const CMDS = {
    help: () => [
      '<span class="term-cyan">DEV/OPS & MLOPS TERMINAL COMMANDS:</span>',
      '  <span class="term-yellow">kubectl get pods</span>      List all pods in production namespaces',
      '  <span class="term-yellow">kubectl get hpa</span>       Check Horizontal Pod Autoscaler status',
      '  <span class="term-yellow">docker stats</span>          Stream container resource metrics',
      '  <span class="term-yellow">docker ps</span>             List active running containers',
      '  <span class="term-yellow">helm list</span>             List deployed Helm charts in cluster',
      '  <span class="term-yellow">curl -X POST /predict</span> Run test inference on FraudGuard AI',
      '  <span class="term-yellow">prometheus query</span>      Inspect Prometheus scraping metrics',
      '  <span class="term-yellow">mlflow list</span>           List registered ML model artifacts',
      '  <span class="term-yellow">projects</span>              List production projects & repositories',
      '  <span class="term-yellow">stack</span>                 View technical infrastructure matrix',
      '  <span class="term-yellow">about</span>                 Print background & DevOps specialization',
      '  <span class="term-yellow">education</span>             View DJSCE academic credentials',
      '  <span class="term-yellow">contact</span>               Get direct communication channels',
      '  <span class="term-yellow">clear</span>                 Clear terminal output buffer'
    ].join('\n'),

    'kubectl get pods': () => [
      '<span class="term-dim">NAMESPACE       NAME                                READY   STATUS    RESTARTS   AGE</span>',
      'fraud-prod      fraudguard-api-7b8f99d6c-4k2x9      1/1     <span class="term-green">Running</span>   0          4d12h',
      'fraud-prod      fraudguard-api-7b8f99d6c-8m5v2      1/1     <span class="term-green">Running</span>   0          4d12h',
      'fraud-prod      fraudguard-web-654bd77f6b-7qq1x     1/1     <span class="term-green">Running</span>   0          4d12h',
      'jobtracker      jobtracker-api-5c94d99c4d-w92kz     1/1     <span class="term-green">Running</span>   0          12d',
      'jobtracker      jobtracker-api-5c94d99c4d-p64nm     1/1     <span class="term-green">Running</span>   0          12d',
      'jobtracker      redis-cache-master-0                1/1     <span class="term-green">Running</span>   0          18d',
      'jobtracker      postgres-cluster-0                  1/1     <span class="term-green">Running</span>   0          18d',
      'monitoring      prometheus-server-84f98b699c-z812k  1/1     <span class="term-green">Running</span>   0          30d',
      'monitoring      grafana-core-677bc7d66-r44pl        1/1     <span class="term-green">Running</span>   0          30d',
      'mlops-svamitva  unet-inference-engine-99bf8-9kl2    1/1     <span class="term-green">Running</span>   0          8d',
      '<span class="term-cyan">Status: 10/10 Pods Healthy · 0 CrashLoopBackOff · 0 OOMKilled</span>'
    ].join('\n'),

    'kubectl get hpa': () => [
      '<span class="term-dim">NAME             REFERENCE                       TARGETS         MINPODS   MAXPODS   REPLICAS   AGE</span>',
      'fraudguard-hpa   Deployment/fraudguard-api       cpu: 28%/70%    2         8         2          4d12h',
      'jobtracker-hpa   Deployment/jobtracker-api       cpu: 14%/60%    2         6         2          12d',
      'unet-hpa         Deployment/unet-inference-eng   cpu: 42%/80%    1         4         1          8d',
      '<span class="term-green">Autoscaler Engine: Metrics-Server v0.6.3 active · Target latency: &lt;50ms</span>'
    ].join('\n'),

    'docker stats': () => [
      '<span class="term-dim">CONTAINER ID   NAME                 CPU %     MEM USAGE / LIMIT     MEM %     NET I/O          PIDS</span>',
      '9f82ab31c001   fraudguard-api       2.4%      184.2MiB / 1.00GiB    18.0%     42.1MB / 18.4MB  8',
      'e12089ca2904   jobtracker-spring    1.1%      312.8MiB / 1.50GiB    20.4%     118MB / 94.2MB   24',
      'd837b019ee22   redis-cache          0.3%      28.4MiB / 512MiB      5.5%      12.8MB / 14.1MB  4',
      '55ac881023ba   prometheus-agent     1.8%      142.1MiB / 512MiB     27.7%     214MB / 8.2MB    12',
      '<span class="term-cyan">Total CPU Load: 5.6% · Total Allocated RAM: 667.5MiB · Daemon Status: OK</span>'
    ].join('\n'),

    'docker ps': () => [
      '<span class="term-dim">CONTAINER ID   IMAGE                                COMMAND                  CREATED        STATUS              PORTS</span>',
      '9f82ab31c001   ghcr.io/preetdalal/fraudguard:v1.4   "uvicorn main:app..."    4 days ago     Up 4 days (healthy) 0.0.0.0:8000-&gt;8000',
      'e12089ca2904   ghcr.io/preetdalal/jobtracker:v2.1   "java -jar app.jar"      12 days ago    Up 12 days          0.0.0.0:8080-&gt;8080',
      'd837b019ee22   redis:7.2-alpine                     "redis-server --auth..." 18 days ago    Up 18 days          0.0.0.0:6379-&gt;6379',
      '55ac881023ba   prom/prometheus:v2.48                "/bin/prometheus..."    30 days ago    Up 30 days          0.0.0.0:9090-&gt;9090'
    ].join('\n'),

    'helm list': () => [
      '<span class="term-dim">NAME            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART                   APP VERSION</span>',
      'fraudguard      fraud-prod      4               2026-08-28 14:12:08.192 +0530 IST       <span class="term-green">deployed</span>        fraudguard-chart-1.4.0  1.4.0',
      'jobtracker      jobtracker      7               2026-08-20 09:30:11.482 +0530 IST       <span class="term-green">deployed</span>        spring-microservice-2.1 2.1.0',
      'prometheus      monitoring      1               2026-08-02 11:00:22.001 +0530 IST       <span class="term-green">deployed</span>        kube-prometheus-stack   55.5.1'
    ].join('\n'),

    'curl -X POST /predict': () => [
      '<span class="term-dim">&gt; POST /v1/predict HTTP/1.1</span>',
      '<span class="term-dim">&gt; Host: fraudguard.api.cluster.local</span>',
      '<span class="term-dim">&gt; Content-Type: application/json</span>',
      '<span class="term-dim">&gt; Payload: {"text": "URGENT: Your account has been suspended. Click here to verify PIN."}</span>',
      '',
      '<span class="term-green">&lt; HTTP/1.1 200 OK (38.4ms)</span>',
      '<span class="term-dim">&lt; Content-Type: application/json</span>',
      '<span class="term-dim">&lt; X-Model-Inference-Time: 14.2ms</span>',
      '<span class="term-dim">&lt; X-Kubernetes-Pod: fraudguard-api-7b8f99d6c-4k2x9</span>',
      '{',
      '  <span class="term-cyan">"verdict"</span>: <span class="term-red">"PHISHING_FRAUD"</span>,',
      '  <span class="term-cyan">"confidence"</span>: 0.9842,',
      '  <span class="term-cyan">"risk_score"</span>: 98,',
      '  <span class="term-cyan">"threat_vectors"</span>: ["urgency_trigger", "credential_harvesting_link"],',
      '  <span class="term-cyan">"model_version"</span>: "v1.4.2-rf-tfidf"',
      '}'
    ].join('\n'),

    'prometheus query': () => [
      '<span class="term-dim">Query: rate(http_requests_total{job="fraudguard-api"}[5m])</span>',
      'Target: http://10.244.1.45:8000/metrics (Scrape interval: 15s)',
      '',
      '<span class="term-yellow">METRICS EXTRACT:</span>',
      '  http_requests_total{status="200"}        3,412.8 req/sec',
      '  http_requests_total{status="4xx"}        1.2 req/sec',
      '  http_requests_total{status="5xx"}        0.0 req/sec',
      '  model_inference_latency_p99_seconds      0.0384 s (38.4ms)',
      '  container_memory_working_set_bytes       193,146,880 B (184.2 MB)',
      '<span class="term-green">Alertmanager State: 0 firing, 0 pending · SLA compliance: 99.98%</span>'
    ].join('\n'),

    'mlflow list': () => [
      '<span class="term-dim">REGISTERED MODEL             LATEST STAGE   RUN ID        ARTIFACT LOCATION</span>',
      'fraudguard-classifier-rf     Production     run-8199201   s3://ml-registry/fraudguard/v1.4',
      'svamitva-unet-segmentation   Production     run-5501982   hf://preetdalal/svamitva-unet',
      'rascnet-adversarial-vision   Production     run-1102941   hf://preetdalal/rascnet-hardened',
      '<span class="term-cyan">Registry: 3 models active · Hugging Face Hub sync enabled on container startup</span>'
    ].join('\n'),

    about: () => [
      '<span class="term-cyan">ABOUT PREET DALAL:</span>',
      'DevOps, Cloud & Backend Engineer based in Mumbai, India.',
      'IT Student at Dwarkadas J. Sanghvi College of Engineering (DJSCE, Class of 2028).',
      'Pursuing official Honours in DevOps alongside core Computer Science curriculum.',
      '',
      '<span class="term-yellow">Core Specialization:</span>',
      '• Container Orchestration & Kubernetes Cluster Operations',
      '• Automated CI/CD Pipelines (GitHub Actions, Multi-stage Docker, Trivy)',
      '• Infrastructure Observability & SRE (Prometheus, Grafana, Alertmanager)',
      '• Production Backend Engineering (Java 17, Spring Boot 3, FastAPI, PostgreSQL, Redis)',
      '• MLOps: Serving PyTorch models reliably under autoscaling production workloads.'
    ].join('\n'),

    education: () => [
      '<span class="term-cyan">ACADEMIC BACKGROUND:</span>',
      'Institution: Dwarkadas J. Sanghvi College of Engineering (DJSCE), Mumbai',
      'Degree:      Bachelor of Technology (B.Tech) in Information Technology',
      'Honours:     Specialization in DevOps & Cloud Infrastructure (2024–2028)',
      'CGPA:        8.4 / 10.0',
      'Rank:        Rank 53 in National University Grants Examination'
    ].join('\n'),

    projects: () => [
      '1. <span class="term-yellow">FraudGuard AI</span> — K8s HPA autoscaling fraud detection platform with Prometheus/Grafana',
      '   Source: https://github.com/preetdalal/fraud-detection-system-scoe',
      '',
      '2. <span class="term-yellow">Job Application Tracker API</span> — Enterprise Spring Boot 3, Redis caching, Testcontainers',
      '   Source: https://github.com/preetdalal/job-tracker',
      '',
      '3. <span class="term-yellow">SVAMITVA AI</span> — SIH Hackathon aerial cadastral mapping with U-Net & FastAPI decoupled compute',
      '   Source: https://github.com/preetdalal/svamvitva-sih · Live: https://nerdvana-sih.vercel.app',
      '',
      '4. <span class="term-yellow">RASC-Net</span> — Hardened PyTorch vision network resilient against adversarial FGSM attacks',
      '   Source: https://github.com/preetdalal/adversial-skin-cancer'
    ].join('\n'),

    stack: () => [
      '<span class="term-cyan">ENGINEERING TOOLING & INFRASTRUCTURE MATRIX:</span>',
      '  <span class="term-yellow">Container & Cloud:</span>  Kubernetes, Docker, Helm, Docker Compose, Linux, cgroups',
      '  <span class="term-yellow">CI/CD & GitOps:</span>     GitHub Actions, Multi-stage Dockerfile, Trivy, GitOps',
      '  <span class="term-yellow">Observability:</span>      Prometheus, Grafana, Alertmanager, Structured Logging',
      '  <span class="term-yellow">Backend Core:</span>       Java 17, Spring Boot 3, Spring Security 6, FastAPI, Flyway',
      '  <span class="term-yellow">Datastores:</span>         PostgreSQL, Redis Cache, Testcontainers',
      '  <span class="term-yellow">MLOps & AI:</span>         PyTorch, Hugging Face Hub, TorchScript, Adversarial Defense',
      '  <span class="term-yellow">Languages:</span>          Java, Python, TypeScript, SQL, Bash'
    ].join('\n'),

    contact: () => [
      '<span class="term-cyan">GET IN TOUCH:</span>',
      '  Email:    mdalal.preet@gmail.com',
      '  LinkedIn: https://linkedin.com/in/preetdalal',
      '  GitHub:   https://github.com/preetdalal'
    ].join('\n')
  };

  function appendLine(htmlText, isPrompt = false) {
    const el = document.createElement('div');
    el.className = `term-line ${isPrompt ? 'prompt' : ''}`;
    el.innerHTML = htmlText;
    outputContainer.appendChild(el);
    if (termWindow) termWindow.scrollTop = termWindow.scrollHeight;
  }

  function handleCmd(raw) {
    const cmd = raw.trim();
    if (!cmd) return;

    history.push(cmd);
    historyIndex = history.length;

    appendLine(`preet@djsce:~$ <span class="term-white">${cmd}</span>`, true);

    const cleanCmd = cmd.toLowerCase().replace(/\s+/g, ' ');

    if (cleanCmd === 'clear') {
      outputContainer.innerHTML = '';
      return;
    }

    // Direct command match
    if (CMDS[cleanCmd]) {
      appendLine(CMDS[cleanCmd]());
      return;
    }

    // Substring or alias matches
    if (cleanCmd === 'kubectl' || cleanCmd.startsWith('kubectl get pod')) {
      appendLine(CMDS['kubectl get pods']());
      return;
    }
    if (cleanCmd.startsWith('kubectl get hpa') || cleanCmd === 'hpa') {
      appendLine(CMDS['kubectl get hpa']());
      return;
    }
    if (cleanCmd === 'docker' || cleanCmd.startsWith('docker stat')) {
      appendLine(CMDS['docker stats']());
      return;
    }
    if (cleanCmd.startsWith('docker ps')) {
      appendLine(CMDS['docker ps']());
      return;
    }
    if (cleanCmd === 'helm' || cleanCmd.startsWith('helm list') || cleanCmd.startsWith('helm ls')) {
      appendLine(CMDS['helm list']());
      return;
    }
    if (cleanCmd.startsWith('curl') || cleanCmd.includes('predict')) {
      appendLine(CMDS['curl -X POST /predict']());
      return;
    }
    if (cleanCmd.startsWith('prom') || cleanCmd.includes('metrics')) {
      appendLine(CMDS['prometheus query']());
      return;
    }
    if (cleanCmd.startsWith('mlflow')) {
      appendLine(CMDS['mlflow list']());
      return;
    }

    appendLine(`<span class="term-red">zsh: command not found: ${cmd}</span>. Type <span class="term-yellow">'help'</span> for available DevOps commands.`);
  }

  inputElem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = inputElem.value;
      inputElem.value = '';
      handleCmd(val);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        inputElem.value = history[historyIndex] || '';
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        historyIndex++;
        inputElem.value = history[historyIndex] || '';
      } else {
        historyIndex = history.length;
        inputElem.value = '';
      }
    }
  });

  quickCmds.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd') || btn.textContent.trim();
      handleCmd(cmd);
      inputElem.focus();
    });
  });

  // Initial welcome message with DevOps banner
  appendLine([
    '<span class="term-cyan">┌────────────────────────────────────────────────────────────────┐</span>',
    '<span class="term-cyan">│</span> <span class="term-green">● PREET DALAL CLUSTER CONTROLLER</span> · <span class="term-yellow">k8s-prod-ap-south</span>          <span class="term-cyan">│</span>',
    '<span class="term-cyan">│</span> Status: <span class="term-green">Healthy</span> · Pods: <span class="term-green">10/10 Running</span> · Prom Scrape: <span class="term-green">Active</span> · SRE: <span class="term-green">99.98%</span>  <span class="term-cyan">│</span>',
    '<span class="term-cyan">└────────────────────────────────────────────────────────────────┘</span>',
    'Type <span class="term-yellow">\'help\'</span> or click any quick command above to inspect cluster manifests & services.'
  ].join('\n'));
})();
