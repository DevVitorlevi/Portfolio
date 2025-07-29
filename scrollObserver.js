const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target); // performance: anima uma vez
      }
    });
  }, {
    threshold: 0.15
  });

  document.querySelectorAll('.animate').forEach(el => {
    const delay = el.dataset.delay;
    if (delay) el.style.setProperty('--delay', delay);
    observer.observe(el);
  });