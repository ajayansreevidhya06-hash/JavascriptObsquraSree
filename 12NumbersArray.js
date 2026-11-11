
//------------11/01/2026----------------------------------------------------------------------------------
console.log("*****11/01*****")
let numArray = [5, 8, 3, 10, 4];
// 'for of' is loop for arrays

console.log("*****Using for of loop*****");
for (let num of numArray)
{
    console.log(num)
}
//----------------------------------------------------------------------------------------------------------
console.log("*****Using for loop*****")

let sum = 0;
for (let i = 0; i < numArray.length; i++)
    
{
    console.log(numArray[i])
    sum += numArray[i];
    
}
    console.log(sum)

//-------------------------------------------------------------------------------------------------------------
console.log("*****Sum of array using reduce method*****")

let totalsum = numArray.reduce((p, c) => p + c, 10);// p - previous value; c - current value
console.log(totalsum);


console.log("*****Print even Array using Filter method*****")

let evenArray = numArray.filter(num => num % 2 === 0)
console.log(evenArray)


console.log("*****map method*****");
let mappedArray = evenArray.map(num => num * 2);console.log(mappedArray);

//------------11/02/2026---------------------------------------------------------------------------------------

console.log("*******Map method*******************")

let numArray1 =[2,4,6,8]
let doubleArray =numArray1.map(n=>n*2)

console.log(doubleArray)

//declare array ->filter it with multiples of 5 and agaian multiply with 5 and reduce
let constArray =[15,66,80,20,10]
const resultArray =constArray.filter(num=>num%5==0).map(num=>num*5).reduce((p,c)=>p+c)
console.log(resultArray)

