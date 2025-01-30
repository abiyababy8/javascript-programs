//Write a JavaScript Program to Display Armstrong Number Between Two Intervals
const s=1;
const e=1000;
for(let i=s;i<=e;i++){
   var num=i;
   var sum=0;
   var digits=num.toString().length;
   var temp=num;
   while (temp>0) {
    let digit=temp%10;
    sum=sum+digit**digits;
    temp=Math.floor(temp/10);
   }
   if(sum===num){
    console.log(num)
   }
}