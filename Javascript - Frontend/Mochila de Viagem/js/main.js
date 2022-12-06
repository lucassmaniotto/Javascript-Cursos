const form = document.querySelector('#novoItem')
const list = document.querySelector('#lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach( (item) => {
    createElement(item);
});

function createElement(item){
    const newItem = document.createElement('li');    
    newItem.classList.add('item');

    const itemNumber = document.createElement('strong');
    itemNumber.innerHTML = item.quantity;
    newItem.appendChild(itemNumber);
    newItem.innerHTML += item.name;
    list.appendChild(newItem);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.elements['nome'],
          quantity = event.target.elements['quantidade'];
    const currentItem = {
        "name": name.value,
        "quantity": quantity.value
    }

    createElement(currentItem);
    itens.push(currentItem);
    localStorage.setItem('itens', JSON.stringify(itens));

    event.target.reset();
});