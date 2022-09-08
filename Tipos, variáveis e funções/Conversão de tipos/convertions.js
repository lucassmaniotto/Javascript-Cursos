// data types

// booleans
const number = 456;
const numberString = "456";
const notANumber = "456a";

// implicit convertion
console.log(number === numberString);
console.log(number + numberString);

// explicit convertion
console.log(number == numberString);
console.log(number + Number(numberString));
console.log(number + Number(notANumber));
console.log(String(number) + numberString);