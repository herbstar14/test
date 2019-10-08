const fs = require('fs')

fs.readdir('./folder', (err,data)=>{
    if(err){throw err;}
    console.log('check folder' , data)
    fs.unlink('./folder/newFile.js', (err)=>{
        if(err){throw err;}

        fs.rmdir('./folder', (err)=>{
            if(err){throw err;}

            console.log('removed folder')

//{"name" : "Herbst" , "age" : 12 , "address":{"first": "main street", "second" : "death street"} }

        })


    })

})