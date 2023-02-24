// Ordenar de uma certa posição para baixo

const listaLivros = require('./array');

function findLowerElements(pivot, array){
    let smallest = 0;

    for(let current = 0 ; current < array.length ; current++) {
        let currentElement = array[current];
        if(currentElement.preco < pivot.preco) { 
            smallest++;
        }
    }

    swapPosition(array, array.indexOf(pivot), smallest);
    return array;
}

function swapPosition(array, from, to) {
    const element1 = array[from];
    const element2 = array[to];

    array[to] = element1;
    array[from] = element2;
}

function divideOnPivot(array){
    const pivot = array[Math.floor(array.length / 2)];
    findLowerElements(pivot, array);
    let smallestValues = 0;

    for (let analyzing = 0; analyzing < array.length; analyzing++) {
        let current = array[analyzing];
        if(current.preco <= pivot.preco && current !== pivot) {
            swapPosition(array, analyzing, smallestValues);
            smallestValues++;
        }
    }

    return array;
}

module.exports = swapPosition;