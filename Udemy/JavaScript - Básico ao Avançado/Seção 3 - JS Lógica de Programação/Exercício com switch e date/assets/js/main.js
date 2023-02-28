const h1 = document.querySelector('#date');
const h2 = document.querySelector('#time');

setInterval(setDate, 1000);
setInterval(setTime, 1000);

function setDate() {
  const now = new Date();
  const day = now.getDay();
  const month = now.getMonth();
  const date = now.getDate();
  const year = now.getFullYear();

  h1.textContent = `${getDayText(day)}, ${date} de ${getMonthText(month)} de ${year}`;
}

function setTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    const h2 = document.querySelector('#time');
    h2.textContent = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
  }

function getDayText(day) {
    let dayText;
    switch (day) {
        case 0:
            dayText = "Domingo";
            return dayText;
        case 1:
            dayText = "Segunda-feira";
            return dayText;
        case 2:
            dayText = "Terça-feira";
            return dayText;
        case 3:
            dayText = "Quarta-feira";
            return dayText;
        case 4:
            dayText = "Quinta-feira";
            return dayText;
        case 5:
            dayText = "Sexta-feira";
            return dayText;
        case 6:
            dayText = "Sábado";
            return dayText;
        default:
            dayText = "Dia inválido";
            return dayText;
    }
}

function getMonthText(month) {
    let monthText;
    switch (month) {
        case 0:
            monthText = "Janeiro";
            return monthText;
        case 1:
            monthText = "Fevereiro";
            return monthText;
        case 2:
            monthText = "Março";
            return monthText;
        case 3:
            monthText = "Abril";
            return monthText;
        case 4:
            monthText = "Maio";
            return monthText;
        case 5:
            monthText = "Junho";
            return monthText;
        case 6:
            monthText = "Julho";
            return monthText;
        case 7:
            monthText = "Agosto";
            return monthText;
        case 8:
            monthText = "Setembro";
            return monthText;
        case 9:
            monthText = "Outubro";
            return monthText;
        case 10:
            monthText = "Novembro";
            return monthText;
        case 11:
            monthText = "Dezembro";
            return monthText;
        default:
            monthText = "Mês inválido";
            return monthText;
    }
}
