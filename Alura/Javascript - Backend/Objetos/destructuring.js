const pair = [2, 4, 6, 8, 10];
const odd = [1, 3, 5, 7, 9];

const numbers = [...pair, ...odd];

const [num1, num2, ...other] = [1, 2, 3, 4, 5];

const person = {
    name: 'Johnny Silverhand',
    age: 35,
    city: 'Night City',
    country: 'USA'
};

const personWithNickname = {
    ...person,
    nickname: 'V'
};

/* 
    const { name } = person;
    console.log(name);
*/

/* 
function printData(data) {
    const { name, age, city, country } = data;
    console.log(name, age, city, country);
} 
*/

function printData({ name, age, city, country }) {
    console.log(name + "\n" + age + "\n" + city + "\n" + country);
}

printData(person);