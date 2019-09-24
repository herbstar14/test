const plus = function(a,b, callback){

var result = a+b
callback(result)


}//end plus 

plus(11,11,function(res){
    console.log(res)
})

const pm = function(a,b, callback){

    callback(a+b, a-b, a*b, a/b)

}

pm(12,111, function(res1, res2, res3, res4){

    console.log("a+b ="+res1)
    console.log("a-b ="+res2)
    console.log("a*b ="+res3)
    console.log("a/b ="+res4)
})