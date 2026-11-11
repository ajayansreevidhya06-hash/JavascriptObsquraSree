
import {InheritanceAnimalParentClass} from "./InheritanceAnimalParentClass.js"
class InheritanceDogChildClass extends InheritanceAnimalParentClass
{

    constructor(name,breed)
    {
    super(name)           //parent class refernce
    this.name=name
    this.breed=breed
    }

bark(){

    console.log("Child class function - bark()")

}

}

const dogObj =new InheritanceDogChildClass("Tom" ,"Pug") //child obj-can aceess both child and parent prop
dogObj.bark()
dogObj.eat()
console.log(dogObj.breed)
console.log(dogObj.name)

const animalObj =new InheritanceAnimalParentClass("Tim") //parent obj--can access only parent prop
animalObj.eat()


