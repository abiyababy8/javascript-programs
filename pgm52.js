let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const res = arr.slice(3, 9);
// [4, 5, 6, 7, 8, 9]
console.log(res)
const res1 = arr.slice(0, 3)
// [1, 2, 3]
console.log(res1)

const fruits = ['mango', 'apple', 'orange', 'kiwi', 'pappaya'];
console.log(fruits.slice(2))
//[ 'orange', 'kiwi', 'pappaya' ]

console.log(fruits.slice(-1))// returns last element
//[ 'pappaya' ]

console.log(fruits.slice(-2))// returns last 2 elements
//[ 'kiwi', 'pappaya' ]

console.log(fruits.slice(-3))// returns last 3 elements
//[ 'orange', 'kiwi', 'pappaya' ]