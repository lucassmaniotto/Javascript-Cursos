function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function HoldIt(msg, time){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('ERROR: Bad value!');

        setTimeout(() => {
            resolve(msg + ' (PROMISE)');
        }, time);
    });
}

const promises = [
    'Fênix Veríssimo: Um Momento!', // Não é uma Promise, mas é tratado como tal
    HoldIt('Fênix Veríssimo: Quase Natal ...', rand(1, 3)), // Promise
    HoldIt('Fênix Veríssimo: Significa que ainda não era Natal!', rand(1, 3)), // Promise
    // HoldIt(123, rand(1, 3)), BAD VALUE
    'Fênix Veríssimo: Protesto!', // Não é uma Promise, mas é tratado como tal
]

// Promise.all() - Executa todas as Promises e retorna um array com os resultados
Promise.all(promises)
    .then(response => {
        console.log(response);
    }
)
.catch(err => {
    console.log('ERRO:', err);
});

// Promise.race() - Executa todas as Promises e retorna o resultado da primeira Promise que retornar
Promise.race(promises)
    .then(response => {
        console.log(response);
    }
)
.catch(err => {
    console.log('ERRO:', err);
});

// Promise.resolve() - Retorna uma Promise resolvida
function downloadPage(){
    const inCache = true;
    if(inCache){
        return Promise.resolve('Página em cache');
    } else {
        return HoldIt('Baixando página', 3000);
    }
}

downloadPage() 
    .then(response => {
        console.log(response);
    }
)
.catch(err => {
    console.log('ERRO:', err);
});

// Promise.reject() - Retorna uma Promise rejeitada
function downloadAudio(){
    const inCache = true;
    if(inCache){
        return Promise.reject('Áudio em cache');
    } else {
        return HoldIt('Baixando áudio', 3000);
    }
}

downloadAudio()
    .then(response => {
        console.log(response);
    }
)
.catch(err => {
    console.log('ERRO:', err);
});
