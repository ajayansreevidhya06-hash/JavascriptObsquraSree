//private functions
//user friendly interface --hiding imp functionality

class CoffeMachine
{
     #boilWater()
    {
        console.log("Boil Water ")
    }
     #addMilk()
    {
        console.log("Add Milk ")
    }
    #addCoffeePowder()
    {
        console.log("Add coffee powder ")
    }

    #addSugar()
    {
       console.log("Add Sugar ")

    }
    makeCoffee()
    {
        this.#boilWater()
        this.#addMilk()
        this.#addSugar()
        this.#addCoffeePowder()
        console.log("###Coffee is ready###")
       
    }
    #addTeaPowder()
    {
        console.log("Add Tea powder ")
    }

    makeTea(){
        this.#boilWater()
        this.#addMilk()
        this.#addSugar()
        this.#addTeaPowder()
        console.log("***Tea is ready***")

    }

}

const coffeMachineObj=new  CoffeMachine()
coffeMachineObj.makeCoffee()

coffeMachineObj.makeTea()