let books = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

const elementForInsertBooks = document.querySelector('#livros');

getSearchBooksAPI();

async function getSearchBooksAPI() {
  const response = await fetch(endpointAPI);
  books = await response.json();
  //console.table(books);
  books = applyDiscount(books);
  renderBooks(booksWithDiscount);
}

