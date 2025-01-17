var fruits = ['banana', 'kiwi', 'apple', 'blueberry'];

console.log(fruits.sort()); //ascending order

console.log(fruits.sort((a, b) => b.localeCompare(a))); //descending order






var num = [4, 6, 2, 1, 3, 5]

console.log(num.sort());// ascending order ; array elements has same number of digits

console.log(num.sort((a, b) => b - a));





var num1 = [11, 5, 3, 10];

console.log(num1.sort((a, b) => a - b)); //asending order ; array elements has different number of digits

console.log(num1.sort((a, b) => b - a)); // descending order ; array elements has different number of digits







// to find index of an array element
var arr=[20,30,10,5];
console.log(arr.indexOf(5))