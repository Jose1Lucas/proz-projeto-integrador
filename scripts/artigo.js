// Seleciona todos os botões "Saiba mais" e "Fechar"
const botoesAbrir = document.querySelectorAll(".btn-abrir");
const botoesFechar = document.querySelectorAll(".btn-fechar");
const popups = document.querySelectorAll(".container-popup");

// Adiciona evento de clique para cada botão "Saiba mais"
botoesAbrir.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    popups[index].style.display = "flex"; // Exibe o pop-up correspondente
  });
});

// Adiciona evento de clique para cada botão "Fechar (×)"
botoesFechar.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    popups[index].style.display = "none"; // Oculta o pop-up correspondente
  });
});

// Fecha o pop-up ao clicar fora da área do conteúdo
window.addEventListener("click", (event) => {
  popups.forEach((popup) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navbar = document.querySelector(".navbar");
  const menuContent = document.querySelector(".menu-content");

  menuIcon.addEventListener("click", function (event) {
    navbar.classList.toggle("menu-active");
    event.stopPropagation(); // Evita que o clique no ícone feche o menu imediatamente
  });

  document.addEventListener("click", function (event) {
    if (
      !menuContent.contains(event.target) &&
      !menuIcon.contains(event.target)
    ) {
      navbar.classList.remove("menu-active");
    }
  });
});
