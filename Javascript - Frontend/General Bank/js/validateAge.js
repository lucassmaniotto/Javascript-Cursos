export default function isOverAge(field) {
    const birth = new Date(field.value);
    console.log(validateAge(birth));
}

function validateAge(date) {
    const today = new Date();
    const age = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return today >= age;
}