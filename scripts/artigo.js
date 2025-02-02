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

