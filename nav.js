/* Shared site chrome: nav + footer */
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  const links = [
    { href: 'index.html',   label: 'Home' },
    { href: 'privacy.html', label: 'Privacy' },
    { href: 'terms.html',   label: 'Terms of Use' },
    { href: 'support.html', label: 'Support' },
  ];

  const nav = document.createElement('header');
  nav.className = 'site-nav';
  nav.innerHTML = `
    <div class="row">
      <a class="brand" href="index.html">
        <span class="mark">V</span>
        <span>The Values Auction House</span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        ${links.map(l => `<a href="${l.href}"${path === l.href ? ' class="active"' : ''}>${l.label}</a>`).join('')}
        <a class="btn btn-primary" href="https://apps.apple.com" target="_blank" rel="noopener" style="padding:8px 14px;font-size:13.5px;border-bottom:none">App Store</a>
      </nav>
    </div>`;
  document.body.prepend(nav);

  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="foot-inner">
      <div>
        <div class="brand">
          <span class="mark">V</span>
          <span>The Values Auction House</span>
        </div>
        <div class="tagline">A quiet self-reflection exercise. On-device only.</div>
      </div>
      <nav class="links" aria-label="Footer">
        <a href="index.html">Home</a>
        <a href="privacy.html">Privacy</a>
        <a href="terms.html">Terms of Use</a>
        <a href="support.html">Support</a>
        <a href="mailto:support@vfsafety.app">Contact</a>
      </nav>
    </div>
    <div class="copyright">© 2026 VFSAFETY. All rights reserved.</div>`;
  document.body.appendChild(footer);
})();