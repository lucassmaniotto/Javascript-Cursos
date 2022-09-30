class Client{
    constructor(name, email, cpf, balance){
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.balance = balance;
    }

    showInfo(){
        return `
        Name: ${this.name}
        CPF: ${this.cpf}
        Email: ${this.email}
        Balance: $${this.balance}
        `;
    }

    showBalance(){
        return this.balance;
    }

    deposit(value){
        this.balance += value;
        console.log(`Deposit: $${value}`);
        console.log(`Current Balance: $${this.balance}\n`);
    }

    withdraw(value){
        if (this.balance >= value){
            this.balance -= value;
            console.log(`Whitdraw: $${value}`);
            console.log(`Current Balance: $${this.balance}\n`);
        }
        else{
            console.log("Unauthorized transaction due to insufficient funds");
            console.log(`Current Balance: $${this.balance}\n`);
        }
    }
}

class ClientSavingAccount extends Client{
    constructor(name, email, cpf, balance, interest){
        super(name, email, cpf, balance);
        this.saving = interest;
    }

    showInfo(){
        return `
        Name: ${this.name}
        CPF: ${this.cpf}
        Email: ${this.email}
        Balance: $${this.balance}
        Saving Balance: $${this.saving}
        `;
    }

    depositSaving(value){
        this.saving += value;
        console.log(`Deposit: $${value}`);
        console.log(`Current Saving Balance: $${this.saving}\n`);
    }

    withdrawSaving(value){
        if (this.saving >= value){
            this.saving -= value;
            console.log(`Whitdraw: $${value}`);
            console.log(`Current Saving Balance: $${this.saving}\n`);
        }
        else{
            console.log("Unauthorized transaction due to insufficient funds");
            console.log(`Current Saving Balance: $${this.saving}\n`);
        }
    }
}
const michaelScott = new Client("Michel Scott", "michael.scott@dundermifflin.com", "123.456.789-00", 1000.00);
const jimHalpert = new ClientSavingAccount("Jim Halpert", "jim.halpert@dundermifflin.com", "987.654.321-00", 1000.00, 0);

console.log(michaelScott.showInfo());

michaelScott.deposit(100);
michaelScott.withdraw(500.50);
michaelScott.withdraw(700);

console.log(michaelScott.showInfo());

console.log(jimHalpert.showInfo());

jimHalpert.deposit(100);
jimHalpert.withdraw(500.50);
jimHalpert.withdraw(700);

jimHalpert.depositSaving(100);
jimHalpert.withdrawSaving(75.25);
jimHalpert.withdrawSaving(700);

console.log(jimHalpert.showInfo());
