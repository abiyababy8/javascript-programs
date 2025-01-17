let arr = [1, 2, 3, [4, 5]];
let flatArray = arr.flat(1);
//[1,2,3,4,5]
console.log(flatArray);
console.log("------------")

let arr1 = [1, 2, 3, [4, 5, [6, 7]]];
console.log(arr1.flat(1))
//[1,2,3,4,5,[6,7]]
console.log("------------")

console.log(arr1.flat(2))
//[1,2,3,4,5,6,7]
console.log("------------")

console.log(arr1.flat(Infinity))
//[1,2,3,4,5,6,7]

console.log("------------")
//flat()-upto 1 level
//flat(depth)-upto depth level
//flat(infinity)-upto its containing level

let arr2 = [1, [2, [3, [4, [5]]]]]
console.log(arr2.flat())
console.log(arr2.flat(2))
console.log(arr2.flat(Infinity))

console.log("------------")
let arr3=[1,2,3,,5,6] // to remove empty slots
console.log("Removing empty slots:",arr3.flat())