const timer = document.querySelector('#timer');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const pause = document.querySelector('#pause');

start.addEventListener('click', startTimer);

function startTimer() {
    timer.classList.remove('red');

    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    
    if (timer.innerHTML !== '00:00:00') {
        let timerSplit = timer.innerHTML.split(':');
        hours = parseInt(timerSplit[0]);
        minutes = parseInt(timerSplit[1]);
        seconds = parseInt(timerSplit[2]);
    }

    let timerId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        timer.innerHTML = `${zeroLeft(hours)}:${zeroLeft(minutes)}:${zeroLeft(seconds)}`;
    }, 1000);
    
    stop.addEventListener('click', () => {
        clearInterval(timerId);
        timer.innerHTML = '00:00:00';
        timer.classList.add('red');
    });

    pause.addEventListener('click', () => {
        clearInterval(timerId);
        timer.classList.add('red');
        pause.addEventListener('click', () => {
            timer.classList.remove('red');
            startTimer();
        });
    });
}

function zeroLeft(num) {
    return num >= 10 ? num : `0${num}`;
}
