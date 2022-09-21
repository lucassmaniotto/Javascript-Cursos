const students = ['Gandalf', 'Gimli ', 'Aragorn', 'Legolas']
const grades = [7, 4.5, 3.5, 8]

const failedStudents = students.filter((student, i) => grades[i] < 6)
console.log(`Reprovados: ${failedStudents}`);