const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => button.addEventListener('click', filterBooks));

function filterBooks() {
    const category = document.getElementById(this.id).value;
    let booksFiltered = category === 'disponivel' ? filterByAvailableBooks() : filterByCategory(category);
    renderBooks(booksFiltered);
    if (category === 'disponivel') {
        const totalValue = calculateTotalValueOfAvailableBooks(booksFiltered);
        displayTotalValueOfAvailableBooks(totalValue);
    }
}

function filterByCategory(category) {
    return books.filter(book => book.categoria === category);
}

function filterByAvailableBooks() {
    return books.filter(book => book.quantidade > 0);
}

function displayTotalValueOfAvailableBooks(totalValue) {
    elementWithTotalValueOfAvailableBooks.innerHTML += `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
        </div>
    `;
}