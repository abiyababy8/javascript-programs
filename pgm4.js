
// new Date() is an inbuilt method in js to obtain current date
var todaysDate= new Date();
console.log("Today's Date is", todaysDate);

var today= new Date().getDay();
//console.log("Today's Day is", today);


//example for else if ladder

if(today===0){
    console.log("Today is Sunday");
}
else if(today===1){
    console.log("Today is Monday");
}
else if(today===2){
    console.log("Today is Tuesday");
}
else if(today===3){
    console.log("Today is Wednesday");
}
else if(today===4){
    console.log("Today is Thursday");
}
else if(today===5){
    console.log("Today is Friday");
}
else if(today===6){
    console.log("Today is Saturday");
}
else{
    console.log("Something went wrong");
}
//second example
var age=2;
if(age<=3){
    console.log("Baby");
}
else if(age<=8){
console.log("Kid");
}
else if(age<=14){
    console.log("Infant");
}
else if(age<=18){
    console.log("Minor");
}
else{
    console.log("Senior"); 
}

