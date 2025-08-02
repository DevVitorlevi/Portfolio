const carousel = document.getElementById("carousel");
const dotsContainer = document.getElementById("carousel-dots");
let cards = [];
let currentIndex = 0;
let autoScrollInterval = null;
let isInitialized = false;

function createDots() {
  if (!dotsContainer) return;
  dotsContainer.innerHTML = "";
  cards.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.addEventListener("click", () => scrollToCard(i));
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  if (!dotsContainer) return;
  const dots = dotsContainer.querySelectorAll("button");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function scrollToCard(index) {
  if (!carousel || !cards[index]) return;

  const card = cards[index];
  const carouselCenter = carousel.offsetWidth / 2;
  const cardCenter = card.offsetWidth / 2;

  // Calcula o scrollLeft para centralizar o card
  const scrollLeft = card.offsetLeft - carouselCenter + cardCenter;

  carousel.scrollTo({
    left: scrollLeft,
    behavior: "smooth"
  });

  currentIndex = index;
  updateDots();
  resetAutoScroll();
  update3DEffect();
}

function autoAdvance() {
  if (cards.length === 0) return;
  currentIndex = (currentIndex + 1) % cards.length;
  scrollToCard(currentIndex);
}

function resetAutoScroll() {
  clearInterval(autoScrollInterval);
  autoScrollInterval = setInterval(autoAdvance, 4000);
}

function onScroll() {
  if (!carousel) return;
  const carouselCenter = carousel.scrollLeft + carousel.offsetWidth / 2;

  // Encontrar card mais próximo do centro
  let closestIndex = 0;
  let minDistance = Infinity;

  cards.forEach((card, i) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const distance = Math.abs(cardCenter - carouselCenter);
    if (distance < minDistance) {
      minDistance = distance;
      closestIndex = i;
    }
  });

  if (closestIndex !== currentIndex) {
    currentIndex = closestIndex;
    updateDots();
  }

  update3DEffect();
}

// Aplica efeito 3D (rotação e escala) nos cards conforme scroll
function update3DEffect() {
  if (!carousel) return;
  cards.forEach(card => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const carouselCenter = carousel.scrollLeft + carousel.offsetWidth / 2;
    const distanceRatio = (cardCenter - carouselCenter) / card.offsetWidth;

    // Rotação limitada a ±15 graus, escala de 0.85 a 1.05
    const rotateY = -distanceRatio * 15;
    const scale = 1 - Math.min(Math.abs(distanceRatio) * 0.15, 0.15);

    card.style.transform = `perspective(1200px) rotateY(${rotateY}deg) scale(${scale})`;
    card.style.transition = 'transform 0.3s ease-out';
  });
}

function initCarousel() {
  if (isInitialized) return; // evita re-inicializações
  if (!carousel) return;

  cards = Array.from(carousel.querySelectorAll(".service-card"));
  if (cards.length === 0) return;

  createDots();
  updateDots();
  carousel.addEventListener("scroll", onScroll, { passive: true });
  resetAutoScroll();
  update3DEffect();

  isInitialized = true;
}

function destroyCarousel() {
  clearInterval(autoScrollInterval);
  if (!carousel) return;

  carousel.removeEventListener("scroll", onScroll);
  if (dotsContainer) dotsContainer.innerHTML = "";
  cards.forEach(card => {
    card.style.transform = "";
    card.style.transition = "";
  });
  isInitialized = false;
  currentIndex = 0;
}

function checkScreenWidth() {
  const width = window.innerWidth;
  if (width >= 768 && width <= 1099) {
    initCarousel();
  } else {
    destroyCarousel();
  }
}

window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);
