// var -> pode ser utilizada sem ser declarada, e declara-la depois de utilizada

var height = 5;
var length = 7;

area = height * length;
console.log(area);
var area;

// let -> só pode ser utilizada quando declarada
let forma = 't';
let altura = 5;
let comprimento = 7;
let Area;

if (forma === 'r')
    Area = altura * comprimento;
else
    Area = (altura * comprimento) / 2;
console.log(Area)

// const -> deve ser declarada e inicializada

const formato = 'q';
const altezza = 5;
const lunghezza = 7;

if (formato === 'q') {
    const zona = altezza * altezza;
    console.log(zona)
} else {
    const zona = altezza * lunghezza;
    console.log(zona)
}