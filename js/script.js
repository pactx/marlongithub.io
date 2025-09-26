// Espera o documento carregar para garantir que todos os elementos existam
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".header .navbar");
  const menuBtn = document.querySelector("#menu-btn");

  // Adiciona a funcionalidade de clique ao botão do menu
  if (menuBtn && navbar) {
    menuBtn.onclick = () => {
      navbar.classList.toggle("active");
    };
  }

  // Fecha o menu quando o usuário rola a página
  window.onscroll = () => {
    if (navbar) {
      navbar.classList.remove("active");
    }
  };
});
