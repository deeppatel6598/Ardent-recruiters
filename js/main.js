/* =============================================
   ARDENT RECRUITERS — Main JS
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Scroll Reveal ---- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ---- Counter Animation ---- */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1800;
    const start = performance.now();
    const isDecimal = String(target).includes('.');

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = target * ease;
      el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString()) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

  /* ---- FAQ Accordion ---- */
  document.addEventListener('click', (e) => {
    const question = e.target.closest('.faq-question');
    if (!question) return;
    const item = question.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item.open').forEach(open => {
      open.classList.remove('open');
      open.querySelector('.faq-answer').style.maxHeight = '0';
    });

    // Open clicked (if was closed)
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });

  /* ---- Accordion ---- */
  document.addEventListener('click', (e) => {
    const header = e.target.closest('.accordion-header');
    if (!header) return;
    const item = header.closest('.accordion-item');
    const body = item.querySelector('.accordion-body');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.accordion-item.open').forEach(open => {
      open.classList.remove('open');
      open.querySelector('.accordion-body').style.maxHeight = '0';
    });

    if (!isOpen) {
      item.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });

  /* ---- Form submission feedback ---- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Message Sent!';
        btn.style.background = 'var(--success)';
        setTimeout(() => {
          btn.textContent = orig;
          btn.disabled = false;
          btn.style.background = '';
          contactForm.reset();
        }, 3000);
      }, 1200);
    });
  }

  /* ---- Newsletter form ---- */
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const input = form.querySelector('input');
      btn.textContent = 'Subscribed!';
      btn.style.background = 'var(--success)';
      input.value = '';
      setTimeout(() => {
        btn.textContent = 'Subscribe';
        btn.style.background = '';
      }, 3000);
    });
  });

  /* ---- Smooth stagger for grid children ---- */
  document.querySelectorAll('.stagger-children').forEach(parent => {
    const children = parent.children;
    Array.from(children).forEach((child, i) => {
      child.style.animationDelay = `${i * 0.07}s`;
      child.classList.add('reveal');
      revealObserver.observe(child);
    });
  });

});
