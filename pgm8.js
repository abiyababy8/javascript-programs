var age=25;
console.log("Example for if else:");
console.log("-----");

if(age>=18){
    console.log("Eligible for voting");   
}
else{
    console.log("Not eligible for voting");
}

console.log("Example for ternary operator:");
console.log("-----");

age>=18?console.log("Eligible for voting"):console.log("Not eligible for voting");
console.log("-----");

console.log(age>=18?"Eligible for voting":"Not eligible for voting");


var userStatus=age>=18?"adult":"minor";
console.log(userStatus);

