var num = 345432; // Input number
var arr = num.toString().split(''); // Convert number to an array of digits
console.log(arr);

var rev = [...arr].reverse(); // Create a reversed copy of the array
console.log(rev);

// Correct comparison: check if the original array and reversed array are equal
if (arr.join('') === rev.join('')) {
    console.log(`${num} is a palindrome number`);
} else {
    console.log(`${num} is not a palindrome number`);
}
