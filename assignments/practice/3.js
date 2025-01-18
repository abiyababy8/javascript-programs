// Write a program to find multiplication of 2 numbers using + operator you must use minimum possible iterations.
res = 0
function multiply(a, b) {
    a1 = Math.abs(a);
    b1 = Math.abs(b)
    for (i = 0; i < b1; i++) {
        res = res + a1
    }
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        res = -res;
    }
    console.log('Sum of ', a, 'and', b, 'is', res)
}
multiply(-3, 3)