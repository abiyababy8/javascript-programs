const student= new Object();
student.name='Abiya';
student.age=22;
student.location='Kakkanad';
console.log(student)
console.log(student.name);
console.log(student['location'])

const person={
    names:'john'
}
person.age=34;
console.log(person)
person['pincode']=686868;
console.log(person);
delete person.pincode;
console.log(person)