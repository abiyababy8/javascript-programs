class A {
    printName() {
        console.log('My name is Sean')
    }
    printLocation() {
        console.log('My location is Kochi')
    }
}
class B extends A {
    printName() {
        console.log('My name is Todd')
    }
}
const obj = new B()
obj.printLocation()
obj.printName()// it executes method inside the child class