var day = "";
var today = new Date().getDay();
console.log(today);

switch (today) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        break;
}
console.log("Today is " + day);

console.log("-----------------------");

var userInput = "Car";
switch (userInput) {
    case "Apple":
        console.log(`${userInput} is a fruit`);
        break;
    case "Cabbage":
        console.log(`${userInput} is a vegetable`);
        break;
    default:
        console.log(`${userInput} is neither a fruit nor a vegetable`);
        break;
}