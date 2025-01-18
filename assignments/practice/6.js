// 6)	Write a Program to find prime numbers in a given range using looping statements.
var a = 3
var b = 20

for (i = a; i <= b; i++) {
    var c = 0
    for (j = 2; j <= i; j++) {
        if (i % j === 0) {
            c++
        }
    }
    if (c===1) {
        console.log(i)
    }
}
