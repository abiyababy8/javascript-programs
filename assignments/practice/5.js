// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
function check(a, b) {
    if (a == 50) {
        console.log("TRUE")
    }
    else if (b == 50) {
        console.log("TRUE")
    }
    else if ((a + b) == 50) {
        console.log("TRUE")
    }
    else {
        console.log("FALSE")
    }
}
check(45, 5)