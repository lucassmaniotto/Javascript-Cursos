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

/* 
HoldIt('Phase 1', rand(0, 3))
    .then(response => {
        console.log(response);
        return HoldIt('Phase 2', rand(0, 3));
    })
    .then(response => {
        console.log(response);
        return HoldIt('Phase 3', rand(0, 3));
    })
    .then(response => {
        console.log(response);
    })
.catch(err => {
    console.log('ERRO:', err);
});
*/

async function execute(){
    try{
        const phase1 = await HoldIt('Phase 1', rand(0, 3));
        console.log(phase1);
        const phase2 = await HoldIt('Phase 2', rand(0, 3));
        console.log(phase2);
        const badValue = await HoldIt(123, rand(0, 3));
        console.log(badValue);
        const phase3 = await HoldIt('Phase 3', rand(0, 3));
        console.log(phase3);
    } catch(err){
        console.log(err);
    }
}

execute();