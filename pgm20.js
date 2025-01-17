// function print whether a number is even
function checkEven(n) {
    if (n % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
var res = checkEven(6);
if (res) {
    console.log("The given number is even.");
}
else {
    console.log("The given number is not even.");
}

//write a function to check whether a num is prime or not

function prime(num) {
    var count = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        console.log("Number is prime.");
    }
    else{
        console.log("Number is not prime.");
    }
}
prime(4);

