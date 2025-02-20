//39)	Write a JavaScript function that accepts an array of numbers and returns the product of all the numbers in the array. Example: Input: [1, 2, 3, 4] , Output: 24
function productOfArrayElements(arr) {
    console.log(arr.reduce((a, i) => a = a * i, 1))
}
var arr = [1, 2, 3, 4]
productOfArrayElements(arr)
