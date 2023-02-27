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
}

function createPerson(){
    const nameInput = document.querySelector('#name').value;
    const surnameInput = document.querySelector('#surname').value;
    const weightInput = parseFloat(document.querySelector('#weight').value.replace(',', '.'));
    const heightInput = parseFloat(document.querySelector('#height').value.replace(',', '.'));

    const person = {
        name: nameInput,
        surname: surnameInput,
        weight: weightInput,
        height: heightInput,
        classification: '',

        calcIMC() {
            return this.weight / (this.height * this.height);
        }
    }
    

    if (inputTreatment(nameInput, surnameInput, weightInput, heightInput)) {
        return person;
    }
}

function updateTable(){
    let table = document.querySelector('#table__body');
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

function inputTreatment(name, surname, weight, height){
    if (name === '' || surname === '' || weight === '' || height === '') {
        div.innerHTML = `<p class="message">Preencha todos os campos.</p>`;
        return false;
    } else if (weight <= 0 || height <= 0) {
        div.innerHTML = `<p class="message">Preencha os campos corretamente.</p>`;
        return false;
    } else if (isNaN(weight) || isNaN(height)) {
        div.innerHTML = `<p class="message">Preencha os campos com números.</p>`;
        return false;
    } else {
        return true;
    }
}