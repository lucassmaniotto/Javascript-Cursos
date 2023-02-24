const listaLivros = require('./array');

function mergeSort(array) {
    if(array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const esquerda = mergeSort(array.slice(0, meio));
        const direita = mergeSort(array.slice(meio, array.length));

        array = ordena(esquerda, direita);

    }
    return array;
}

function ordena(esquerda, direita) {
    const resultado = [];
    let indiceEsquerda = 0;
    let indiceDireita = 0;

    while(indiceEsquerda < esquerda.length && indiceDireita < direita.length) {
        let elementoEsquerda = esquerda[indiceEsquerda];
        let elementoDireita = direita[indiceDireita];

        if(elementoEsquerda.preco < elementoDireita.preco) {
            resultado.push(elementoEsquerda);
            indiceEsquerda++;
        }
        else {
            resultado.push(elementoDireita);
            indiceDireita++;
        }
    }

    return resultado.concat(indiceEsquerda < esquerda.length ? esquerda.slice(indiceEsquerda) : direita.slice(indiceDireita));
}

console.table(mergeSort(listaLivros));