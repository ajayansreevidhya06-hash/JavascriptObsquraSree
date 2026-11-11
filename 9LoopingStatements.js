//for ,while ,do-while

//Syntax - for
/*for(initialize;condition;updation){
//code
}*/

console.log("*******for loop*****************************************")
for(let i=1 ;i<=5 ; i++)
{
 console.log(i)

}

//i=1  1<=5  true print 1 
//i=2  2<=5 true print 2
//.......3
//.......4
//.......5<=5 true print 5
//i=6 6<=5 false ,break the execution

//print 10-20
//----------------------------------
for(let j=10 ;j<=20 ;j++)
    {
 console.log(j)

}


console.log("*******//Vowel or not using Switch*****************************************")
//Vowel or not using Switch

let vowelChar= 'A'
switch(vowelChar)
{
case 'a':
case 'e':    
case 'i':  
case 'o':  
case 'u':  
console.log("vowel") 
break

default:
console.log("Not vowel")
}

//while loop - will check the condition first and then execute code

//Syntax
/*
initialize;
while(condition){
//updation
}*/
//*************************************************************
console.log("*******while Loop*****************************************")
let a=5
while(a<=10)
{
    console.log(a)
    a++
}

console.log("*******1-10 using while Loop*****************************************")
//print 10-1 using while loop
//***************************************************************
console.log("************************************************")
let c=10
while(c>=1)
{
    console.log(c)
    c--
}
//-----------------------------------------------------------
console.log("*******do-while Loop*****************************************")
/*do{
}while(condition)
*/

let x =1
do{
    console.log(x)
    x++
}while(x>10)

