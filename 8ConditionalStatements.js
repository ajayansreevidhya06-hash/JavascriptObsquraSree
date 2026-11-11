
/*if(condition)  //if condition satisfies -true block will execute
{
}*/

let age =20
let hasLicense =false
if(age>=18)
{
  console.log("You are Eligible")

}

//if -else
if(hasLicense)
{
  console.log("You are Eligible")

}
else
{
   
  console.log("Sorry,Try again")
}


//Ternary operator - short form of if-else
//Syntax - condition ? exprnTrue :exprnFalse;

const result = age>=18 ? "You are Eligible" : "NOT Eligible"
console.log(result)



//multiple conditions 
/*
// if(condition1){}
else if(condition2){
}
else{
}*/


let marks = 72
if(marks >= 90)
{
   console.log("Grade = A+")
}
else if (marks >= 80)

 {
    console.log("Grade = A")
 }   
else if(marks >= 70)
{ 
    console.log("Grade = B")

}
else if(marks >= 60)
{ 
    console.log("Grade = C")

}
else if(marks >= 50)
{ 
    console.log("Grade = D")

}
else{

    console.log("Failed")
}

//switch statement - check multiple cases

/*switch(expression)
{
case value
case value2
case value 3
case value n
default
}*/

let day = 70

switch(day)
{
  case 1:
   console.log("Today is Monday") 
   break  //break the execution/loop  -Jumping statement
  case 2:
   console.log("Today is Tuesday") 
   break
  case 3:
   console.log("Today is Wednesday") 
   break
  case 4:
   console.log("Today is Thursday") 
   break
  case 5:
   console.log("Today is Friday") 
   break
  case 6:
   console.log("Today is Saturday") 
   break
  case 7:
   console.log("Today is Sunday") 
   break
  
  default:

    console.log("Invalid")

}




 


