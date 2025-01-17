var names = ['john', 'kenneth', 'todd', 'heather', 'jeff'];

var arrayLength = names.length;

for (var i = 0; i < arrayLength; i++) {

    console.log(names[i]);
}

//pgm to find each num in an array

var nums = [1, 2, 3, 4, 5];
for (var j = 0; j < nums.length; j++) {
    console.log(nums[j] ** 2);
}

//to get output as an array

var result = [];
for (var j = 0; j < nums.length; j++) {
    result.push(nums[j] ** 2);
}
console.log(result);

var res = [1, 2, 3, 4, 5, 6, 7]
// print as an array the even nums in above array

var even = [];

for (var k = 0; k < res.length; k++) {
    if (res[k] % 2 === 0) {
        even.push(res[k]);
    }
}

console.log(even);