const btnOrderByPrice = document.querySelector('#btnOrdenarPorPreco');

btnOrderByPrice.addEventListener('click', sortByPrice);

function sortByPrice() {
    const booksSorted = books.sort((bookA, bookB) => bookA.preco - bookB.preco);
    renderBooks(booksSorted);
}