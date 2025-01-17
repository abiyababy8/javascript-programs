var arr = [1, 2, 3, 4]
var res = []
var sum = 0
for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
    res.push(sum)
}
console.log(res)