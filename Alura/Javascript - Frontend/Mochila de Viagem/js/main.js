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
    itemNumber.dataset.id = item.id;
    newItem.appendChild(itemNumber);
    newItem.innerHTML += item.name;
    newItem.appendChild(buttonDelete(item.id));
    list.appendChild(newItem);
}

function updateItem(item){
    document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantity;
}

function buttonDelete(id) {
    const button = document.createElement('button');
    button.innerHTML = 'X';
    button.classList.add('delete');

    button.addEventListener('click', function() {
        deleteElement(this.parentNode, id); 
    });

    return button;
}

function deleteElement(item, id){
    item.remove();
    itens.splice(itens.findIndex((item) => item.id === id), 1);
    localStorage.setItem('itens', JSON.stringify(itens));
}

//main
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.elements['nome'],
          quantity = event.target.elements['quantidade'];
    const currentItem = {
        "name": name.value,
        "quantity": quantity.value
    }
    const existItem = itens.find((item) => item.name === name.value);

    if(existItem) {
        currentItem.id = existItem.id;
        updateItem(currentItem);
        itens.find((item) => item.id === existItem.id) = currentItem;
    }
    else {
        currentItem.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0;
        createElement(currentItem);
        itens.push(currentItem);
    }

    localStorage.setItem('itens', JSON.stringify(itens));

    event.target.reset();
});