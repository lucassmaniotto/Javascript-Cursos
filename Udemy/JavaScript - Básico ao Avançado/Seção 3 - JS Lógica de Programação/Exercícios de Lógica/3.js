function checkNumber(x){
    switch (true) {
        case x % 3 === 0 && x % 5 === 0:
            return 'FizzBuzz';
        case x % 3 === 0:
            return 'Fizz';
        case x % 5 === 0:
            return 'Buzz';
        default:
            return x;
    }
}

for (let i = 0; i <= 100; i++) {
    console.log(i, checkNumber(i));
}