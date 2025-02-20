//38)	Write a function that removes duplicate values from an array. Example: Input: [1, 2, 2, 3, 4, 4, 5], Output: [1, 2, 3, 4, 5]
function removeDuplicates(arr) {
    var uniqueArray = [...new Set(arr)]; // Convert Set back to an array
    console.log(uniqueArray);
}

var arr = [1, 2, 2, 3, 4, 4, 5];
removeDuplicates(arr);
