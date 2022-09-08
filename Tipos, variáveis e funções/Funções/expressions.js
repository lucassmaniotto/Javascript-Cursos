// diferenças
console.log(introduce())
function introduce(){
    return "Hello!"
}

console.log(sum(1, 1)) // ReferenceError
const sum = function(x, y) {return x + y}