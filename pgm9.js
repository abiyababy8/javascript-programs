// factorial of a number using while loop

// 5!=1*2*3*4*5
var i=1;
var n=5;
var result=1;
while (i<=n) {
    result=result*i;
    i++;
}
console.log(`Factorial of ${n} is ${result}.`);


// find sum of numbers upto 10

var j=1;
var m=10;
var sum=0;
while (j<=m) {
    sum=sum+j;
    j++;  
}
console.log(`Sum of ${m} numbers is ${sum}`);
