import isCpf from "./validateCpf.js";
import isOverAge from "./validateAge.js";

const formFields = document.querySelectorAll('[required]');
const form = document.querySelector("[data-formulario]");
const submit = document.querySelector(".formulario__botao");

const errorTypes = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

const messages = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

formFields.forEach((field) => {
    field.addEventListener("blur", () => verifyField(field));
    field.addEventListener("invalid", (event) => event.preventDefault());
});

submit.addEventListener("click", (event) => {
    event.preventDefault();
    formFields.forEach((field) => {
        verifyField(field);
    });
});

submit.addEventListener("click", (event) => {
    event.preventDefault();

    const responseList = {
        "name" : event.target.form.nome.value,
        "email" : event.target.form.email.value,
        "rg" : event.target.form.rg.value,
        "cpf" : event.target.form.cpf.value,
        "birth" : event.target.form.aniversario.value,
    }
    
    localStorage.setItem("register", JSON.stringify(responseList));
    window.location.href = "./abrir-conta-form-2.html";
});

function verifyField(field) {
    let message = "";
    if (field.name == "cpf" && field.value.length >= 11) {
        isCpf(field);
        field.value = formatCpf(field.value);
    }
    if (field.name == "aniversario" && field.value != '') {
        isOverAge(field);
    }
    errorTypes.forEach(error => {
        if (field.validity[error]) {
            message = messages[field.name][error];
        }
    });
    const messageError = field.parentNode.querySelector(".mensagem-erro");
    const validator = field.checkValidity();

    if (!validator) {
        messageError.innerHTML = `<img src="../img/circle-exclamation-solid.svg"> <p>${message}</p>`;
    } else {
        messageError.textContent = "";
    }
}

function formatCpf(cpf) {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})/, "$1-$2");
    return cpf;
}