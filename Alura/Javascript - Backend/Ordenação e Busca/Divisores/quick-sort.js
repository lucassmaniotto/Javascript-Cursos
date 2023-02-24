const listaLivros = require('./array');
const trocaLugar = require('./pivot');

function quickSort(array, left, right){
    if(array.length > 1) {
        let index = partition(array, left, right);
        if(left < index - 1){
            quickSort(array, left, index - 1);
        }
        if(right > index){
            quickSort(array, index, right)
        }
    }
    return array;
}

function partition(array, left, right) {
    let pivot = array[Math.floor((left + right) / 2)];
    let postionLeft = left;
    let postionRight = right;

    while(postionLeft <= postionRight) {
       while(array[postionLeft].preco < pivot.preco){
        postionLeft++;
       }

       while(array[postionRight].preco > pivot.preco){
        postionRight--;
       }

       if(postionLeft <= postionRight){
        trocaLugar(array, postionLeft, postionRight);
        postionLeft++;
        postionRight--;
       }
    }

    return postionLeft;
}

console.table(quickSort(listaLivros, 0, listaLivros.length - 1));