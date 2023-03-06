/* ----------------- Função construtora ----------------- */
function ValidateCpf(cpfData) {
    this.cpf = cpfData;
    
    let cpfClean = typeof this.cpf === 'string' ? this.cpf.replace(/\D/g, '') : this.cpf.toString();
    let cpfArray = cpfClean.split('').map(Number);
    
    this.validate = () => {
        if (cpfArray.length === 11 && !isRepeated(cpfClean)) {
            let numbersToValidate = cpfArray.slice(0, 9);
            let firstDigit = validateDigit(numbersToValidate, 10);
            numbersToValidate.push(firstDigit);
    
            let secondDigit = validateDigit(numbersToValidate, 11);
            numbersToValidate.push(secondDigit);
    
            checkValidation(numbersToValidate, cpfClean);
        } else {
            console.log('CPF inválido');
        }
    }

    const validateDigit = (arrayOfNumbers, multiplierValue) => {
        let sum = 0;
        arrayOfNumbers.forEach((number, index) => {
            let multiplier = multiplierValue - index;
            sum += number * multiplier;
        });
        
        let digitToInsert = 11 - (sum % 11);
        if (digitToInsert > 9) {
            digitToInsert = 0;
        }
    
        return digitToInsert;
    }

    const isRepeated = (cpf) => {
        const repeatedNumbers = [
            '00000000000',
            '11111111111',
            '22222222222',
            '33333333333',
            '44444444444',
            '55555555555',
            '66666666666',
            '77777777777',
            '88888888888',
            '99999999999'
        ];
    
        return repeatedNumbers.includes(cpf);
    }

    const checkValidation = (cpfToValidate, cpfClean) => {
        let cpfValidated = cpfToValidate.join('');
        cpfValidated === cpfClean ? console.log('CPF válido') : console.log('CPF inválido');
    }
}

/* ----------------- CPFs para testar ----------------- */
const obj = [
    cpf1 = new ValidateCpf('705.484.450-52'),
    cpf2 = new ValidateCpf('123.456.789-10'),
    cpf3 = new ValidateCpf('11111111111'),
    cpf4 = new ValidateCpf('028.444.444-44'),
    cpf5 = new ValidateCpf('028.444.44'),
    cpf6 = new ValidateCpf(12345678910)
]

obj.forEach(cpf => {
    console.log('-----------------');
    console.log(cpf.cpf);
    cpf.validate();
});
console.log('-----------------');