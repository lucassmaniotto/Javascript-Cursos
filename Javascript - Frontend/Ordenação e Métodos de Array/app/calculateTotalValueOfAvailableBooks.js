function calculateTotalValueOfAvailableBooks(books) {
    return books.reduce((accumulator, book) => accumulator + book.preco, 0).toFixed(2);
}