// find whether a number i prime or not
// prime number = number is only divible by and same number
//  2 3 5 7 11 13 17 19
var count = 0;
var num = 13;
for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
        count++;
    }
    if (count > 2) {
        break;
    }
}
if (count === 2) {
    console.log(`${num} is a prime number`);
}
else {
    console.log(`${num} is not a prime number`);
}
