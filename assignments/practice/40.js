//40)	Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x. Example 1:
// Input: n = 16
// Output: true
// Explanation: 2^4 = 16
// Example 2:
// Input: n = 3
// Output: false
function powerOfTwo(num) {
    if (num <= 0) {
        return false;
    }

    while (num > 1) {
        if (num % 2 !== 0) {
            return false; // If it's not divisible by 2, it's not a power of two
        }
        num = num / 2; // Keep dividing by 2
    }

    return true; // If we reach 1, it's a power of two
}
console.log(powerOfTwo(8))
