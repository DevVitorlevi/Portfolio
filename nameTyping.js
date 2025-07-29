const roles = ["Full-Stack", "Front-End", "Back-End"];
const typedRole = document.getElementById("typed-role");
const cursor = document.getElementById("cursor");

let roleIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (typing) {
    typedRole.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      typing = false;
      setTimeout(typeEffect, 1500); // tempo que o texto fica antes de apagar
    } else {
      setTimeout(typeEffect, 100);
    }
  } else {
    typedRole.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 300);
    } else {
      setTimeout(typeEffect, 50);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
