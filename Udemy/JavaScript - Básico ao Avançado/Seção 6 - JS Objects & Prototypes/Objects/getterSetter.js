function Product(name, price, stock) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: true,
        get: function() {
            return stock;
        },
        set: function(value) {
            if (typeof value !== 'number') {
                throw new TypeError('Valor inválido');
            }
            stock = value;
        }
    });
}

const p1 = new Product('T-Shirt Filme Click - Adam Sandler', 59.9, 3);
console.log(p1);
console.log('');
for (let key in p1) {
    console.log(`${key}: ${p1[key]}`);
}
p1.stock = 100;
console.log(`\nTentando alterar Estoque: ${p1.stock}`);
try {
    p1.stock = 'a';
} catch (e) {
    console.log(e.message);
}

console.log('----------------------------------------');

function createProduct(name) {
    return {
        get name() {
            return name;
        },
        set name(value) {
            name = value;
        }
    };
}

const p2 = createProduct('T-Shirt Filme Click - Adam Sandler');
console.log(p2);
console.log(p2.name);
p2.name = 'T-Shirt Banda Roupa Nova';
console.log(p2);
console.log(p2.name);