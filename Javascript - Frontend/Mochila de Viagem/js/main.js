const form = document.querySelector('#novoItem')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    createElement(event.target.elements['nome'].value, event.target.elements['quantidade'].value);
});

function createElement(name, quantity){
    const newItem = document.createElement('li');    
    newItem.classList.add('item');

    const itemNumber = document.createElement('strong');
    itemNumber.innerHTML = quantity;
    newItem.appendChild(itemNumber);
    newItem.innerHTML += name;

    const list = document.getElementById('lista');
    list.appendChild(newItem);
}