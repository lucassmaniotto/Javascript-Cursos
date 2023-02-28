const elements = [
    {
        tag: 'p', 
        text: 'Parágrafo'
    },
    {
        tag: 'div', 
        text: 'Div'
    },
    {
        tag: 'footer', 
        text: 'Footer'
    },
    {
        tag: 'section', 
        text: 'Section'
    }
];

const div = document.querySelector('.container div');

elements.forEach(element => {
    const newElement = document.createElement(element.tag);
    newElement.innerText = element.text;
    div.appendChild(newElement);
});