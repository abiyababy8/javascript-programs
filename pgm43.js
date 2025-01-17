var num = [11, 22, 33, 44, 55];
num.forEach((item, i) => {
    console.log("item:", item);
    console.log("index:", i);
});

var numbers = [1, 2, 3, 4, 5]// result array=[3,6,9,12,15] ;multiple of 3
var res = [];
numbers.forEach((item) => {
    res.push(item * 3);
})
console.log(res)
