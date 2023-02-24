function calcGrades(array){
    var sum = 0;
    for (const element of array) {
        sum += element;
    }
    return sum / grades.length
}

function removeLastGrade(array){
    array.pop();
}

function removeFirstGrade(array) {
    array.shift();
}

let grades = [10, 7, 8, 5, 10];
console.log(`Notas iniciais: ${grades}`);
removeLastGrade(grades);
console.log(`Notas removendo no fim: ${grades}`);
removeFirstGrade(grades);
console.log(`Notas removendo no inicio: ${grades}`);
console.log(`Média: ${calcGrades(grades)}`);