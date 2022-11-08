const books = require('./book-list')
const lowPrice = require('./low-value')

for(let i = 0; i < books.length - 1; i++){
    let lower = lowPrice(books, i);
    let currentBook = books[i];
    let lowerPriceBook = books[lower];

    books[i] = lowerPriceBook;
    books[lower] = currentBook;
}

console.table(books);