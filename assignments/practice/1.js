// Using only one line of code, reverse the array, remove the last element, and then double the remaining elements. Input: [1, 2, 3, 4, 5], Output: [8, 6, 4, 2].
var arr = [1, 2, 3, 4, 5]
console.log(arr.reverse().slice(1).map(item => item * 2))