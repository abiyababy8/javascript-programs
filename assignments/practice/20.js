//Explain how the map(), filter(), and reduce() array methods work and give example for each one
var arr=[1,2,3,4]
const mapped=arr.map((item)=>{
    return item*2;
})
console.log("Doubled array elements using map(): ",mapped);
const filtered=arr.filter((item)=>item%2==0)
console.log("Even numbers in the array using filter(): ",filtered)
const reduced=arr.reduce((a,i)=>{
return a+i;
},0)
console.log("Sum of Elements in the array using reduce(): ",reduced)