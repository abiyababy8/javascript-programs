var arr = [1, 7, 3, 8,10]
var largest = -Infinity;
var secondLargest = -Infinity;
for (i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
        secondLargest=largest;
        largest = arr[i]
    }
    else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i]
    }
}
console.log("Second Largest is",secondLargest)