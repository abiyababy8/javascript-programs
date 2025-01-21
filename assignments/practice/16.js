//Write a function countVowels that takes a string as input and returns the number of vowels (a, e, i, o, u) in it.
var str = "elephant"
function countVowels(str) {
    str = str.toLowerCase().split('');
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelCount = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    }
    for (let char of str) {
        if (char in vowelCount) {
            vowelCount[char]++;
        }
    }
    return vowelCount;
}
console.log(countVowels(str))