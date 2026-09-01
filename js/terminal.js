/**
 * Interactive Developer Terminal (Kube-CLI)
 * Supports commands: help, neofetch, kubectl, projects, skills, contact, clear, cat, whoami, etc.
 */
(function () {
  const inputElem = document.getElementById('terminal-input');
  const outputContainer = document.getElementById('terminal-output');
  const termBody = document.querySelector('.terminal-body');
  const quickCmdChips = document.querySelectorAll('.term-cmd-chip');

  if (!inputElem || !outputContainer) return;

  const history = [];
  let historyIndex = -1;

  const COMMANDS = {
    help: {
      desc: 'List available shell commands',
      run: () => {
        return [
          'AVAILABLE COMMANDS:',
          '  neofetch             Display system info and architecture profile',
          '  kubectl get pods     List active Kubernetes services & health status',
          '  projects             List production-grade projects',
          '  skills               Display engineering stack & tools matrix',
          '  cat resume           View engineering background summary',
          '  contact              Display email, LinkedIn, and GitHub links',
          '  whoami               Display developer identity',
          '  clear                Clear terminal screen',
          '  date                 Display current local Mumbai (IST) time',
          '  theme <color>        Set accent color (emerald, cyan, purple, amber)'
        ].join('\n');
      }
    },
    whoami: {
      desc: 'Print current user identity',
      run: () => 'preet@djsce-cluster (DevOps & Backend Engineer · B.Tech IT DevOps Honours)'
    },
    neofetch: {
      desc: 'System summary',
      run: () => {
        return [
          '         .---.          preet@cluster.preetdalal.dev',
          '        /     \\         ----------------------------',
          '       | () () |        OS: Linux x86_64 (Cloud-Native Arch)',
          '        \\  -  /         Host: DJSCE Mumbai (DevOps Honours)',
          '         \'---\'          Kernel: Java 17 + Spring Boot 3.x',
          '        /|   |\\         Uptime: 2024-2028 (4+ Production Deployments)',
          '       (_|   |_)        Packages: 4 Projects, 15+ Core Technologies',
          '        /     \\         Shell: zsh + kubectl / docker-compose',
          '       |  | |  |        Metrics: sub-50ms ML inference, 99.9% Uptime',
          '       |__|_|__|        CGPA: 8.4 / 10.0 (Dwarkadas J. Sanghvi)',
          '                        Status: OPEN TO BACKEND & DEVOPS ROLES'
        ].join('\n');
      }
    },
    'kubectl get pods': {
      desc: 'Get status of active production pods',
      run: () => {
        return [
          'NAME                                      READY   STATUS    RESTARTS   AGE     LATENCY',
          'fraudguard-api-7b8f99d6c-2k9jx            1/1     Running   0          42d     18ms',
          'fraudguard-inference-worker-5c4dd8b-9n2   1/1     Running   0          42d     32ms',
          'job-tracker-backend-spring-6f77cc8-pl88   1/1     Running   0          18d     12ms',
          'svamitva-unet-geospatial-8d99c4b-m48pq   1/1     Running   0          64d     45ms',
          'rasc-net-adversarial-defense-5f6b8-x291   1/1     Running   0          29d     28ms',
          'prometheus-operator-node-exporter-4k9l2   1/1     Running   0          90d     3ms',
          'grafana-telemetry-dashboard-6c99bb-92x    1/1     Running   0          90d     5ms'
        ].join('\n');
      }
    },
    kubectl: {
      desc: 'Kubernetes CLI',
      run: (args) => {
        if (args.join(' ') === 'get pods' || args.join(' ') === 'get pod' || args.join(' ') === 'get pods -n prod') {
          return COMMANDS['kubectl get pods'].run();
        }
        if (args.join(' ') === 'get nodes') {
          return [
            'NAME                 STATUS   ROLES           AGE   VERSION',
            'k8s-node-master-01   Ready    control-plane   90d   v1.29.2',
            'k8s-worker-gpu-01    Ready    worker,gpu      90d   v1.29.2',
            'k8s-worker-core-02   Ready    worker          90d   v1.29.2'
          ].join('\n');
        }
        return 'Try: kubectl get pods  OR  kubectl get nodes';
      }
    },
    projects: {
      desc: 'Showcase projects',
      run: () => {
        return [
          '1. [DEVOPS & INFRA] FraudGuard AI — Fraud Detection Platform (K8s, HPA, Prometheus, FastAPI)',
          '   Repo: https://github.com/preetdalal/fraud-detection-system-scoe',
          '',
          '2. [BACKEND] Job Application Tracker API (Spring Boot 3, Redis, PostgreSQL, Testcontainers, JWT)',
          '   Repo: https://github.com/preetdalal/job-tracker',
          '',
          '3. [AI/ML INFRA] SVAMITVA AI — SIH Drone Orthophoto Mapping (PyTorch U-Net, FastAPI, Next.js)',
          '   Repo: https://github.com/preetdalal/svamvitva-sih | Demo: https://nerdvana-sih.vercel.app',
          '',
          '4. [AI/ML INFRA] RASC-Net — Adversarial Defense for Skin Lesion Vision (PyTorch, FGSM Defense)',
          '   Repo: https://github.com/preetdalal/adversial-skin-cancer'
        ].join('\n');
      }
    },
    skills: {
      desc: 'Display engineering stack',
      run: () => {
        return [
          'CORE STACK MATRIX:',
          '  [DevOps & Cloud]    Kubernetes, Docker, Prometheus, Grafana, GitHub Actions, Helm, Linux',
          '  [Backend]           Java 17, Spring Boot 3, Spring Security 6, PostgreSQL, Redis, Flyway, FastAPI',
          '  [AI/ML Infra]       PyTorch, Hugging Face Hub, U-Net, Adversarial Defense (FGSM), OpenCV',
          '  [Languages]         Java, Python, TypeScript, SQL, Bash'
        ].join('\n');
      }
    },
    'cat resume': {
      desc: 'View resume summary',
      run: () => {
        return [
          'PREET DALAL — DevOps & Backend Engineer',
          'Education: B.Tech in IT (DevOps Honours), DJSCE Mumbai (2024-2028) | CGPA: 8.4',
          'Contact:   mdalal.preet@gmail.com | Mumbai, India',
          'Focus:     Production Backend Services, Kubernetes Orchestration, Observability, Applied ML',
          'Resume:    Download full PDF via /resume.pdf'
        ].join('\n');
      }
    },
    cat: {
      desc: 'Concatenate files',
      run: (args) => {
        const file = args[0];
        if (file === 'resume' || file === 'resume.pdf' || file === 'resume.txt') {
          return COMMANDS['cat resume'].run();
        }
        if (file === 'bio.txt' || file === 'about.txt') {
          return 'I am a backend & DevOps engineer passionate about resilient infrastructure, K8s orchestration, and sub-50ms AI microservices.';
        }
        return `cat: ${file || 'missing filename'}: No such file. Try: cat resume`;
      }
    },
    contact: {
      desc: 'Contact information',
      run: () => {
        return [
          'CONNECT WITH PREET DALAL:',
          '  Email:    mdalal.preet@gmail.com',
          '  GitHub:   https://github.com/preetdalal',
          '  LinkedIn: https://linkedin.com/in/preetdalal',
          '  Location: Mumbai, India (IST)'
        ].join('\n');
      }
    },
    date: {
      desc: 'Print date',
      run: () => new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + ' (IST - Mumbai)'
    },
    theme: {
      desc: 'Switch color theme',
      run: (args) => {
        const color = args[0]?.toLowerCase();
        const root = document.documentElement;
        if (color === 'cyan') {
          root.style.setProperty('--accent', '#06b6d4');
          root.style.setProperty('--accent-light', '#67e8f9');
          return 'Theme switched to Cyan.';
        } else if (color === 'purple') {
          root.style.setProperty('--accent', '#a855f7');
          root.style.setProperty('--accent-light', '#c084fc');
          return 'Theme switched to Purple.';
        } else if (color === 'amber') {
          root.style.setProperty('--accent', '#f59e0b');
          root.style.setProperty('--accent-light', '#fbbf24');
          return 'Theme switched to Amber.';
        } else {
          root.style.setProperty('--accent', '#10b981');
          root.style.setProperty('--accent-light', '#34d399');
          return 'Theme reset to Emerald.';
        }
      }
    }
  };

  function appendLine(text, className = 'response-line') {
    const line = document.createElement('div');
    line.className = `term-line ${className}`;
    line.textContent = text;
    outputContainer.appendChild(line);
    termBody.scrollTop = termBody.scrollHeight;
  }

  function executeCommand(rawCmd) {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    history.push(trimmed);
    historyIndex = history.length;

    // Echo input
    appendLine(`guest@preet-k8s:~$ ${trimmed}`, 'prompt-line');

    const parts = trimmed.split(' ');
    const primaryCmd = parts[0].toLowerCase();
    const fullCmd = parts.slice(0, 3).join(' ').toLowerCase();
    const twoWordCmd = parts.slice(0, 2).join(' ').toLowerCase();

    if (trimmed.toLowerCase() === 'clear') {
      outputContainer.innerHTML = '';
      return;
    }

    if (COMMANDS[fullCmd]) {
      const out = COMMANDS[fullCmd].run(parts.slice(3));
      appendLine(out, 'response-line');
    } else if (COMMANDS[twoWordCmd]) {
      const out = COMMANDS[twoWordCmd].run(parts.slice(2));
      appendLine(out, 'response-line');
    } else if (COMMANDS[primaryCmd]) {
      const out = COMMANDS[primaryCmd].run(parts.slice(1));
      appendLine(out, 'response-line');
    } else {
      appendLine(`command not found: ${trimmed}. Type 'help' to see available commands.`, 'error-line');
    }
  }

  inputElem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = inputElem.value;
      inputElem.value = '';
      executeCommand(val);
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
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const val = inputElem.value.trim();
      const match = Object.keys(COMMANDS).find(k => k.startsWith(val));
      if (match) {
        inputElem.value = match;
      }
    }
  });

  // Quick Command buttons
  quickCmdChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd') || chip.textContent.trim();
      executeCommand(cmd);
      inputElem.focus();
    });
  });

  // Initial welcome message
  appendLine('Welcome to Preet Dalal’s interactive shell [v2.4.0-k8s].', 'accent-line');
  appendLine("Type 'help' or click any quick command pill above to get started.", 'response-line');
})();
