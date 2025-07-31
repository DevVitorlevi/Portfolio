particlesJS("stars-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.8,
      random: false
    },
    size: {
      value: 1.5,
      random: true
    },
    move: {
      enable: true,
      speed: 1.3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out"
    },
    line_linked: {
      enable: false // <-- ESSA LINHA REMOVE LINHAS ENTRE PARTÍCULAS
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});
