const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;

array.forEach(number => {
    // se o número for par, dobra e soma ao total
    if (number % 2 === 0) total += number * 2;
});

console.log(total);