export class PolymorphsmEmployee{


constructor(empID,empName){

    this.empID=empID
    this.empName=empName

}

responsibilities(){


    console.log("Teacher")

}

printDetails(){
 console.log( `${this.empID} ${this.empName}`)

}

}