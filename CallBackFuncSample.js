function display(result)
{

    console.log("Result is "+result)

}
function findAverage(mark1,mark2,mark3,myCallBack){


    let avg=(mark1+mark2+mark3) / 3
    myCallBack(avg)
    
}
findAverage(50,20,50,display)

function findSum(mark1,mark2,myCallBack){


    var sum=mark1+mark2
    myCallBack(sum)
    
}
findSum(50,20,display)
