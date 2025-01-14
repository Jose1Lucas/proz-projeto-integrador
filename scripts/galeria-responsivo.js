document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const navbar = document.querySelector(".navbar");
  const menuContent = document.querySelector(".menu-content");

  // Alterna a exibição do menu lateral ao clicar no ícone
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("menu-active");
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener("click", (e) => {
    if (!menuContent.contains(e.target) && !menuIcon.contains(e.target)) {
      navbar.classList.remove("menu-active");
    }
  });
});
