const addNum=(num1,num2)=>{
console.log(num1+num2);
}
addNum(4,5)

// write an arrow fn to find cube of a number

const cubeOfNum=(num)=>{
    console.log(num**3);
}
cubeOfNum(5);

const addThreeNum=(num1,num2,num3)=>{
let res=num1+num2+num3;
return res;
}
console.log(addThreeNum(2,5,3));

const sqOfNum=(num)=>num**2;
console.log("Example of no return");
console.log(sqOfNum(3));


const addThreeNums=(num1,num2,num3)=>num1+num2+num3;
    console.log(addThreeNums(2,5,1));
    