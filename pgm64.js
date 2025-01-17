const students=[
    {name:'Alice',email:"alice@gmail.com",batch:'cse',age:23},
    {name:'John',email:"john@gmail.com",batch:'mech',age:25},
    {name:'Sean',email:"sean@gmail.com",batch:'civil',age:21}
]
console.log(students[0])
console.log(students[1].name)

students.forEach((student)=>{
console.log(student.name)
})
for(let i=0;i<students.length;i++){
    console.log(students[i].name)
}
//adding new object to the array
students.push({name:'kenneth',email:'kenneth@gmail.com',batch:'eee',age:26})
//updating value inside any particular object
students[2].name='dummy'
//find student with name "John"
const result=students.find((item)=>{
    return item.name==='John'
})
console.log(result)
//filter out the object with age>24
const result1=students.filter((ele)=>{
    return ele.age>24
})
console.log(result1)