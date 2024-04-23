const express = require('express')
const mongoose  = require('mongoose')
const app = express()

//routes
app.get('/', (req, res)=>{
    res.send('Hello NODE API')
})


app.listen(3000, ()=> {
    console.log(`Node API is running on port 3000`)
})

mongoose.
connect('mongodb://127.0.0.1:27017/node-API')
.then(()=> {
    console.log('Database Connected!')
    app.listen(3000, ()=> {
        console.log(`Node API is running on port 3000`)
    }) 
        
})
