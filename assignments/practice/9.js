// Write a function to check if two strings are anagrams in javascript.
function anagrams(str1, str2) {
    var str1 = str1.toLowerCase()
    str1 = str1.split('').sort()
    var str2 = str2.toLowerCase()
    str2 = str2.split('').sort()
    if (str1.join('') === str2.join('')) {
        console.log("The strings are ANAGRAMS")
    }
    else {
        console.log("The strings are not ANAGRAMS")
    }
}
anagrams('heyy', 'eyyh')