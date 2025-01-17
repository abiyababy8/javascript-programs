//Array destructuring
const nums=[1,2,3,4]
let [a,b,c,d]=nums
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log('----------------')
let [num1,num2]=nums
console.log(num1)
console.log(num2)
console.log('----------------')
let [n1,,n2]=nums
console.log(n1)
console.log(n2)
console.log('----------------')
//Object destructuring example
let obj={
    name:'sean',
    age:22
}
let {name}=obj
console.log(name)
let {age}=obj
console.log(age)