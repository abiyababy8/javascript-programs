//32)	Write a function to convert a string from snake_case to camelCase. Hint: Use string splitting and array mapping.
function snakeToCamel(str) {
    return str.split('_').map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
}
console.log(snakeToCamel("abiya_baby"))
