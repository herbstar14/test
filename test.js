function main (){

    var test1 = ""
    let test2 = "1"
    const test3 = null
    var test4 = undefined 
    var test5 = Symbol("1")
    var test6 = 1

    console.log(typeof(test1))
    console.log(typeof(test2))
    console.log(typeof(test3))
    console.log(typeof(test4))
    console.log(typeof(test5))
    console.log(typeof(test6))
    
    console.log(checkBoolean(test1))
    console.log(checkBoolean(test2))
    console.log(checkBoolean(test3))
    console.log(checkBoolean(test4))
    console.log(checkBoolean(test5))
    console.log(checkBoolean(test6))

}// end main 


function checkBoolean(value){
    if(value){

        return true
    }
    else{return false}//end if1

}//end function checkB()





main();
