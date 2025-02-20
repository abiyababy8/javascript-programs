//41)	Write a java script program to check whether the given number is armstrong or not
function isArmstrong(num) {
    let originalNum = num;
    let sum = 0;
    let c = 0;
    
    // Count the number of digits
    let temp = num;
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        c++;
    }
    
    // Calculate the sum of each digit raised to the power of c
    temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, c);  // Raise digit to the power of c
        temp = Math.floor(temp / 10);
    }
    
    // Check if sum matches the original number
    return sum === originalNum;
}

// Test cases
console.log(isArmstrong(153));  // true

