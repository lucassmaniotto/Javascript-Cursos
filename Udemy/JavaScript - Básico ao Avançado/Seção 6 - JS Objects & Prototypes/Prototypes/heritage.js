function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Object.setPrototypeOf(Camiseta.prototype, Produto.prototype);

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: () => {
            return estoque;
        }, 
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Object.setPrototypeOf(Caneca.prototype, Produto.prototype);
// Sobreescrevendo o método aumento para Caneca
Caneca.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

/*
    Camiseta.prototype = Object.create(Produto.prototype);
    Camiseta.prototype.constructor = Camiseta;

    Caneca.prototype = Object.create(Produto.prototype);
    Caneca.prototype.constructor = Caneca;
*/

const p1 = new Produto('Gen', 111);
const cam1 = new Camiseta('Regata', 7.5, 'Preta');
const can1 = new Caneca('Caneca', 13, 'Plástico', 5);
can1.estoque = 10;

console.log(p1);
console.log(cam1);
console.log(can1);
console.log('');
for (let key in can1) {
    console.log(`${key}: ${can1[key]}`);
}

console.log('');

p1.aumento(10);
p1.desconto(5);
console.log(p1);

cam1.aumento(10);
cam1.desconto(5);
console.log(cam1);

can1.aumento(10);
can1.desconto(5);
console.log(can1);
console.log('');
for (let key in can1) {
    console.log(`${key}: ${can1[key]}`);
}
