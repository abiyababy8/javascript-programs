// 28)	Write code that enhances all arrays such that you can call the snail(rowsCount, colsCount) method that transforms the 1D array into a 2D array organised in the pattern known as snail traversal order. Invalid input values should output an empty array. If rowsCount * colsCount !== nums.length, the input is considered invalid.
// Eg:-
// Input: 
// nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
// rowsCount = 5
// colsCount = 4

// Output: 
// [
//  [19,17,16,15],
//  [10,1,14,4],
//  [3,2,12,20],
//  [7,5,18,11],
//  [9,8,6,13]
// ]
Array.prototype.snail = function(rowsCount, colsCount) {
    // If the input is invalid, return an empty array
    if (rowsCount * colsCount !== this.length || rowsCount <= 0 || colsCount <= 0) {
        return [];
    }

    let result = Array.from({ length: rowsCount }, () => []); // Create an empty 2D array
    let index = 0;

    for (let col = 0; col < colsCount; col++) {
        if (col % 2 === 0) { 
            // Fill top to bottom for even columns
            for (let row = 0; row < rowsCount; row++) {
                result[row][col] = this[index++];
            }
        } else {
            // Fill bottom to top for odd columns
            for (let row = rowsCount - 1; row >= 0; row--) {
                result[row][col] = this[index++];
            }
        }
    }

    return result;
};

// Example usage:
let nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
let rowsCount = 5, colsCount = 4;

console.log(nums.snail(rowsCount, colsCount));
