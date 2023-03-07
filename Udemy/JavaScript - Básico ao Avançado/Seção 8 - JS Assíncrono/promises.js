function HoldIt(msg, time){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad value!');
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

HoldIt('Fênix Veríssimo: Um Momento!', 1000)
    .then(response => {
        console.log(response);
        return HoldIt('Fênix Veríssimo: Quase Natal ...', 1000);
    })
    .then(response => {
        console.log(response);
        return HoldIt('Fênix Veríssimo: Significa que ainda não era Natal!', 1000);
    })
    .then(response => {
        console.log(response);
        return HoldIt(123, 1000);
    })
    .then(() => {
        return HoldIt('Fênix Veríssimo: Protesto!', 1000);
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log('ERRO:', err);
    }
);