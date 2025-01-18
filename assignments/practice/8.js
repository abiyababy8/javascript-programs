// Write a javascript function that accepts a number and returns its factorial (e.g., factorial of 5 is 5 x 4 x 3 x 2 x 1)
function factorial(num){
    var res=1
    for(var i=1;i<=num;i++){
        res=res*i
    }
    console.log(`Factorial of ${num} is ${res}`)
}
factorial(4)