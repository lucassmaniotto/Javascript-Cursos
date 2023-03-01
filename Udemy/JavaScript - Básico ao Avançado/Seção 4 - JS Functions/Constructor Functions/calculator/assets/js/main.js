function Calculator(display){
    this.display = document.querySelector(display);

    this.init = () =>{
        clickButtons();
        pressEnter();
    }

    const pressEnter = () => {
        this.display.addEventListener('keypress', (event) => {
            if(event.keyCode === 13){
                calculate();
            }
        });
    }

    const clickButtons = () => {
        document.addEventListener('click', (event) => {
            const el = event.target;

            if(el.classList.contains('btn')){
                btnValueToDisplay(el.innerText);
            }

            if(el.id === 'btnClear'){
                clearDisplay();
            }

            if(el.id === 'btnDel'){
                clearLastDigit();
            }

            if(el.id === 'btnEqual'){
                calculate();
            }
        });
    }

    const btnValueToDisplay = (innerText) => {
        this.display.value += innerText;
        this.display.focus();
    }

    const clearDisplay = () => {
        this.display.value = '';
    }

    const clearLastDigit = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    const calculate = () => {
        try{
            let result = eval(this.display.value);
            if(!result){
                treatError();
                return;
            }
            this.display.value = result;
        }catch(SyntaxError){
            treatError();
            return;

        }
    }

    const treatError = () => {
        clearDisplay();
        alert('Conta inválida!');
    }
}


const calculator = new Calculator('#input');
calculator.init();