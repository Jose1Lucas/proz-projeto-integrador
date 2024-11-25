let currentPage = 1;
const totalPages = 10;

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.pagina');
    pages.forEach(page => (page.style.display = 'none')); // Esconde todas as páginas

    const pageToShow = document.getElementById(`pagina-${pageNumber}`); // Corrigido o ID para `pagina-`
    if (pageToShow) {
        pageToShow.style.display = 'block'; // Mostra a página selecionada
    }

    // Atualiza o indicador de página atual
    const indicator = document.querySelector(`#pagina-${pageNumber} .indicador-da-pagina`);
    if (indicator) {
        const pagesLeft = totalPages - pageNumber;
        indicator.textContent = `Página atual: ${pageNumber} de ${totalPages}. Restantes: ${pagesLeft}.`;
    }

    localStorage.setItem('currentPage', pageNumber); // Salva a página atual
}

function navigatePage(direction) {
    currentPage += direction;

    // Garante que a página fique dentro do intervalo válido
    if (currentPage < 1) {
        currentPage = totalPages;
    } else if (currentPage > totalPages) {
        currentPage = 1;
    }

    showPage(currentPage);
}

// Recupera a página salva no localStorage ao carregar
document.addEventListener('DOMContentLoaded', () => {
    currentPage = parseInt(localStorage.getItem('currentPage')) || 1; // Vai para a página 1 se não houver página salva
    showPage(currentPage);
});

// Função para recarregar a página inteira
function reloadPage() {
    location.reload(); // Recarga a página inteira
}
