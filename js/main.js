/**
 * Preet Dalal Portfolio — Main Interactivity
 */
document.addEventListener('DOMContentLoaded', () => {
  // Update IST clock
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

  // Toast system
  const toastBox = document.getElementById('toast-box');
  function showToast(msg) {
    if (!toastBox) return;
    const t = document.createElement('div');
    t.className = 'toast-msg';
    t.textContent = msg;
    toastBox.appendChild(t);

    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => {
      t.classList.remove('show');
      setTimeout(() => t.remove(), 250);
    }, 3000);
  }

  // Copy Email Buttons
  document.querySelectorAll('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'mdalal.preet@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Copied "mdalal.preet@gmail.com" to clipboard');
      }).catch(() => {
        showToast('Email: mdalal.preet@gmail.com');
      });
    });
  });

  // Project Filtering
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

  // Contact Form
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value || 'Guest';
      const email = document.getElementById('form-email')?.value || '';
      const message = document.getElementById('form-message')?.value || '';

      const subject = encodeURIComponent(`Message from ${name}`);
      const body = encodeURIComponent(`${message}\n\nContact: ${name} (${email})`);
      window.location.href = `mailto:mdalal.preet@gmail.com?subject=${subject}&body=${body}`;

      showToast(`Opening mail client for ${name}...`);
      form.reset();
    });
  }
});
