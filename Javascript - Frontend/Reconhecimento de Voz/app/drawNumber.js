const minValue = 1,
      maxValue = 1000;

const minValuElement = document.querySelector('#min-value');
minValuElement.innerHTML = minValue;

const maxValueElement = document.querySelector('#max-value');
maxValueElement.innerHTML = maxValue;

const secretNumber = drawNumber();

function drawNumber() {
    return parseInt(Math.random() * maxValue + 1);
}

