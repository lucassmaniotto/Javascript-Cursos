const div = document.querySelector('.paragraphs');
const paragraphs = document.querySelectorAll('p');

for(let obj of paragraphs) {
    obj.addEventListener('click', function() {
        obj.classList.toggle('selected');
    });
}