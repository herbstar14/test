const ex_function = function(parm){
return new Promise(function(resolve,reject){

console.log("wait 3 seconds")
setTimeout(function(){
    if(parm){
        resolve("done")
    }else{
        reject(error("error"))
    }
})

})

}

ex_function(true).then(function(message){
console.log(message)

})
.catch(function(error){
    console.log(error)
})