//store multiple data in single variable

//length of array -total number of elements
//index = position of element  --total =length-1
//index = starts at 0

let fruits = ["mango","orange","apple","banana"] //length =4  index =3
console.log(fruits)

console.log(fruits[0])
console.log(fruits.length) //property

fruits.push("kiwi") //to add an element into array

console.log(fruits)

fruits.pop() //to remove last element from array
console.log(fruits)

fruits.shift() //to remove first element from array
console.log(fruits)

fruits.unshift("melon") //to add element at the beginning
console.log(fruits)

console.log(fruits.includes("apple")) //to check the lement is present or not

console.log(fruits.indexOf("orange")) // to get index of th element

fruits.push("grapes","pear") //to add an elements
console.log(fruits)

const slicedArray = fruits.slice(1,5) //will not accept last element -so if we need last element add +1 to the index
console.log(slicedArray)

//fruits.splice()


