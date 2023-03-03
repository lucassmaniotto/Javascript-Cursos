/* Literal notation 

    const objA = {
        keyA: 'A'
        // __proto__: Object.prototype
    };

    const objB = {
        keyB: 'B'
        // __proto__: objA
    };

    const objC = new Object();
    objC.keyC = 'C';

    Object.setPrototypeOf(objB, objA);
    Object.setPrototypeOf(objC, objB);
    console.log(objC.keyA);
    console.log(objC.keyB);
    console.log(objC.keyC); 

*/

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function (percent) {
    this.price = this.price - (this.price * (percent / 100));
}

Product.prototype.increase = function (percent) {
    this.price = this.price + (this.price * (percent / 100));
}

function Car(name, price, brand) {
    Product.call(this, name, price);
    this.brand = brand;
}

/* 
Car.prototype = Object.create(Product.prototype);
Car.prototype.constructor = Car; 
*/

const p1 = new Product('Geladeira', 3000);

const p2 = {
    name: 'Smartphone',
    price: 5000
}
Object.setPrototypeOf(p2, Product.prototype);

const c1 = new Car('Civic', 10000, 'Honda');
Object.setPrototypeOf(Car.prototype, Product.prototype);

console.log(p1);
console.log(p2);
console.log(c1);

console.log('');

p1.discount(10); console.log(p1);
p2.increase(10); console.log(p2);
c1.discount(10); console.log(c1);
c1.increase(10); console.log(c1);