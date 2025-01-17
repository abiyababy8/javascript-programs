let str='aabcfgdrbdcghr'
// find the count of each character as an object
//{ a: 2, b: 2, c: 2, f: 1, g: 2, d: 2, r: 2, h: 1 }
let strArray=str.split('');
letterCount={}
for(let char of strArray){
    if(char in letterCount){
        letterCount[char]=letterCount[char]+1
    }
    else{
        letterCount[char]=1
    }
}
console.log(letterCount)