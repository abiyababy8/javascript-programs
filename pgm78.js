class A{
    methodA(){
        console.log("Inside methodA")
    }
    methodA(name){
        console.log("Inside methodA",name)
    }
    methodA(age,location){
        console.log("Inside methodA",age,location)
    }
}
const obj=new A()
obj.methodA()
obj.methodA('Billie')
obj.methodA(22,'kochi')