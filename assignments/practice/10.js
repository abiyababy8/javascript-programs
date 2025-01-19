//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms
function Fibonacci(num) {
    if (num == 1) {
        fibSeries = [0]
    }
    else if (num == 2) {
        fibSeries = [0, 1]
    }
    else if (num > 2) {
        fibSeries = [0, 1]
        for (i = 2; i < num; i++) {
            next = fibSeries[i - 1] + fibSeries[i - 2]
            fibSeries.push(next)
        }
    }
    else {
        fibSeries = []
    }
    console.log(fibSeries)
}
Fibonacci(5)