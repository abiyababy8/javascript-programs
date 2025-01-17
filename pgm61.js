const pattern = 'abcaghfccc'
// find first recursive character...

//convert string to array
const patternArray = pattern.split('')
console.log(patternArray)
//initialize an empty object
let letterCount = {}
//iterate over each item in array , then check whther the item is present as key in the object we created, if present, mark it as already exist else add it as a key to the object with count 1
for (let char of patternArray) {
    if (char in letterCount) {
        console.log("first recursive character is: ", char)
        break;
    }
    else {
        letterCount[char] = 1
    }
}