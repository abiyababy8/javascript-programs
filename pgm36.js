//  find even numbers and odd numbers from the given array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddArray = [];
var evenArray = [];
for (let i in arr) {
    if (arr[i] % 2 === 0) {
        evenArray.push(arr[i]);
    }
    else {
        oddArray.push(arr[i]);
    }
}
console.log("Odd numbers:");

console.log(oddArray);

console.log("Even numbers:");

console.log(evenArray);


//find cube of each number in the array
var arr = [2, 5, 7, 9];

var cube = [];

for (var item of arr) {
    cube.push(item ** 3);
}
console.log("Cubes:");

console.log(cube);

