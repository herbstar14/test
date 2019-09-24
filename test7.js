const fs = require('fs')

console.log("Before Sync Read")

var data = fs.readFileSync('test7A.text' , {encoding:'utf8'})
console.log(data)

console.log("After Sync Read")

console.log("Before Async Read")

fs.readFile('test7a.txt', {encoding: 'utf8'}, function(err,data){
    console.log(data)
})
console.log("After Async Read")