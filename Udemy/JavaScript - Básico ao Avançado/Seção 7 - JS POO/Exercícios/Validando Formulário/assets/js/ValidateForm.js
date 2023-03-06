import CpfValidator from './CpfValidator.js';

export default class ValidateForm {
    constructor(){
        this.form = document.querySelector('#form');
        this.event();
    }

    event(){
        this.form.addEventListener('submit', (event) => {
            this.handleSubmit(event);
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const isValid = this.checkFields();
        if(isValid){
            alert('Formulário enviado.');
            this.form.reset();
        }
    }

    checkFields(){
        let valid = true;
        for(let errorText of this.form.querySelectorAll('.error')){
            errorText.remove();
        }
        for(let field of this.form.querySelectorAll('.validate')){
            const label = field.previousElementSibling.innerText.replace(':', '');
            if(!field.value){
                this.createError(field, `* ${label} não pode estar vazio.`);
                valid = false;
            }
            if(field.classList.contains('cpf')){
                if(!this.validateCpf(field)) valid = false;
            }
            if(field.classList.contains('username')){
                if(!this.validateUsername(field)) valid = false;
            }
            if(field.classList.contains('password')){
                if(!this.validatePassword(field)) valid = false;
            }
            if(field.classList.contains('confirmPassword')){
                if(!this.validateConfirmPassword(field)) valid = false;
            }
        }
        if(valid) return true;
    }

    createError(field, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error');
        field.insertAdjacentElement('afterend', div);
    }
    
    validateCpf(field){
        const cpfValidator = new CpfValidator(field.value);
        if(!cpfValidator.valida()){
            this.createError(field, '* CPF inválido.');
            return false;
        } else {
            return true;
        }
    }

    validateUsername(field){
        const username = field.value;
        if(username.length < 3 || username.length > 12){
            this.createError(field, '* Usuário inválido. Deve conter entre 3 e 12 caracteres.');
            return false;
        } else if (!username.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(field, '* Usuário inválido. Deve conter apenas letras e/ou números.');
            return false;
        } else {
            return true;
        }
    }

    validatePassword(field){
        const password = field.value;
        if(password.length < 6 || password.length > 12){
            this.createError(field, '* Senha inválida. Deve conter entre 6 e 12 caracteres.');
            return false;
        } else {
            return true;
        }
    }

    validateConfirmPassword(field){
        const password = this.form.querySelector('.password')
        if(field.value !== password.value){
            this.createError(field, '* Senhas não conferem.');
            return false;
        } else {
            return true;
        }
    }
}