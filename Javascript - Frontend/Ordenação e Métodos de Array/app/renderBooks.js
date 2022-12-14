const elementForInsertBooks = document.querySelector('#livros');
const elementWithTotalValueOfAvailableBooks = document.querySelector('#valor_total_livros_disponiveis');

function renderBooks(booksWithDiscount) {
    elementWithTotalValueOfAvailableBooks.innerHTML = '';
    elementForInsertBooks.innerHTML = '';
    booksWithDiscount.forEach(book => {
        let avalaible = book.quantidade > 0 ? 'livro__imagem' : 'livro__imagem indisponivel';
        elementForInsertBooks.innerHTML += `
        <div class="livro">
            <img class="${avalaible}" src="${book.imagem}" alt="${book.alt}" />
            <h2 class="livro__titulo">
                ${book.titulo}
            </h2>
            <p class="livro__descricao">${book.autor}</p>
            <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${book.categoria}</span>
            </div>
        </div>
        `
    });
  }