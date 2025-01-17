function letBlockScope() {
    if (true) {
        let x = 20;
        console.log(x);
    }
    // console.log(x); error, x has scope inside if block
}
letBlockScope();

function testvarScope() {
    if (true) {
        var x = 10;
        console.log(x);
    }
    console.log(x);
}
// console.log(x); error; var has only scope inside function
testvarScope();