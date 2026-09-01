/**
 * Preet Dalal Portfolio — Main Interactivity & Core Scripts
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  /* --------------------------------------------------------------------------
     1. DYNAMIC IST CLOCK & LATENCY SIMULATOR
     -------------------------------------------------------------------------- */
  const clockEl = document.getElementById('ist-clock');
  const hudClockEl = document.getElementById('hud-time');
  const hudLatencyEl = document.getElementById('hud-latency');

  function updateTime() {
    const now = new Date();
    const istTimeStr = now.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    if (clockEl) clockEl.textContent = `${istTimeStr} IST`;
    if (hudClockEl) hudClockEl.textContent = `${istTimeStr} IST`;
  }
  setInterval(updateTime, 1000);
  updateTime();

  // Subtle latency jitter simulator
  if (hudLatencyEl) {
    setInterval(() => {
      const ping = Math.floor(18 + Math.random() * 14);
      hudLatencyEl.textContent = `${ping}ms`;
    }, 4000);
  }

  /* --------------------------------------------------------------------------
     2. TOAST NOTIFICATION SYSTEM
     -------------------------------------------------------------------------- */
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, iconName = 'check-circle-2') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <i data-lucide="${iconName}" style="color: var(--accent); width: 16px; height: 16px;"></i>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
  window.showToast = showToast;

  /* --------------------------------------------------------------------------
     3. SPOTLIGHT CARD MOUSE TRACKING
     -------------------------------------------------------------------------- */
  const spotlightCards = document.querySelectorAll('.spotlight-card, .profile-card, .blueprint-card');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  /* --------------------------------------------------------------------------
     4. PROJECT CATEGORY FILTERING
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     5. TECH STACK LIVE SEARCH & HIGHLIGHT
     -------------------------------------------------------------------------- */
  const stackSearchInput = document.getElementById('stack-search');
  const stackBadges = document.querySelectorAll('.stack-badge');

  if (stackSearchInput) {
    stackSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      stackBadges.forEach(badge => {
        const text = badge.textContent.toLowerCase();
        if (query && text.includes(query)) {
          badge.classList.add('highlighted');
        } else {
          badge.classList.remove('highlighted');
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     6. ONE-CLICK EMAIL COPY & QUICK ACTIONS
     -------------------------------------------------------------------------- */
  const copyEmailBtns = document.querySelectorAll('.btn-copy-email');
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'mdalal.preet@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Copied "mdalal.preet@gmail.com" to clipboard!', 'copy');
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 30,
            spread: 50,
            origin: { y: 0.8 },
            colors: ['#10b981', '#34d399', '#06b6d4']
          });
        }
      }).catch(() => {
        showToast('Email: mdalal.preet@gmail.com');
      });
    });
  });

  /* --------------------------------------------------------------------------
     7. CONTACT FORM SUBMISSION
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value || 'Guest';
      const email = document.getElementById('form-email')?.value;
      const message = document.getElementById('form-message')?.value;

      if (!email || !message) {
        showToast('Please provide your email and message', 'alert-circle');
        return;
      }

      // Compose mailto fallback or send
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
      window.location.href = `mailto:mdalal.preet@gmail.com?subject=${subject}&body=${body}`;

      showToast(`Thanks ${name}! Opening mail client...`, 'send');
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#34d399', '#06b6d4', '#8b5cf6']
        });
      }
      contactForm.reset();
    });
  }

  /* --------------------------------------------------------------------------
     8. COMMAND PALETTE (CTRL+K / ⌘K)
     -------------------------------------------------------------------------- */
  const paletteModal = document.getElementById('command-palette-modal');
  const paletteInput = document.getElementById('palette-search-input');
  const paletteTriggers = document.querySelectorAll('.trigger-command-palette');
  const paletteItems = document.querySelectorAll('.palette-item');

  function openPalette() {
    if (!paletteModal) return;
    paletteModal.classList.add('active');
    if (paletteInput) {
      paletteInput.value = '';
      paletteInput.focus();
      filterPalette('');
    }
  }

  function closePalette() {
    if (!paletteModal) return;
    paletteModal.classList.remove('active');
  }

  paletteTriggers.forEach(t => t.addEventListener('click', openPalette));

  if (paletteModal) {
    paletteModal.addEventListener('click', (e) => {
      if (e.target === paletteModal) closePalette();
    });
  }

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (paletteModal && paletteModal.classList.contains('active')) {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === 'Escape') {
      closePalette();
    }
  });

  function filterPalette(query) {
    const q = query.toLowerCase().trim();
    paletteItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  if (paletteInput) {
    paletteInput.addEventListener('input', (e) => {
      filterPalette(e.target.value);
    });
  }

  paletteItems.forEach(item => {
    item.addEventListener('click', () => {
      const action = item.getAttribute('data-action');
      closePalette();

      if (action === 'copy-email') {
        navigator.clipboard.writeText('mdalal.preet@gmail.com');
        showToast('Copied email to clipboard!');
      } else if (action === 'view-resume') {
        window.open('/resume.pdf', '_blank');
      } else if (action === 'open-github') {
        window.open('https://github.com/preetdalal', '_blank');
      } else if (action === 'open-linkedin') {
        window.open('https://linkedin.com/in/preetdalal', '_blank');
      } else if (action?.startsWith('#')) {
        const target = document.querySelector(action);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  /* --------------------------------------------------------------------------
     9. MOBILE MENU TOGGLE
     -------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  /* --------------------------------------------------------------------------
     10. ACTIVE LINK SCROLLSPY
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
});
