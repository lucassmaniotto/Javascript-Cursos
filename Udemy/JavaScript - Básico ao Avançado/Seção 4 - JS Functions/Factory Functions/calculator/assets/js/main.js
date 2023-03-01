function createCalculator(){
    return {
        display: document.querySelector('#input'),

        init(){
            this.clickButtons();
        },

        clickButtons(){
            document.addEventListener('click', (event) => {
                const el = event.target;

                if(el.classList.contains('btn')){
                    this.btnValueToDisplay(el.innerText);
                }

                if(el.id === 'btnClear'){
                    this.clearDisplay();
                }

                if(el.id === 'btnDel'){
                    this.clearLastDigit();
                }

                if(el.id === 'btnEqual'){
                    this.calculate();
                }
            });
        },

        btnValueToDisplay(innerText){
            this.display.value += innerText;
        },

        clearDisplay(){
            this.display.value = '';
        },

        clearLastDigit(){
            this.display.value = this.display.value.slice(0, -1);
        },

        calculate(){
            let result = eval(this.display.value);
            
            if(!result){
                alert('Conta inválida');
                return;
            }

            this.display.value = result;
        }
    };
}

const calculator = createCalculator();
calculator.init();