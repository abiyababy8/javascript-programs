//	Write a JavaScript program to find the missing number in an array that contains numbers from 1 to N
arr = [1, 2, 3, 5, 6];
n = 6;
expectedSum = n * (n + 1) / 2;
realSum = arr.reduce((sum, num) => sum + num, 0);
missingNum = expectedSum - realSum;
console.log(missingNum);