
//to update a value -possible with var ->Any type is possible

var a =10
a=12
a=100
console.log(a)
a='Monday'
console.log(a)

//Redeclaration is possible with 'var'
//var - used before e65 version
var a =30
console.log(a)

//let  - Update -Possible

let b=20
console.log(b)

b='Sree'
console.log(b)

b=true
console.log(b)

//let  ->redeclaration - NOT POSSIBLE

//let b=20  //Cannot redeclare block-scoped variable 'b'. -//SyntaxError: Identifier 'b' has already been declared
//console.log(b)

//const -> update
const c =10
//c=12
console.log(c) //TypeError: Assignment to constant variable.

//const  ->redeclaration - NOT POSSIBLE
/*const d =10
const d=12
console.log(d) //SyntaxError: Identifier 'd' has already been declared */

