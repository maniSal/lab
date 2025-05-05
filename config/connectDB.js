// require de mongosse 

const mongosse = require('mongoose')
const connectDB = async()=>{
    try {
        await mongosse.connect(process.env.DB_URI)
        console.log("happy me !!")
    } catch (error) {
        console.log("Saaaaaaaad me !!")
    }
}

module.exports = connectDB