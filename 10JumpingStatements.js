//Jumping statements - break and continue
console.log("*******break *****************************************")   
//exit immediatly from loop
for(let j=1 ;j<=5 ;j++)
{

 if(j==3)
 {
     break
 }
 console.log(j)
    
}
//output = 1,2

console.log("******* continue*****************************************") 

//skip when condition is true

for(let j=1 ;j<=5 ;j++)
{

 if(j==3)
 {
     continue
 }
 console.log(j)
    
}
//output = 1 2 4 5


console.log("************Print even numbers from 1 -100 ***************")
for(let k=1 ;k<=100 ;k++)
{

 if(k %2 != 0)
 {
     continue      //will skip whenever condition satisfies -for ex: 3 % 2 !=0
 }
 console.log(k)
    
}