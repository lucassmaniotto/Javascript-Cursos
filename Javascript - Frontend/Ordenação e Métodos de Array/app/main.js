let books = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getSearchBooksAPI();

async function getSearchBooksAPI() {
  const response = await fetch(endpointAPI);
  books = await response.json();
  books = applyDiscount(books);
  renderBooks(booksWithDiscount);
}

