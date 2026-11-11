import { PolymorphsmEmployee } from "./PolymorphsmEmployee.js"

class PolymorphsmTeacher extends PolymorphsmEmployee{

constructor(subject)
{
    super(1234,"Sree")
    this.subject=subject
}

responsibilities()
{
    console.log(`${this.subject} is the subject`)
}

displayDetails(){
 console.log("Inside  display details func")

}

}

const teacherObj=new PolymorphsmTeacher("English")
teacherObj.responsibilities()   //chlid func using child obj

teacherObj.displayDetails()
teacherObj.printDetails()

const employeeParentObj =new PolymorphsmEmployee(1122,"abc")
employeeParentObj.printDetails()
employeeParentObj.responsibilities()
console.log(employeeParentObj.empID)
console.log(employeeParentObj.empName)


