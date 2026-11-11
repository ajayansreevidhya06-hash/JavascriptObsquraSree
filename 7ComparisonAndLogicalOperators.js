
//Compariso Operators
//==,===,!=,!==,>,<,<=,>=
//==  equal to
//=== strict equal to(value and type)
//!=  NOT Equal to

let a =10
let b= 20
let c= 10
let d= '10'

console.log(a==b) //false
console.log(a==c) //true
console.log(c==d) //true  //compares value
console.log(c===d) //false //compares value and type

console.log(a>b) //false
console.log(a<b) //true

console.log(a>=c) //true  // 10>10  -> false , 10<10  -> false
console.log(a<=c)

console.log(a!=c) //false
console.log(a!==d)//true (value and type)


//Logical Operators
//&&,||,!
//&& -> both conditions true
//|| ->any of the condition true
//! ->ture to false or false to true

let age =20
//let hasLicense =true
let hasLicense =false
console.log(age>=18 && hasLicense) //false
console.log(age>=18 || hasLicense) //true
console.log(!hasLicense) //true

//typeof()
//ternary
//+ -concat operator







