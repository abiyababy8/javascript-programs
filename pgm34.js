// Array

var names = ['john', 'kenneth', 'todd', 'heather', 'jeff'];

//length
console.log(names.length);// num of elements in an array

//index is used to access an element in an array
console.log(names[0]); //john
console.log(names[3]); //heather

names.push('jemy');
console.log(names);

names.pop();
console.log(names);

names.shift();
console.log(names);

names.unshift('sam');
names.unshift(100);
console.log(names);