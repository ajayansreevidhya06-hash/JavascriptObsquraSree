class Student{

constructor(mark1,mark2,mark3){

    this.mark1=mark1
    this.mark2=mark2
    this.mark3=mark3
}

displayMarks()
{
console.log("Mark1 : "+this.mark1)
console.log("Mark2 : "+this.mark2)
console.log("Mark3 : "+this.mark3)


}

calculateAvg()
{

    let sum =this.mark1+this.mark2+this.mark3
    let average =sum/3
    console.log("Average Marks = " +average)

}

}

const studentObj = new Student(50,60,70)
studentObj.displayMarks()
studentObj.calculateAvg()


const studentObj2 = new Student(50,80,60)
studentObj2.displayMarks()
studentObj2.calculateAvg()