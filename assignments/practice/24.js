//Write a JavaScript program using function that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".
function multiple(n){
    for(i=1;i<=n;i++){
        if((i%3===0)&&(i%5===0)){
            console.log("FizzBuzz");
        }
        else if(i%5===0){
            console.log("Buzz");
        }
        else if(i%3===0){
            console.log("Fizz");
       }
        else{
            console.log(i);
        }
    }
}
multiple(100);