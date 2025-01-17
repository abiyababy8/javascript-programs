//Linear Search
const myArray = [3, 7, 8, 1, 11, 45, 34, 23, 4];
const target = 34;

function linearSearch(arr, myTarget) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === myTarget) {
            return i;
        }
    }
    return -1; // if an item not found in the array, javascript return -1 by default
}
const resultIndex = linearSearch(myArray, target);
if (resultIndex === -1) {
    console.log("Item not found in the given array");
}
else {
    console.log(`Item found at index ${resultIndex}`);
}
