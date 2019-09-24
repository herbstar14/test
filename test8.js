const fs = require('fs')

console.log("Before Sync Read")

var data = fs.readFileSync('C:/Users/herbstar14/Desktop/test8A.txt' , {encoding:'utf8'}) //sometimes you need the entire address 
console.log(data)

console.log("After Sync Read")

console.log("Before Async Read")

fs.readFile('C:/Users/herbstar14/Desktop/test8A.txt', {encoding: 'utf8'}, function(err,data){
   
   if(err){console.log(err)}//need to finish this up at home 
    console.log(data)
})
console.log("After Async Read")