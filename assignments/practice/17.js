//Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively. Sample array : [1,2,3,4,5], Expected Output : 2,4
function Secondmost(a) {
    var largest = -Infinity;
    var secondLargest = -Infinity;
    var smallest = Infinity;
    var secondSmallest = Infinity;
    for (let i of a) {
        if (i > largest) {
            secondLargest = largest;
            largest = i;
        }
        else if (i > secondLargest && i !== largest) {
            secondLargest = i;
        }
        if (i < smallest) {
            secondSmallest = smallest;
            smallest = i;
        }
        else if (i < secondSmallest && i !== smallest) {
            secondSmallest = i;
        }
    }
    console.log(secondSmallest, secondLargest)
}
const arr = [1, 2, 3, 4, 5];
Secondmost(arr);
