// for clássico e for of
const grades = [10, 6.5, 8, 7.5];

let gradesSum = 0;

/* for (let i = 0; i < grades.length; i++) {
    gradesSum += grades[i];   
}
console.log(gradesSum/grades.length);
*/

for (const grade of grades) {
    gradesSum += grade;    
}
console.log(gradesSum/grades.length);

// for each
const notas = [10, 9, 8, 7];

let somaNotas = 0;

notas.forEach(nota => {
    somaNotas += nota;
});
console.log(somaNotas/notas.length);