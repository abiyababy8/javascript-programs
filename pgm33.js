//var

var x = 45; // global scope,hoisting possible, variable redeclaration and updation possible

function printNum() {
    var m = 40; // function scope, outside fn not able to access,
    x = 50; // updation is possible
    var x = 60; //redeclaration possible
}
console.log(m); // error; because m has only fn scope


//let

let num1 = 20; //global scope
function printNumNew() {
    if (num1 === 20) {
        let x = 50;
        var m = 10;
        // let x=40; not possible; redeclaration inside same block not possible
        x = 20; //updation possible
    }
    else {
        let x = 90; //redeclaration is possible outside other block
    }
    console.log(x); //error; x has only scope inside if block
    console.log(m); //possible; m has fn scope, hoisting also not possible
}


//const

//block scope, updation and redeclaration not possible
// assign the value at the time of declaration

const m = 45;


// arrow fn
const addNum = (num1, num2) => num1 + num2;
addNum(4,6);