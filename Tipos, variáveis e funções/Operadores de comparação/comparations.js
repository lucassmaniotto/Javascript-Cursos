// == (implicit) -> só compara o valor

const num = 42;
const text = "42";

console.log(num == text)

// === (explicit) -> compara o valor e o tipo de dado

console.log(num === text)

console.log(typeof num)
console.log(typeof text)

const textNum = Number(text)
console.log(num === textNum)

console.log(typeof num)
console.log(typeof textNum)

const numText = String(num)
console.log(text === numText)

console.log(typeof text)
console.log(typeof numText)