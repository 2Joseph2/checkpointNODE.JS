const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type" , "html")
    res.write( '<h1>Hello Node!!!!</h1>\n')
    res.end()
})
server.listen(3000,"localhost",()=>{
    console.log("server is running on port 3000")
})