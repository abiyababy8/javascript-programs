function addNumbers(num1, num2, callback) {
    var result = num1 + num2;
    callback(result);
}
function cubeOfNum(num) {
    console.log(num**3);

}
addNumbers(2, 3, cubeOfNum);