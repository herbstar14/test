var x = 100
var y = 200

var word1 = "Hello"
var word2 = "Hey"
var word3 = "hello"
var word4 = "Hello"
var word5 = "Hi"

function test1(x,y){
    if (x==y){
        console.log("They were equal \n ")

    }else{console.log("They werent equal \n ")}//end if 


}//end test 1

function test2(word){

    switch(word){
        case "Hello" :
        console.log("You said Hello! \n")
        break

        case "Hi" :
        console.log("You said Hi! \n")
        break

        case "hello" : 
        console.log("You said hello, make sure to capatialize the first word in a sentance \n")
        break
        default: console.log("I didnt understand what you said \n")


    }//end switch 


}//end test 2
 
console.log(" :: Test 1 start ::  \n ")
test1(x,y)
console.log(" :: Test 1 complete! ::  \n")

console.log(" :: Test 2 start :: \n")

console.log("Word 1")
test2(word1)

console.log("Word 2")
test2(word2)

console.log("Word 3")
test2(word3)

console.log("Word 4")
test2(word4)

console.log("Word 5")
test2(word5)

console.log(" :: Test 2 complete! :: ")
