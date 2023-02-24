const book = require('./book-list');

function lowPrice(products, position){
    let lowPrice = position;

    for (let i = position; i < products.length; i++) {
        if(products[i].price < products[lowPrice].price){
            lowPrice = i;
        }        
    }
    return lowPrice;
}

module.exports = lowPrice;