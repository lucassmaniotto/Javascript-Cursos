export default function isOverAge(field) {
    const birth = new Date(field.value);
    if(!validateAge(birth)) {
        field.setCustomValidity("Você deve ser maior que 18 anos para se cadastrar.");
    }
}

function validateAge(date) {
    const today = new Date();
    const age = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return today >= age;
}