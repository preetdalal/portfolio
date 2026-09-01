/**
 * Preet Dalal — Interactive Developer Shell
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
      'AVAILABLE COMMANDS:',
      '  about                Read engineering background & focus',
      '  education            View academic background (DJSCE)',
      '  projects             List production-grade projects & repositories',
      '  stack                View backend & DevOps tooling matrix',
      '  contact              Get direct contact links',
      '  clear                Clear terminal output'
    ].join('\n'),

    about: () => [
      'ABOUT PREET DALAL:',
      'IT student at D. J. Sanghvi College of Engineering, specializing in DevOps',
      'and Cloud Engineering, with backend development as foundation and applied',
      'AI/ML as an additional strength.',
      '',
      'Focus: Building backend systems in Java & Python, containerizing with Docker,',
      'orchestrating on Kubernetes, and monitoring with Prometheus & Grafana.'
    ].join('\n'),

    education: () => [
      'EDUCATION:',
      'Dwarkadas J. Sanghvi College of Engineering (DJSCE), Mumbai',
      'B.Tech in Information Technology · Honours in DevOps (2024–2028)',
      'CGPA: 8.4 / 10.0'
    ].join('\n'),

    projects: () => [
      '1. FraudGuard AI — Fraud detection platform running on K8s with autoscaling & Grafana',
      '   Source: https://github.com/preetdalal/fraud-detection-system-scoe',
      '',
      '2. Job Application Tracker API — Spring Boot 3, Redis, PostgreSQL, Testcontainers',
      '   Source: https://github.com/preetdalal/job-tracker',
      '',
      '3. SVAMITVA AI — SIH Drone Orthophoto cadastral mapping (PyTorch U-Net + FastAPI)',
      '   Source: https://github.com/preetdalal/svamvitva-sih | Demo: https://nerdvana-sih.vercel.app',
      '',
      '4. RASC-Net — Hardened vision model resilient against adversarial attacks (FGSM)',
      '   Source: https://github.com/preetdalal/adversial-skin-cancer'
    ].join('\n'),

    stack: () => [
      'ENGINEERING STACK:',
      '  DevOps & Cloud:  Kubernetes, Docker, Prometheus, Grafana, GitHub Actions, Linux',
      '  Backend:         Java 17, Spring Boot 3, Spring Security 6, PostgreSQL, Redis, FastAPI',
      '  AI / ML:         PyTorch, Hugging Face Hub, U-Net, Adversarial Defense, OpenCV',
      '  Languages:       Java, Python, TypeScript, SQL, Bash'
    ].join('\n'),

    contact: () => [
      'GET IN TOUCH:',
      '  Email:    mdalal.preet@gmail.com',
      '  LinkedIn: https://linkedin.com/in/preetdalal',
      '  GitHub:   https://github.com/preetdalal'
    ].join('\n')
  };

  function appendLine(text, isPrompt = false) {
    const el = document.createElement('div');
    el.className = `term-line ${isPrompt ? 'prompt' : ''}`;
    el.textContent = text;
    outputContainer.appendChild(el);
    if (termWindow) termWindow.scrollTop = termWindow.scrollHeight;
  }

  function handleCmd(raw) {
    const cmd = raw.trim();
    if (!cmd) return;

    history.push(cmd);
    historyIndex = history.length;

    appendLine(`preet@djsce:~$ ${cmd}`, true);

    if (cmd.toLowerCase() === 'clear') {
      outputContainer.innerHTML = '';
      return;
    }

    const fn = CMDS[cmd.toLowerCase()];
    if (fn) {
      appendLine(fn());
    } else {
      appendLine(`command not found: "${cmd}". Type 'help' for available commands.`);
    }
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

  appendLine("Preet Dalal Shell initialized. Type 'help' or click a command above to explore.");
})();
