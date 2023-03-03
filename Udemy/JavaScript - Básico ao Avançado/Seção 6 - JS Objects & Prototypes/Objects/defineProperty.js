function Product(name, price, stock) {

    // Define uma propriedade de um objeto
    Object.defineProperty(this, 'id', {
        enumerable: true, // Mostra a chave
        value: Math.floor(Math.random() * 100), // Valor
        writable: false, // Não pode ser alterado
        configurable: false // Não pode ser reconfigurado
    });
    
    /* 
    this.name = name;
    this.price = price;
    this.stock = stock; 
    */
    
    // Define propriedades de um objeto
    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            writable: true,
            configurable: true
        },
        price: {
            enumerable: true,
            value: price,
            writable: true,
            configurable: true
        },
        stock: {
            enumerable: true,
            value: stock,
            writable: true,
            configurable: true
        }
    });
}

const p1 = new Product('T-Shirt Filme Click - Adam Sandler', 59.9, 3);
console.log(p1);
console.log(`ID: ${p1.id}`);
p1.id = 100;
console.log(`Tentando alterar ID: ${p1.id}`);