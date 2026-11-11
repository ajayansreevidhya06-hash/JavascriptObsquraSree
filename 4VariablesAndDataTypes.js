
//---------------------------------------------------------------
//Variable declaration  keywords- var,let,const

//Data Types

//Primitive -> at a time,store single value
//NonPrimitive -> at a time , can store multiple data values  [Object,Array,Function]

var userName = "User123"   //String data type  -> variable initialization
//String
console.log(userName)
console.log("UserName is " +userName)  //concat operator +
console.log("UserName " ,userName)  //javascript will also accept comma to combine

//number type data
var mark =100 //to declare number type
console.log(mark)

//boolean
var isValidUserName =false //to declare boolean type
console.log(isValidUserName)

//unDefined
var unDefined //declared but NOT defined
console.log(unDefined)

//null  - value will be null
var n=null
console.log(n)

//number type ->for decimal values
var price=12.50
console.log(price)

//bigInt ->to store big numbers /values  appending 'n'
var totalBalance =7200000n
console.log(totalBalance)

var abc=" "
console.log(abc)
//To get the type of variable -> typeof()
console.log(typeof(userName))
console.log(typeof(mark))
console.log(typeof(isValidUserName))
console.log(typeof(unDefined))
console.log(typeof(n))
console.log(typeof(price))
console.log(typeof(totalBalance))
console.log(typeof(abc))
console.log('\n')

console.log('\n' +"To print in new line" +'\n')

