import CPFValidator from "./cpfValidator.js";

const obj = [
    new CPFValidator('705.484.450-52'),
    new CPFValidator('123.456.789-10'),
    new CPFValidator('111.111.111-11'),
    new CPFValidator('11111111111'),
    new CPFValidator('028.444.444-44'),
    new CPFValidator('028.444.44'),
    new CPFValidator(12345678910),
    new CPFValidator(11111111111),
    new CPFValidator(2892458005),
    new CPFValidator(289245),
    new CPFValidator('42740573057'),
]

obj.forEach(cpf => {
    console.log('-----------------');
    console.log(cpf.cpf);
    cpf.validate();
});
console.log('-----------------');