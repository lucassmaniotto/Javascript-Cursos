export default class CpfValidator {
    #cpf;

    constructor(cpf) {
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf;
    }

    cleanCpf() {
        return typeof this.#cpf === 'string' ? this.#cpf.replace(/\D/g, '') : this.#cpf.toString();
    }

    cpfToArray() {
        return this.cleanCpf().split('').map(Number);
    }

    validate() {
        const cpf = this.cpfToArray();
        if (cpf.length === 11 && !this.isRepeatedNumbers(cpf)) {
            let numbersToValidate = cpf.slice(0, 9);
            let firstDigit = this.validateDigit(numbersToValidate, 10);
            numbersToValidate.push(firstDigit);

            let secondDigit = this.validateDigit(numbersToValidate, 11);
            numbersToValidate.push(secondDigit);

            this.checkValidation(numbersToValidate);
        } else {
            console.log('CPF inválido');
        }
    }

    validateDigit(arrayOfNumbers, multiplierValue) {
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

    isRepeatedNumbers(cpf) {
        let repeatedNumbers = cpf[0];
        return cpf.every(number => number === repeatedNumbers);
    }

    checkValidation(cpfToValidate) {
        let cpfValidated = cpfToValidate.join('');
        cpfValidated === this.cleanCpf() ? console.log('CPF válido') : console.log('CPF inválido');
    }
}