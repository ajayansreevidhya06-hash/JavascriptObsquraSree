const car = 
{

  color  : "Black" ,  //key:value
  brand  : "Toyota",
  price  :  1200000,
  IsAutomatic : true,
  features : ["BackCamera","BlindSpotDetector","feature3"],  //array
  engine : //nested object
   {

     type : "Electirc",
     power : 111
   },

  details : function()    //function
   {
     console.log("inside function") 
     console.log(this.color)   //current object
     console.log(this.brand) 
   }

}

console.log(car.color)
console.log(car.features[2])
console.log(car.engine.power)
car.details()

import data from './16data.json' with {type : 'json'}
const dataString = JSON.stringify(data)
const dataJS = JSON.parse(dataString)
console.log(dataJS.IsElectric)