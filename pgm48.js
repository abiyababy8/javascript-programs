//find first even number from the given array using find()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstEven = numbers.find((item => item % 2 == 0));
console.log(firstEven);