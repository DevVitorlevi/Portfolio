// Inicializa EmailJS com sua Public Key
(function () {
  emailjs.init("Ht8dFIapMl4ACFoY5");
})();

const form = document.getElementById("contact-form");

// Função para validar e-mail simples (regex)
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

// Função para validar campos do formulário
function validarFormulario() {
  const nome = form.from_name.value.trim();
  const email = form.reply_to.value.trim();
  const mensagem = form.message.value.trim();

  if (nome.length < 3) {
    alert("Por favor, insira um nome com pelo menos 3 caracteres.");
    return false;
  }

  if (!validarEmail(email)) {
    alert("Por favor, insira um e-mail válido.");
    return false;
  }

  if (mensagem.length < 10) {
    alert("A mensagem deve conter pelo menos 10 caracteres.");
    return false;
  }

  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!validarFormulario()) {
    return; // Não enviar se não validou
  }

  emailjs.sendForm("service_lbb3i1h", "template_7tbjjil", this)
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    }, (error) => {
      console.error("Erro:", error);
      alert("Ocorreu um erro. Tente novamente.");
    });
});
