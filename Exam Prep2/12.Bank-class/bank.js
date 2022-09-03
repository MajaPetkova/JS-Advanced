class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = []
    }

    newCustomer(customer) {
        let firstName = customer.firstName;
        let lastName = customer.lastName;
        let personalId = customer.personalId;

        if (this.allCustomers.some(x => x.personalId === personalId)) {
            throw new Error(`${firstName} ${lastName} is already our customer!`)
        }
        let newCustomer = {
            firstName,
            lastName,
            personalId,
            transactions: []
        }
        this.allCustomers.push(newCustomer)
        return newCustomer
    }
    depositMoney(personalId, amount) {
        personalId = Number(personalId);
        amount = Number(amount);

        let foundCustomer = this.allCustomers.find(x => x.personalId === personalId);
        if (!foundCustomer) {
            throw new Error(`We have no customer with this ID!`)
        }
        if (!foundCustomer.totalMoney) {
            foundCustomer.totalMoney = 0;
        }
        foundCustomer.totalMoney += amount;

        foundCustomer.transactions.push(`${foundCustomer.firstName} ${foundCustomer.lastName} made deposit of ${amount}$!`);
        return `${foundCustomer.totalMoney}$`
    }
    withdrawMoney(personalId, amount) {
        personalId = Number(personalId);
        amount = Number(amount);

        let foundCustomer = this.allCustomers.find(x => x.personalId === personalId)
        if (!foundCustomer) {
            throw new Error('We have no customer with this ID!')
        }
        if (foundCustomer.totalMoney < amount) {
            throw new Error(`${firstName} ${lastName} does not have enough money to withdraw that amount!`)
        }

        foundCustomer.totalMoney -= amount;
        foundCustomer.transactions.push(`${foundCustomer.firstName} ${foundCustomer.lastName} withdrew ${amount}$!`);
        return `${foundCustomer.totalMoney}$`

    }
    customerInfo(personalId) {
        personalId = Number(personalId);

        let foundCustomer = this.allCustomers.find(x => x.personalId === personalId)
        if (!foundCustomer) {
            throw new Error('We have no customer with this ID!')
        }
        let result = [];
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${foundCustomer.firstName} ${foundCustomer.lastName}`);
        result.push(`Customer ID: ${foundCustomer.personalId}`);
        result.push(`Total Money: ${foundCustomer.totalMoney}$`);
        result.push(`Transactions:`)

        for (let i = foundCustomer.transactions.length - 1; i >= 0; i--) {
            result.push(`${i+1}. ${foundCustomer.transactions[i]}`)
        }

        return result.join('\n')
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));