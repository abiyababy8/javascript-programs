const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// find sum of elements using reduce method
const result = numbers.reduce((acc, element) => {
    return acc + element;
    // 0+1
    // 1+2
    // ....
    // 45+10
}, 0);
console.log("Sum:", result);


const marks = [45, 67, 32, 27, 78, 46, 18]
//find max mark from the array using reduce()
const maxMark = marks.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
}, 0)
console.log("Maximum mark:", maxMark);


//find min value from above array using reduce()
const minMark = marks.reduce((a, c) => {
    return Math.min(a, c);
})
console.log("Minimum mark:", minMark);
