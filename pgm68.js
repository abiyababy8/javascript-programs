// exp='10*2+10'
// console.log('Exception Handling')
// const result=eval(exp);
// console.log(result)
// console.log("Task Completed")
exp = '10*2+10'
console.log('Exception Handling')
try {
    const result = eval(exp);
    console.log(result)
}
catch {
    console.log("There is some error in evaluating the expression")
}
finally {
    console.log("Task Completed")
}