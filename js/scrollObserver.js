const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || '0s';
      // Converte '0.4s' pra milissegundos:
      const delayMs = parseFloat(delay) * 1000;

      setTimeout(() => {
        entry.target.classList.add('show');
      }, delayMs);

      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.animate').forEach(el => {
  observer.observe(el);
});
