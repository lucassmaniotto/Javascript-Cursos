const grades = [10, 9, 8, 7, 6]

const newGrades = grades.map( grade => grade == 10 ? grade : ++grade)

console.log(newGrades)

const students = ['ana Julia', 'Caio vinicius', 'BIA silva']

const namesUpperCase = students.map(name => name.toUpperCase())

namesUpperCase.forEach(name => {
    console.log(name)
})