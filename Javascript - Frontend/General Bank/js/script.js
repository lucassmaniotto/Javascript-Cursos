import isCpf from "./validateCpf.js";
import isOverAge from "./validateAge.js";

const formFields = document.querySelectorAll('[required]');

formFields.forEach((field) => {
    field.addEventListener("blur", () => verifyField(field));
});

function verifyField(field) {
    if (field.name == "cpf" && field.value.length >= 11) {
        isCpf(field);
        field.value = formatCpf(field.value);
    }
    if (field.name == "aniversario" && field.value != '') {
        isOverAge(field);
    }
}

function formatCpf(cpf) {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})/, "$1-$2");
    return cpf;
}