add(1,2,3)
function add(...num){
    var result=0
    for(let item of num){
        result=result+item
    }
    console.log(result)
}
add(1,2)
add(1,2,3,4)