
// Animação de entrada dos elementos
const elements = document.querySelectorAll(
  '.card, .dream-list div, .final-message'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

elements.forEach(element => observer.observe(element));

// Destaca a página atual no menu
const currentPage = location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('nav a').forEach(link => {
  const linkPage = link.getAttribute('href');

  if (linkPage === currentPage) {
    link.style.color = '#9370db';
    link.style.fontWeight = '700';
  }
});

// Atualiza o ano automaticamente
document.querySelectorAll('footer').forEach(footer => {
  footer.innerHTML = footer.innerHTML.replace(
    '2026',
    new Date().getFullYear()
  );
});
