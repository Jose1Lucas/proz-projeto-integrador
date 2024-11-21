let currentPage = 1;
const totalPages = 4;

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none'); // Esconde todas as páginas

    const pageToShow = document.getElementById(`page-${pageNumber}`);
    if (pageToShow) {
        pageToShow.style.display = 'block'; // Mostra a página selecionada
    }

    // Atualiza o indicador de página atual e as restantes
    const indicators = document.querySelectorAll('.current-page-indicator');
    indicators.forEach((indicator, index) => {
        if (index + 1 === pageNumber) {
            const pagesLeft = totalPages - pageNumber;
            indicator.textContent = `Página atual: ${pageNumber} de ${totalPages}. Restantes: ${pagesLeft}.`;
        }
    });

    localStorage.setItem('currentPage', pageNumber); // Salva a página atual no localStorage
}

function navigatePage(direction) {
    currentPage += direction;

    // Garantir que a página fique dentro do intervalo válido
    if (currentPage < 1) {
        currentPage = totalPages;
    } else if (currentPage > totalPages) {
        currentPage = 1;
    }

    showPage(currentPage);
}

// Recuperar a página salva no localStorage ao carregar
document.addEventListener('DOMContentLoaded', () => {
    currentPage = parseInt(localStorage.getItem('currentPage')) || 1; // Caso não tenha página salva, vai para a 1
    showPage(currentPage);
});
