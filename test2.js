var x = "john"//datatype string 
let y = 'john'

var z = new String("john")//datatype object 
var a = `john`


console.log("showing x and z ")
console.log(x==z) 
console.log(x===z)//the extra "=" means yo8u are also comparing the data type
console.log("The type of x is " + typeof(x))
console.log("The type of z is " + typeof(z))

console.log("\n showing x and y")
console.log(x==y)
console.log(x===y)
console.log("The type of x is " + typeof(x))
console.log("The type of y is " + typeof(y))


console.log("\n showing x and a ")
console.log(x==a)
console.log(x===a)
console.log("The type of x is " + typeof(x))
console.log("The type of a is " + typeof(a))