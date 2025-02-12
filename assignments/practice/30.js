//30)	Given a string, write a function to count the occurrences of each character in the string.
function charCount(str) {
    str = str.toLowerCase()
    let charCount = {}
    for (let char of str) {
        if (charCount[char]) {
            charCount[char] = charCount[char] + 1;
        }
        else {
            charCount[char] = 1
        }
    }
    console.log(charCount)
}
charCount("AbiyaBaby")