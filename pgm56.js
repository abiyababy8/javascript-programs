
//check whether the string is palindrome or not
var str = "malayalam"
var str_arr = str.split('');
console.log(str_arr)
var str_rev = str_arr.reverse();
console.log(str_rev)
var result = str_rev.join('');
console.log(result)
if (result === str) {
    console.log("String is palindrome")
}
else {
    console.log("String is not palindrome")
}

// //single step
// let res = str.split('').reverse().join('');
// console.log(res)
// if (res === str) {
//     console.log("String is palindrome")
// }
// else {
//     console.log("String is not palindrome")
// }