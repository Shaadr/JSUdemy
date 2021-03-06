const account = {
    name: 'Mike Hanks',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({description, amount})
    },
    addIncome: function (description, amount) {
        this.income.push({description,amount})
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
        let totalIncome = 0;
        this.expenses.forEach(expense => {
            totalExpenses += expense.amount
        });
        this.income.forEach(income => {
            totalIncome += income.amount
        });
        return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalIncome} in income and $${totalExpenses} in expenses.`
    }
}

//Expense {object array} -> description {string}, amount {number}
//Income {object array}-> description {string}, amount {number}

//addExpense (description, amount)
//addIncome(description, amount)
//getAccountSummary() -> total up all expenses -> print "Mike Hanks has a balance of $10. $100 in income, and $90 in expenses."


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
console.log(account)