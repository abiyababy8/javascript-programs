class Bank {
    accDetails = {
        1000: { accno: 1000, username: 'user1', password: 'userone', balance: 5000 },
        1001: { accno: 1001, username: 'user2', password: 'usertwo', balance: 3000 },
        1002: { accno: 1002, username: 'user3', password: 'userthree', balance: 2000 },
        1003: { accno: 1003, username: 'user14', password: 'userfour', balance: 6000 }
    }
    //validate given account: check wheher acc num present or not
    //authenticate account
    //balance enquiry
    //fund transfer
    validateAccount(accnumber) {
        return accnumber in this.accDetails ? true : false
    }
    // authenticate acc
    authenticateAccount(accno, uname, pwd) {
        if (this.validateAccount(accno)) {
            if (this.accDetails[accno].username === uname && this.accDetails[accno].password === pwd) {
                console.log("Authentication Successful...")
            }
        }
        else {
            console.log("Acccount number does not exist!!!")
        }
    }
    //Check Balance
    balanceEnquiry(accno, pwd) {
        if (this.validateAccount(accno)) {
            if (this.accDetails[accno].password === pwd) {
                console.log("Account Number:", this.accDetails[accno].accno)
                console.log("Balance Amount:", this.accDetails[accno].balance)
            }
            else {
                console.log("Password Incorrect!!!")
            }
        }
        else {
            console.log("Acccount number does not exist!!!")
        }
    }
    //fund transfer
    fundTransfer(fromAcc, toAcc, amount) {
        if (this.validateAccount(fromAcc) && this.validateAccount(toAcc)) {
            //check whether fromAcc has sufficient balance
            if (this.accDetails[fromAcc].balance >= amount) {
                console.log(`Balance in ${fromAcc} is ${this.accDetails[fromAcc].balance}`)
                console.log(`Balance in ${toAcc} is ${this.accDetails[toAcc].balance}`)
                this.accDetails[fromAcc].balance = this.accDetails[fromAcc].balance - amount
                this.accDetails[toAcc].balance = this.accDetails[toAcc].balance + amount
                console.log("Fund transferred successfully....")
                console.log(`Balance in ${fromAcc} is ${this.accDetails[fromAcc].balance}`)
                console.log(`Balance in ${toAcc} is ${this.accDetails[toAcc].balance}`)
            }
            else {
                console.log("Insufficient Balance!!!")
            }

        }
        else {
            console.log("Either one or both account number does not exists!!!")
        }
    }
}
const obj = new Bank()
console.log("Validate Account Result:")
console.log("--------------------------")
const result = obj.validateAccount(1002)
if (result) {
    console.log("Account exists...")
}
else {
    console.log("Account does not exist!!!")
}
console.log("Authenticate Account Result:")
console.log("--------------------------")

obj.authenticateAccount(1001, 'user2', 'usertwo')

console.log("Balance Enquiry Result:")
console.log("--------------------------")
obj.balanceEnquiry(1001, 'usertwo')
console.log("Fund Transfer Result:")
console.log("--------------------------")
obj.fundTransfer(1003,1001,500)