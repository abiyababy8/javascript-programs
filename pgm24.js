var intervalId=setInterval(function(){
    console.log("This message prints in every second")
},1000);
setTimeout(function(){
    clearInterval(intervalId);          // stops the execution of previous setTimeout function
},5000);
