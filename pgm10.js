// reverse a number using while loop 

var reversenum = 0;
var num = 567;
var n = num;
while (n > 0) {
    var remainder = n % 10; //7  6  5
    reversenum = (reversenum * 10) + remainder;// 7  76  765
    n = Math.floor(n / 10);//56 5 0
}
console.log(`Reverse of ${num} is ${reversenum}`);



