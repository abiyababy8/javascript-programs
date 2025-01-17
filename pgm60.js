let person = {
    name: 'sean',
    age: 22
}
person.location = 'kochi'
Object.seal(person)
person.email = 'sean@gmail.com'
person.age = 23
delete person.name;
console.log(person)

Object.freeze(person);
person.age=50;
console.log(person)
