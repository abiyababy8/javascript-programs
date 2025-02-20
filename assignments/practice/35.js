//35)	write a js programme array with string and find out the name starting with letter 'k' the string with array is [john,rose,kenneth,jishnu,santhosh]
var arr=["john","rose","kenneth","jishnu","santhosh","kasper","kippling"];
var result=arr.filter(i=>i.startsWith('k'))
console.log(result)