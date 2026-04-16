/* =============================================
   ARDENT RECRUITERS — Shared Components
   ============================================= */

const navHTML = `
<div class="nav-inner">
  <div class="nav-container">
    <a href="index.html" class="nav-logo">
      <div class="logo-icon">AR</div>
      <div class="logo-text">
        <span class="logo-main">Ardent</span>
        <span class="logo-sub">Recruiters</span>
      </div>
    </a>

    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li class="nav-dropdown">
        <a href="#">Services
          <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
        </a>
        <div class="dropdown-menu">
          <a href="job-placement.html" class="dropdown-item">
            <div class="dropdown-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div class="dropdown-item-text">
              <span class="dropdown-item-label">Job Placement</span>
              <span class="dropdown-item-desc">Land your dream IT role fast</span>
            </div>
          </a>
          <a href="recruitment-staffing.html" class="dropdown-item">
            <div class="dropdown-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"/></svg>
            </div>
            <div class="dropdown-item-text">
              <span class="dropdown-item-label">Recruitment & Staffing</span>
              <span class="dropdown-item-desc">We hire so you don't have to</span>
            </div>
          </a>
          <a href="it-training.html" class="dropdown-item">
            <div class="dropdown-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
            </div>
            <div class="dropdown-item-text">
              <span class="dropdown-item-label">IT Training</span>
              <span class="dropdown-item-desc">Job-ready tech skills program</span>
            </div>
          </a>
          <a href="background-verification.html" class="dropdown-item">
            <div class="dropdown-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <div class="dropdown-item-text">
              <span class="dropdown-item-label">Background Verification</span>
              <span class="dropdown-item-desc">Comprehensive pre-hire screening</span>
            </div>
          </a>
        </div>
      </li>
      <li><a href="careers.html">Careers</a></li>
      <li><a href="insights.html">Insights</a></li>
      <li><a href="refer-earn.html">Refer & Earn</a></li>
    </ul>

    <a href="contact.html" class="btn btn-primary btn-sm nav-cta">Get Started</a>

    <button class="nav-toggle" id="navToggle" aria-label="Open menu">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>
</div>

<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" id="mobileClose">✕</button>
  <nav class="mobile-menu-links">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <div style="padding: 1rem; font-size:.75rem;font-weight:700;color:var(--gray-400);text-transform:uppercase;letter-spacing:.06em">Services</div>
    <div class="mobile-submenu">
      <a href="job-placement.html">Job Placement</a>
      <a href="recruitment-staffing.html">Recruitment & Staffing</a>
      <a href="it-training.html">IT Training</a>
      <a href="background-verification.html">Background Verification</a>
    </div>
    <a href="careers.html">Careers</a>
    <a href="insights.html">Insights</a>
    <a href="refer-earn.html">Refer & Earn</a>
  </nav>
  <a href="contact.html" class="btn btn-primary btn-lg" style="width:100%;justify-content:center">Get Started &rarr;</a>
</div>
`;

const footerHTML = `
<div style="max-width:var(--container);margin:0 auto;padding:0 1.5rem">
  <div class="footer-main">
    <div class="footer-brand">
      <div class="footer-logo">
        <div class="footer-logo-icon">AR</div>
        <span class="footer-logo-name">Ardent Recruiters</span>
      </div>
      <p class="footer-tagline">Connecting IT talent with top US employers through expert placement, career coaching, and end-to-end hiring solutions.</p>
      <div class="footer-social">
        <a href="https://www.linkedin.com/company/ardent-recruiters" target="_blank" rel="noopener" class="footer-social-btn" title="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>
    </div>

    <div>
      <h4 class="footer-col-title">Services</h4>
      <ul class="footer-links-list">
        <li><a href="job-placement.html">Job Placement</a></li>
        <li><a href="recruitment-staffing.html">Recruitment & Staffing</a></li>
        <li><a href="it-training.html">IT Training</a></li>
        <li><a href="background-verification.html">Background Verification</a></li>
        <li><a href="refer-earn.html">Refer & Earn</a></li>
      </ul>
    </div>

    <div>
      <h4 class="footer-col-title">Company</h4>
      <ul class="footer-links-list">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="careers.html">Careers</a></li>
        <li><a href="insights.html">Insights & Blog</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>

    <div>
      <h4 class="footer-col-title">Contact</h4>
      <div class="footer-contact-item">
        <div class="footer-contact-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        </div>
        <div>
          <div class="footer-contact-label">Email</div>
          <div class="footer-contact-value"><a href="mailto:info@ardentrecruiters.com">info@ardentrecruiters.com</a></div>
        </div>
      </div>
      <div class="footer-contact-item">
        <div class="footer-contact-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        </div>
        <div>
          <div class="footer-contact-label">USA</div>
          <div class="footer-contact-value"><a href="tel:+17272917437">+1 727 291 7437</a></div>
        </div>
      </div>
      <div class="footer-contact-item">
        <div class="footer-contact-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        </div>
        <div>
          <div class="footer-contact-label">India</div>
          <div class="footer-contact-value"><a href="tel:+917203019900">+91 72030 19900</a></div>
        </div>
      </div>
      <div class="footer-contact-item">
        <div class="footer-contact-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        </div>
        <div>
          <div class="footer-contact-label">Offices</div>
          <div class="footer-contact-value" style="font-size:.8rem">Starke FL · Visnagar · Ahmedabad · Vadodara</div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bottom" style="padding-left:0;padding-right:0">
    <p class="footer-copy">&copy; 2024 Ardent Recruiters. All rights reserved.</p>
    <div class="footer-bottom-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="contact.html">Contact</a>
    </div>
  </div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navEl = document.getElementById('main-nav');
  if (navEl) navEl.innerHTML = navHTML;

  // Inject footer
  const footerEl = document.getElementById('main-footer');
  if (footerEl) footerEl.innerHTML = footerHTML;

  // Set active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#main-nav .nav-links a, .mobile-menu-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Sticky nav
  const nav = document.getElementById('main-nav');
  if (nav) {
    const updateNav = () => {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  // Mobile menu
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('#navToggle');
    const close = e.target.closest('#mobileClose');
    const menu = document.getElementById('mobileMenu');
    if (toggle && menu) {
      menu.classList.toggle('open');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    }
    if (close && menu) {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});
