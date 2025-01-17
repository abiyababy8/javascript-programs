function outerfn() {
    console.log("Inside 'outer' function");
    function innerfn() {
        console.log("Inside 'inner' function");
    }
    innerfn();
}
outerfn();