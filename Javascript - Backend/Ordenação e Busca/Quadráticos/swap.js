function swap(array, analysis){
    let itemAnalysis = array[analysis];
    let previousItem = array[analysis - 1];

    array[analysis] = previousItem;
    array[analysis - 1] = itemAnalysis;
}

module.exports = swap;