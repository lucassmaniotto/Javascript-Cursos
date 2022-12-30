export default function isCpf(field) {
    const cpf = field.value.replace(/\.|-/g, "");
    validateRepeatedNumbers(cpf)

    console.log(validateRepeatedNumbers(cpf));
}

function validateRepeatedNumbers(cpf) {
    const repeatedNumbers = cpf[0].repeat(cpf.length);
    return repeatedNumbers === cpf;
}