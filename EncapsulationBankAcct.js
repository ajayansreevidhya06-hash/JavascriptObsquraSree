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
const backAcctObj=new EncapsulationBankAcct("sree",10000)
backAcctObj.accountHolder="vidhya"
console.log(backAcctObj.accountHolder)

//backAcctObj.#balance=100   //Property '#balance' is not accessible outside class 'EncapsulationBankAcct' because it has a private identifier.ts(18013)
//to overcome this issue-use getter and setter methods

backAcctObj.getBalance()
backAcctObj.deposit(500)
backAcctObj.getBalance()


backAcctObj.withdraw(100)
backAcctObj.getBalance()