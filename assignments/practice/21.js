//Write a javascript program to generate a random number between 1 and 100
function randomNumber(max, min) {
    return Math.floor((Math.random() * (max - min)) + min);
}
console.log(randomNumber(1, 100));