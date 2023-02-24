let people = [];
const div = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let person = createPerson();
    const imc = person.calcIMC();
    const result = `<p class="message">Olá ${person.name} ${person.surname}, seu IMC é ${person.calcIMC().toFixed(2)}. <br>CLASSIFICAÇÃO: `

    if (imc < 18.5) {
        div.innerHTML = result + 'Magreza.</p>';
        person.classification = 'Magreza';
    } else if (imc >= 18.5 && imc < 25) {
        div.innerHTML = result + 'Normal.</p>';
        person.classification = 'Normal';
    } else if (imc >= 25 && imc < 30) {
        div.innerHTML = result + 'Sobrepeso.</p>';
        person.classification = 'Sobrepeso';
    } else if (imc >= 30 && imc < 40) {
        div.innerHTML = result + 'Obesidade.</p>';
        person.classification = 'Obesidade';
    } else {
        div.innerHTML = result + 'Obesidade Grave.</p>';
        person.classification = 'Obesidade II';
    }
    people.push(person);

    updateTable();
}

function createPerson(){
    const nameInput = document.querySelector('#name').value;
    const surnameInput = document.querySelector('#surname').value;
    const weightInput = document.querySelector('#weight').value.replace(',', '.');
    const heightInput = document.querySelector('#height').value.replace(',', '.');

    const person = {
        name: nameInput,
        surname: surnameInput,
        weight: parseFloat(weightInput),
        height: parseFloat(heightInput),
        classification: '',

        calcIMC() {
            return this.weight / (this.height * this.height);
        }
    }

    return person;
}

function updateTable(){
    let table = document.querySelector('#table');
    table.innerHTML = ` `;

    people.forEach(person => {
        table.innerHTML += `
            <tr>
                <td>${person.name}</td>
                <td>${person.surname}</td>
                <td>${person.weight}</td>
                <td>${person.height}</td>
                <td>${person.calcIMC().toFixed(2)}</td>
                <td>${person.classification}</td>
            </tr>
        `;
    });
}