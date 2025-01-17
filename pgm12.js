// print 1 to 10 using for loop
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("------------------------");

//print 10 to 1
for (i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("------------------------");

//  find factorial of a number using for loop
var num = 5;
var result = 1;
for (i = 1; i <= num; i++) {
    result = result * i;
}
console.log(`Factorial of ${num} is ${result}`);
