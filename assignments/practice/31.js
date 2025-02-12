//31)	Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
function evenNumArray(arr){
    return arr.filter(num=>num%2===0)
}
console.log(evenNumArray([1,2,3,4,5,6,7,8,9,10,11]))