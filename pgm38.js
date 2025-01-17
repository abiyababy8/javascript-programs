//find largest num from array
var amount = [300, 500, 160, 560, 380, 800, 750, 640];
var largest = amount[0];
for (var item of amount) {
    if (item >= largest) {
        largest = item;
    }
}
console.log("Largest Amount:", largest);