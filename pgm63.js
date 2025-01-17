let str = 'abcdaafdca'
//find count of each character in string
//find the max count and which character has maximum count
let temp = str.split('')
let count = {}
for (let char of temp) {
    if (char in count) {
        count[char] = count[char] + 1
    }
    else {
        count[char] = 1
    }
}
console.log(count)
let max=0
let mostfrequent
for(let item in count){
    if(count[item]>max){
        max=count[item]
        mostfrequent=item
    }
}
console.log("Max Count:",max)
console.log("Most frequent character:",mostfrequent)
