//Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.
var arr = ["a", 1, "b", 2, 'cat', 10, 5]
var numArr = arr.filter(i => typeof i === 'number')
var sum = numArr.reduce((a, i) => {
    a = a + i
    return a
}, 0)
console.log(sum)
