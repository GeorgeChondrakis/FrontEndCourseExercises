function Account(fullname) {
	this.fullname = fullname;
	Account.IBAN++;
	this.IBAN = "GR000" + Account.IBAN;
	this.balance = 0;
	this.deposit = function (amount) {
		return this.balance = this.balance + amount;
	};
	this.withdraw = function (amount) {
    if (typeof amount !== "number" || amount <= 0){
      return "Error 'Invalid amount'"
    }
    if (amount > this.balance) {
      return "Error 'Insufficient balance!'"
    }
		return this.balance = this.balance - amount;
	};
	this.getBalance = function () {
		return this.balance;
	};
}

Account.IBAN = 10003;


const newAccount = new Account("Kostas Minaidis");
// New account created for: Kostas Minaidis
// IBAN: GR00010003

newAccount.getBalance(); // 0
newAccount.deposit(100);
newAccount.getBalance(); // 100
newAccount.withdraw(50);
newAccount.getBalance(); // 50

newAccount.withdraw( 500 ) // Error 'Insufficient balance!'
newAccount.withdraw( "50" ) // Error 'Invalid amount'
newAccount.withdraw( -150 ) // Error 'Invalid amount'