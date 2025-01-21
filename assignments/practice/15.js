//Write a JavaScript function to find all pairs of numbers in an array that sum up to a given target value. Return the pairs as an array of arrays.
var arr=[6,2,5,0,4,1]
var target=6
var res=[]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(target===(arr[i]+arr[j])){
            res.push([arr[i],arr[j]])
        }
    }
}
console.log(res)