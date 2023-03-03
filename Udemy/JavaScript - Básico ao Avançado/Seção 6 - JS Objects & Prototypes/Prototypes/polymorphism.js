function Account(agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}
Account.prototype.withdraw = function(value) {
    if (this.balance < value) {
        console.log(`Saldo insuficiente: R$ ${this.balance.toFixed(2)}`);
        return;
    }
    this.balance -= value;
    this.viewBalance();
}
Account.prototype.deposit = function(value) {
    this.balance += value;
    this.viewBalance();
}
Account.prototype.viewBalance = function() {
    console.log(`Ag/c: ${this.agency}/${this.account} | Saldo: R$ ${this.balance.toFixed(2)}`);
}

function CheckingAccount(agency, account, balance, limit) {
    Account.call(this, agency, account, balance);
    this.limit = limit;
}
CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;
CheckingAccount.prototype.withdraw = function(value) {
    if (value > (this.balance + this.limit)) {
        console.log(`Saldo insuficiente: R$ ${this.balance.toFixed(2)}`);
        return;
    }
    this.balance -= value;
    this.viewBalance();
}

const account = new Account(11, 22, 10);
console.log(account);
account.deposit(11);
account.withdraw(9);
account.withdraw(11);
account.withdraw(2);

console.log(account);

console.log('---------------------');

const checkingAccount = new CheckingAccount(12, 33, 0, 100);
console.log(checkingAccount);
checkingAccount.deposit(10);
checkingAccount.withdraw(110);
checkingAccount.withdraw(1);

console.log(checkingAccount);
