//Linear search on string array
let fruits = ['apple', 'orange', 'kiwi', 'mango', 'pineapple', 'banana', 'guava']
target = 'mango';
function linearSearch(array, myTarget) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === myTarget) {
            return i;
        }
    }
    return -1;
}
var targetIndex = linearSearch(fruits, target);
if (targetIndex === -1) {
    console.log(`${target} is not found in the array`);
}
else {
    console.log(`${target} is at the index ${targetIndex}`);
}