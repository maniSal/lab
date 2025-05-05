//01 require 
const express = require("express")

require("dotenv").config()
const connectDB =require('./config/connectDB')

// 02 intance de express

const app = express()
//middelware 
app.use(express.json())
//05 connection
connectDB()
//06 routes 
app.use("/api/auth",require('./routes/auth.route'))
/// route for the manipulation of users
app.use("/api/user",require('./routes/user.route'))
// route for cour : 
app.use("/api/cour",require('./routes/cour.route'))



//03 PORT 

const PORT = process.env.PORT || 7500 

//04 

app.listen(PORT,(err)=>{
    err? console.log(err) : console.log(`connected : http://localhost:${PORT}`)
})
