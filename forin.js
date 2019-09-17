var person = {fname : "Andrew " , lname: "Herbst " , age: 21}//key--value 

console.log(person['age'])
console.log(person['fname'])
var text = ""

for (const key in person){

    text = text + person[key]
    console.log("key: " + key)

}//end for in 

console.log(text)

