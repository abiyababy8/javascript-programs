//Write a javaScript program to find the Fibonacci series up to 10 terms.
var arr = [0, 1]
const num = 10;
for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
}
console.log(arr);