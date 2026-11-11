//key value pair ->property and value
//An object in JavaScript is a standalone entity that stores data as a collection of properties. 
//Each property consists of a key (also called a name) and a value.
const student = {

name :"Sree" ,  //key:value
age  : 10,
dept :"JavaScript",
city : "abc"

}

console.log(student.name) //dot notation
console.log(student["age"]) //to get the value by giving key

//to add a key-value
student.gender = "Female"
console.log(student)

//to update a key-value
student.age = 11
console.log(student)

//to delete a key-value
delete student.age
console.log(student)

delete student.age
console.log(student.age)

//to print the items in key value pair
for (let key in student)
{
    console.log(key + ":" + student[key])
}

//--------------------------------------------------

