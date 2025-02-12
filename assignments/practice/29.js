//29)	Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers
function gcd(a,b){
    while (b!==0) {
        let temp=b;
        b=a%b;
        a=temp;
    }
    console.log(a);
}
gcd(72,120);