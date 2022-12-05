const form = document.querySelector('#novoItem')
const list = document.querySelector('#lista');
const itens = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.elements['nome'].value,
          quantity = event.target.elements['quantidade'].value;

    createElement(name, quantity);
    event.target.reset();
});

function createElement(name, quantity){
    const newItem = document.createElement('li');    
    newItem.classList.add('item');

    const itemNumber = document.createElement('strong');
    itemNumber.innerHTML = quantity;
    newItem.appendChild(itemNumber);
    newItem.innerHTML += name;

    list.appendChild(newItem);

    const currentItems = {
        "name": name,
        "quantity": quantity
    }

    itens.push(currentItems);

    localStorage.setItem('item', JSON.stringify(itens));
}