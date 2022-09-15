function calcGrades(array){
    var sum = 0;
    
    // for of
    for (const element of array) {
        sum += element;
    }

    /* common for
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    */

    return sum / grades.length
}

function addGrades(array, value){
    array.push(value);
}

let grades = [10, 6.5, 8, 7.5];
addGrades(grades, 7);
console.log("Notas: " + grades);
console.log("Média: " + calcGrades(grades));