//block of code to reuse the code

//**************************************************** */
console.log("******************to Print Hello********************************** ")

//function declaration
function printHello()
{

  console.log("Print Hello")

}

printHello()  //function calling


//**************************************************** */
console.log("******************function Addition********************************** ")

function addition()
{
let a=10
let b=15
console.log(a+b)

}
addition()


//**************************************************** */
console.log("******************Parameterized function********************************** ")

function parameterizedAddition(k,m)
{

console.log(k+m)

}
parameterizedAddition(10,5)
parameterizedAddition(20,10)

//------------------return statement---------------------------------------------------------------------
console.log("******************return---------Subtraction function********************************** ")

function sub(c,d)
{

  let subResult=c-d
  return subResult

}
const subAns=sub(10,5)
console.log("returned value =" +subAns)
console.log(sub(100,5))

//Arrow function
//Anonymous function

console.log("---------------Anonymous function--------------------") //no function name

const greet=function ()
{

    console.log("inside anonymous function")

}
greet()

console.log("--------------Arrow function--------------------------")

const arrowFun = () => {console.log("inside arrow function")}
arrowFun()

const add =(a,b,c)=> a+b+c
const result1=add(1,2,3)
console.log(result1)
