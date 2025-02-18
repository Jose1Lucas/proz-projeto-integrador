 // Indicador da página inicial
let numIndicador = 1;

// Captura dos botões de navegação
const botaoAvancar = document.querySelector("#avancar");
const botaoRetroceder = document.querySelector("#retroceder");

// Captura das páginas e dos indicadores
const paginas = document.querySelectorAll(".pagina");
const indicadorPaginaAtual = document.querySelectorAll(".num-pagina");

// Função para atualizar a exibição das páginas
function atualizarPaginas() {
  paginas.forEach((pagina, index) => {
    // Exibe a página correspondente e oculta as outras
    if (index + 1 === numIndicador) {
      pagina.style.display = "block";
    } else {
      pagina.style.display = "none";
    }
  });

  // Atualiza os indicadores com o número da página atual
  indicadorPaginaAtual.forEach((element) => {
    element.innerText = numIndicador;
    element.style.display = "inline";
  });
}

// Função para incrementar a página (botão "Próximo")
function incrementarPagina() {
  if (numIndicador < paginas.length) {
    numIndicador++;
    atualizarPaginas();
  }
}

// Função para decrementar a página (botão "Anterior")
function decrementarPagina() {
  if (numIndicador > 1) {
    numIndicador--;
    atualizarPaginas();
  }
}

// Adiciona eventos aos botões
botaoAvancar.addEventListener("click", incrementarPagina);
botaoRetroceder.addEventListener("click", decrementarPagina);

// Inicializa a exibição
atualizarPaginas();

// Adiciona um ouvinte de evento que será executado quando o conteúdo da página for completamente carregado
document.addEventListener("DOMContentLoaded", function () {
  
  // Seleciona o elemento de rodapé (footer) no HTML
  const pageElement = document.querySelector("footer"); 
  
  // Verifica se o elemento foi encontrado na página
  if (pageElement) {
    
    // Se o elemento footer for encontrado, ele será rolado até a área visível da tela com uma animação suave
    pageElement.scrollIntoView({
      behavior: "smooth",  // Define que a rolagem será suave
      block: "center",     // Alinha o elemento ao centro da tela verticalmente
      inline: "nearest"    // Ajusta a rolagem para alinhar horizontalmente o mais próximo possível
    });
  }
});

