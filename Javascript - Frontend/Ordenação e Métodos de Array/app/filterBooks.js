const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => button.addEventListener('click', filterBooks));

function filterBooks() {
    const category = document.getElementById(this.id).value;
    let booksFiltered = category === 'disponivel' ? books.filter(book => book.quantidade > 0) : books.filter(book => book.categoria === category);
    renderBooks(booksFiltered);
}