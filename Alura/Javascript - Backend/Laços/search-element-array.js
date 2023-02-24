const students = ['Gandalf', 'Gimli', 'Aragorn', 'Legolas']
const grades = [10, 8, 7.5, 9]
const studentsAndGrades = [students, grades]

const printData = (studentName) =>{
    if (studentsAndGrades[0].includes(studentName)) {
        let i = studentsAndGrades[0].indexOf(studentName)
        return studentsAndGrades[0][i] + `, your grade is ` + studentsAndGrades[1][i]
    }
    else {
        return 'Student not found!'
    }
}

console.log(printData('Legolas'))

console.log(printData('Frodo'))