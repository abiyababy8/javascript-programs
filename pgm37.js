//find lowest amount from the given array
let amount = [300, 450, 145, 90, 200, 360, 500];
let lowestAmount = amount[0];
for (var item of amount) {
    if (item <= lowestAmount) {
        lowestAmount = item;
    }
}
console.log("Lowest Amount:");

console.log(lowestAmount);
