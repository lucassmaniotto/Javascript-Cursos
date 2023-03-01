console.log('--------------------------------');

function* hello() {
    console.log('Hello');
    yield 1;

    console.log('From');
    const value = yield 2;

    console.log(value);
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));

// Output:
// Hello
// { value: 1, done: false }
// From
// { value: 2, done: false }
// Outside!
// { value: undefined, done: true }

console.log('--------------------------------');

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const gn = naturalNumbers();

console.log(gn.next().value);
console.log(gn.next());
console.log(gn.next().value);
console.log(gn.next());

// Output:
// 0
// { value: 1, done: false }
// 2
// { value: 3, done: false }

console.log('--------------------------------');

function* generator1() {
    yield 0;
    yield 1;
    yield 2;
}

function* generator2() {
    yield* generator1();
    yield 3;
    yield 4;
    yield 5;
}

const gn2 = generator2();

for (let value of gn2) {
    console.log(value);
}

// Output:
// 0
// 1
// 2
// 3
// 4
// 5

console.log('--------------------------------');

function* generator3() {
    yield function () {
        console.log('From yield 1');
    };

    yield function () {
        console.log('From yield 2');
    };

    return function () {
        console.log('From return');
    };

    // Inacessível
    yield function () {
        console.log('From yield 3');
    };
}

const gn3 = generator3();

const fn1 = gn3.next().value;
const fn2 = gn3.next().value;
const fn3 = gn3.next().value;

fn1();
fn2();
fn3();

// Output:
// From yield 1
// From yield 2
// From return

console.log('--------------------------------');