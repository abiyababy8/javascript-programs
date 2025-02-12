//34)	write a JS program to convert roman numbers to integers
// Example 1
// Input: "LVIII"
// Output: 58
// Example 2
// Input: "III"
// Output: 3
function romanToInt(roman) {
    let romanValues = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let total = 0;
    for (let i = 0; i < roman.length; i++) {
        let current = romanValues[roman[i]];
        let next = romanValues[roman[i + 1]];
        if (current < next) {
            total = total - current;
        }
        else {
            total = total + current;
        }
    }
    return total;
}
console.log(romanToInt("CIVIL"))