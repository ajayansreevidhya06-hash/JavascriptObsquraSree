
//default constructor--invoked by default at the name of obj creation
//spl type of method to initialize  value ,same name as class name

class VehicleClass  //code reusability
{
    startEngine()
    {
        console.log("startEngine function invoked")
    }

    /*constructor()
    {

        console.log("constructor invoked")
    } */
    constructor(brand,color)
    {
        console.log("parametized Constuctor invoked")
        this.brand=brand
        this.color=color

    }

    displayCarDetails()
    {
        console.log(this.brand)
        console.log(this.color)

    }

}
//class object creation calling func using object

const vehicleClassObj = new VehicleClass("Toyota","Green") //default constructor--invoked
vehicleClassObj.startEngine() //func invoked
vehicleClassObj.displayCarDetails()


const vehicleClassObj2 = new VehicleClass("BMW","White") //default constructor--invoked
vehicleClassObj2.startEngine() //func invoked
vehicleClassObj2.displayCarDetails()


//------------------------------------------------------------




