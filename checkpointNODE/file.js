const fs = require('fs')

fs.writeFile("welcome.txt","Hello Node",()=>{
    console.log("File created")
})

fs.readFile("welcome.txt",(err,data)=>{
    if (err) {
        console.log(err)
    } else {
        console.log(data.toString())
    }
})