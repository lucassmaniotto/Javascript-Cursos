function loadElements(json) {
    const table = document.querySelector('#table');
    const tbody = document.querySelector('#tbody');
    
    tbody.innerHTML = '';
    
    for (let person of json) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="name">${person.name}</td>
            <td class="cpf">${person.cpf}</td>
            <td class="age">${person.age}</td>
            <td class="gender">${handleGender(person.gender)}</td>
            <td class="email">${person.email}</td>
            <td class="salary">${formatSalary(person.salary)}</td>
            <td class="company">${person.company}</td>
            <td class="state">${person.state}</td>
            `;
            table.appendChild(tr);
    }           
}

function formatSalary(salary) {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(salary);
}

function handleGender(gender){
    return gender ? gender : 'Indefinido';
}

/* 
fetch('people.json')
        .then(response => response.json())
        .then(json => loadElements(json)); 
*/

axios('people.json')
    .then(response => loadElements(response.data));
