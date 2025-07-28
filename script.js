const helloText = "Olá! Me chamo Vitor Levi ";
const nameText = "Desenvolvedor Full-Stack Web";

const typedHello = document.getElementById("typed-hello");
const typedName = document.getElementById("typed-name");
const socialLinks = document.getElementById("social-links");
const cursor1 = document.getElementById("cursor1");
const cursor2 = document.getElementById("cursor2");

// Função para digitar texto letra a letra
function typeText(element, text, delay = 10) {
  return new Promise((resolve) => {
    let index = 0;
    const interval = setInterval(() => {
      element.textContent += text[index];
      index++;
      if (index === text.length) {
        clearInterval(interval);
        resolve();
      }
    }, delay);
  });
}

async function startTyping() {
  cursor2.style.display = "none"; // esconde cursor do segundo texto enquanto não digita

  await typeText(typedHello, helloText, 90); // velocidade aumentada
  cursor1.style.display = "none"; // oculta cursor do primeiro texto quando termina

  cursor2.style.display = "inline-block"; // mostra cursor do segundo texto
  await typeText(typedName, nameText, 75); // velocidade aumentada
  cursor2.style.display = "none"; // oculta cursor do segundo texto ao terminar

  // Exibe social links com fade-in
  socialLinks.style.opacity = 1;
}

document.addEventListener("DOMContentLoaded", startTyping);



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