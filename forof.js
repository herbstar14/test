var person = [ "Andrew" , "Herbst" ,21 , "dogs"]

console.log(person[0])
console.log(person[1])
console.log(person[2])

console.log(typeof(person[2]))

var text = ""

for (const value of person ){
    
text += console.log("value : " + value + " " + typeof(value))

}//end for of 

console.log(text)