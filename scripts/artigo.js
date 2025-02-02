// Aguarda o site carregar antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado com sucesso!");

    // Pegamos os elementos do HTML
    const botaoAbrir = document.getElementById("active"); // O botão "Saiba mais"
    const popup = document.querySelector(".container-popup"); // A caixa do popup
    const botaoFechar = document.getElementById("inactive"); // O botão "X" para fechar

    // Quando clicar no botão "Saiba mais", o popup aparece
    botaoAbrir.addEventListener("click", function () {
        popup.style.display = "flex"; // Faz o popup aparecer
    });

    // Quando clicar no botão "X", o popup desaparece
    botaoFechar.addEventListener("click", function () {
        popup.style.display = "none"; // Faz o popup sumir
    });

    // Fecha o popup se clicar fora dele
    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none"; // Esconde o popup
        }
    });
});