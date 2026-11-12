//Data hiding
class EncapsulationBankAcct

{
    #balance   //declare private variable -cannot access outside class
    constructor(accountHolder,initialBalance)
    {
        this.accountHolder=accountHolder
        this.#balance=initialBalance
    }

    getBalance()           //to get balance
    {
        console.log(this.#balance)
    }
    deposit(depositAmount)  //set balance
    {
        
        this.#balance+=depositAmount //this.#balance=depositAmount+this.#balance
        console.log("Deposited amount")
    }  

     withdraw(withdrwAmount)  //set balance
    {
        
        this.#balance-=withdrwAmount //this.#balance=depositAmount+this.#balance

    }  

}
const bankAcctObj=new EncapsulationBankAcct("sree",10000)
bankAcctObj.accountHolder="vidhya"
console.log(bankAcctObj.accountHolder)

//bankAcctObj.#balance=100   //Property '#balance' is not accessible outside class 'EncapsulationBankAcct' because it has a private identifier.ts(18013)
//to overcome this issue-use getter and setter methods

bankAcctObj.getBalance()
bankAcctObj.deposit(500)
bankAcctObj.getBalance()

bankAcctObj.withdraw(100)
bankAcctObj.getBalance()
bankAcctObj.withdraw(50)
bankAcctObj.getBalance()