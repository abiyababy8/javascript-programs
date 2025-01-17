let num=[1,2,3,4,5];
//need to find square of each number in array and return as array
const res=num.map((item)=>item**2);
console.log("Array:",num);
console.log("ResultArray:",res);




let names=['john','sean','ross','kenneth']
//convert every element in the array to uppercase
let upperCaseArray=names.map((item)=>item.toUpperCase());
console.log("Array:",names);
console.log("Result:",upperCaseArray)

let upperCaseArrayNew=names.map((item)=>{
    return item.toUpperCase();
});
console.log("new Result:",upperCaseArrayNew)
