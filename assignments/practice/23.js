//Write a javascript program to add two random two digit numbers and ask the user to answer the same. Check and print if the answer given by the user is Correct or Not.
sum=Math.floor(Math.random())+Math.floor(Math.random());
a=8;
b=2;
if(sum===(a+b)){
    console.log(`user is correct, sum is ${sum}`)
}
else{
    console.log(`user is incorrect, sum is ${sum}`)
}