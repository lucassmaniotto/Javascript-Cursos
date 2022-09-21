const classJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const classJava = [6, 5, 8, 9, 5, 6];
const classPython = [7, 3.5, 8, 9.5];

function roomAverage(roomGrades) {
    const sum = roomGrades.reduce((acum, current) => acum + current, 0);
    return sum / roomGrades.length;
}

console.log(`Javascript: ${roomAverage(classJS)}`);
console.log(`Java: ${roomAverage(classJava)}`);
console.log(`Python: ${roomAverage(classPython)}`);