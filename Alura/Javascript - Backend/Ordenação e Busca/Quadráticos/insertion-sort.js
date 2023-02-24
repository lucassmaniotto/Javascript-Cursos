const books = require('./book-list');
const swap = require('./swap');

function insertionSort(array) {
    for(let i = 0; i < array.length; i++){
        let analysis = i;
        while(analysis > 0 && array[analysis].price < array[analysis - 1].price){
            swap(array, analysis);
            analysis--;
        }
    }
    console.table(array);
}

insertionSort(books);