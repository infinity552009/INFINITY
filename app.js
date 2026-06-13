let port = 8000
const express = require('express')
const app =express()
app.get('/',(req,res)=>{
    console.log("Server Listen >>>")
    res.send('<center><h1>Hello My name is Infinity </h1> <h1>Welcome to my website</h1></center>')
    
})
app.listen(port,(req,res)=>{
 console.log(`app is running localhost:${port} port...`)
})