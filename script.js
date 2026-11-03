// Highlight the nav link for the section in view
const links = document.querySelectorAll('.nav a[href^="#"]');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => s && observer.observe(s));

// The last section is too short to reach the highlight band, so mark it at the bottom of the page
window.addEventListener('scroll', () => {
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) {
    links.forEach((a, i) => a.classList.toggle('active', i === links.length - 1));
  }
}, { passive: true });

// Mobile menu
const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.forEach(a => a.addEventListener('click', () => {
  sidebar.classList.remove('open');
  toggle.setAttribute('aria-expanded', false);
}));

// Publication filters
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === btn));
    const type = btn.dataset.filter;
    document.querySelectorAll('.pubs li').forEach(li => {
      li.classList.toggle('hidden', type !== 'all' && li.dataset.type !== type);
    });
  });
});

// Copy email address
document.querySelectorAll('.copy-email').forEach(btn => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.email);
      btn.textContent = 'Copied';
    } catch {
      btn.textContent = 'Selected';
      const range = document.createRange();
      range.selectNodeContents(document.querySelector('.email-address'));
      getSelection().removeAllRanges(); getSelection().addRange(range);
    }
    setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
