let myAccount = {
    name: 'Mike Hanks',
    expenses: 0,
    income: 0
}

// let otherAccount = myAccount;
// otherAccount.income = 1000;

let addExpense = function (account, amount) {
    // account = {} //when cleared, does not now point to original object
    account.expenses += amount;
    // console.log(account)
}

//addIncome, takes in which account and amount of income added
let addIncome = function (account,amount) {
    account.income += amount
}
//resetAccount, takes account resets income and expenses to 0
let resetAccount = function (account) {
    account.income = 0;
    account.expenses = 0;
}

//getAccountSummary
//Account for Andres has $900 (balance), $1000 in income, $100 in expenses (if 1000 income, and 100 expenses, balance = 900)
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses;
    console.log(`${account.name} has a $${balance} balance with $${account.income} income and $${account.expenses} expenses`)
}
console.log("-------")
console.log(myAccount)
console.log("-------")

//addIncome
addIncome(myAccount, 1000);
console.log(`added $1000 income to ${myAccount.name}`, myAccount)
//addExpense
addExpense(myAccount, 100);
console.log(`added $100 expenses to ${myAccount.name}`, myAccount)
//addExpense
addExpense(myAccount, 50);
console.log(`added $50 expenses to ${myAccount.name}`, myAccount)
//getAccountSummary
getAccountSummary(myAccount)
//resetAccount
resetAccount(myAccount)
console.log(`reset ${myAccount.name}'s account`)
//getAccountSummary
getAccountSummary(myAccount)


