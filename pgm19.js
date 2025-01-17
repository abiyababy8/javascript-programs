// write a function to print upto n using for loop

function print(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
var number = 20
print(number);

// print numbers in single line
function printNum(num) {
    str = ""
    for (var i = 1; i <= num; i++) {
        str = str + i + " ";
    }
    console.log(str);
}
var num1 = 20
printNum(num1);

// function to find factorial of a number using return

function factorial(a) {
    var result = 1;
    for(var i=1;i<=a;i++){
        result = result * i;
    }
    return result;
}
console.log(factorial(5));
