//Is-a relationship
//parent-child relationship
//child class aquiring the properties(variables) and behaviours(functions) of direct parent class
//uses keyword 'extend

export class InheritanceAnimalParentClass{


constructor(name)
{

   this.name=name

}
eat(){

    console.log(`${this.name} can eat`) //template literal using back tick

}
}