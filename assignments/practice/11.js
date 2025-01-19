//Write a javascript program to count the occurrence of each character in a string
function frequency(str){
    str=str.split('')
    count=1
    for(i=0;i<str.length;i++){
        for(j=i+1;j<str.length;j++){
            if(str[i]===str[j]){
                count++
            }
        
        }
        console.log("count of "+str[i]+" is "+count)
    }
}
frequency('heyy')