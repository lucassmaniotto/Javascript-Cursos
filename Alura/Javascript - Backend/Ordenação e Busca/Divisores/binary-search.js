const listaLivrosOrdenados = require('./array-ordenado');

function search(array, from, to, searchValue){
    if(from < to) {
        const middle = Math.floor((from + to) / 2);
        const current = array[middle];

        if(searchValue === current.preco){
            return middle;
        }
        if(searchValue < current.preco){
            return search(array, from, middle - 1, searchValue);
        }
        if(searchValue > current.preco){
            return search(array, middle + 1, to, searchValue);
        }
    }
    else {
        return "indefinida por não estar dentro do array"
    }
}

console.log(`A posição buscada no array é ${search(listaLivrosOrdenados, 0, listaLivrosOrdenados.length - 1, 22)}`)