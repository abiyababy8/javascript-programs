const student = {
    name: 'John Samuel',
    age: 23,
    email: 'johnsamuel@gmail.com',
    batch: 'CSE'
}
console.log("batch" in student)
if ("email" in student) {
    console.log(student.email)
}
else {
    console.log("Email is not present")
}
console.log("***printing all keys***")
for (let key in student) {
    console.log(key, ":", student[key])
}

console.log("***calculator****")
const calculator={
    add:function(a,b){
        return a+b
    },
    multiply:function(a,b){
        return a*b
    }
}
console.log(calculator.add(2,3))
console.log(calculator.multiply(2,3))