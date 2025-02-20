//42)	Write a Javascript Program to Convert Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Test cases
console.log(celsiusToFahrenheit(0)+'°F');    // 32°F
console.log(celsiusToFahrenheit(100)+'°F');  // 212°F
