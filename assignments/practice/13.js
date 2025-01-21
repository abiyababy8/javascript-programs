//Write a JavaScript function to find the first non-repeating character in a string. If all characters repeat, return null.
function frequency(str) {
    str = str.split('');
    for (i = 0; i < str.length; i++) {
        isUnique = true;
        for (j = 0; j < str.length; j++) {
            if ((i !== j) && (str[i] === str[j])) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            console.log(str[i])
            return;
        }
    }
    console.log(null);
}
frequency('hheeyy');