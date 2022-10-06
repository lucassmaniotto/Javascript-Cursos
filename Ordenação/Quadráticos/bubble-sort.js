const books = require('./book-list');
let aux = 0.0;

for(let i = 0; i < books.length; i++){
    for(let j = 0; j < books.length; j++){
        if(books[i].price < books[j].price){
            aux = books[i];
            books[i] = books[j];
            books[j] = aux;
        }
    }
}

console.log("Ordered Books By Cheapest To Most Expensive");

console.table(books);

console.log("Ordered Books By Most Expensive To Cheapest");
console.table(books.reverse());