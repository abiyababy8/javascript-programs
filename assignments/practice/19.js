// What is function currying?
// Function currying is a process in which we convert a function with multiple parameters to a chain of functions with a single parameter.
// Example:
// Normal function
function sum(a, b) {
    return a + b;
}
// Curried function
function currySum(a) {
    return function (b) {
        return a + b;
    }
}
console.log(sum(1, 2));      // 3
console.log(currySum(1)(2));  // 3

function currySum2(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(currySum2(1)(2)(3));