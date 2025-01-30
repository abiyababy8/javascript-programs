//write a JavaScript program to print Floyd’s Triangle
function floydstTriangle(n){
    let num=1;
    for(let i=0;i<=n;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row=row+num+" ";
            num++;
        }
        console.log(row.trim());
    }
}
floydstTriangle(6);