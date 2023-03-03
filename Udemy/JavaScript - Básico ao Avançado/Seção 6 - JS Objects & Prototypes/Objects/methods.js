// Cópia de objetos
// - spread operator (...)
// - Object.assign()
const product = {
    name: 'Notebook',
    price: 4589
}
const spreadProduct = { 
    ...product,
    material: 'Aluminum' 
};

const assignProduct = Object.assign({}, product, {
    material: 'Iron'
});

console.log(product);
console.log(spreadProduct);
console.log(assignProduct);
spreadProduct.name = 'Smartphone';
spreadProduct.price = 3448.89;
assignProduct.name = 'Tablet';
assignProduct.price = 1999.99;
console.log('');
console.log(product);
console.log(spreadProduct);
console.log(assignProduct);

console.log('------------------------------------------------------------');

// Retorno de propriedades de objetos
// - Object.keys() - retorna um array com as chaves do objeto
// - Object.values() - retorna um array com os valores do objeto
// - Object.entries() - retorna um array com os pares chave/valor do objeto
// - Object.getOwnPropertyDescriptor() - retorna a propriedade de uma chave do objeto

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));
console.log(Object.getOwnPropertyDescriptor(product, 'name'));

for(let value of Object.entries(product)) {
    console.log(`${value[0]}: ${value[1]}`);
}

console.log('------------------------------------------------------------');
// Congelar um objeto
// - Object.freeze() - congela um objeto, não permitindo alterações

const product2 = {
    name: 'Notebook',
    price: 4589
};

Object.freeze(product2);

product2.name = 'Smartphone';
product2.price = 3448.89;

console.log(product2);