//inheritance
class Animal{
    eat(){
        console.log("Inside eat!!!")
    }
}
class Dog extends Animal{
    constructor(name){
        super()
        this.name=name
    }
    bark(){
        console.log("My dog's name is",this.name)
        console.log("Inside bark!!!")
    }
}
const myDog=new Dog('Kittan')
myDog.bark()
myDog.eat()
