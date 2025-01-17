// find whether number is palindrome or not
var reversenum = 0;
var num = 5757;
var n = num;
while (n > 0) {
    var remainder = n % 10;
    reverseNum = (reverseNum * 10) + remainder;
    n = Math.floor(n / 10);
}
if (num === reverseNum) {
    console.log(`${num} is a Palindrome`);

}
else {
    console.log(`${num} is not Palindrome`);
}