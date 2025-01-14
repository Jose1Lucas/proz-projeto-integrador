document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menuContent = document.querySelector(".menu-content");

  menuIcon.addEventListener("click", () => {
    menuContent.classList.toggle("menu-active");
  });

  // Fecha o menu se o usuário clicar fora do menu em telas pequenas.
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".navbar") &&
      !event.target.closest(".menu-content") &&
      window.innerWidth < 769
    ) {
      menuContent.classList.remove("menu-active");
    }
  });
});

function mostrarInformacoes(tipo) {
  // Esconde todas as seções
  const mitologias = document.querySelectorAll(
    ".mitologia-grega, .mitologia-romana"
  );
  mitologias.forEach((el) => (el.style.display = "none"));

  // Mostra a mitologia selecionada
  if (tipo === "grega") {
    document.querySelector(".mitologia-grega").style.display = "block";
  } else if (tipo === "romana") {
    document.querySelector(".mitologia-romana").style.display = "block";
  }
}
