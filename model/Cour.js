const mongoose = require('mongoose')

const courSchema = new mongoose.Schema(
 {
    title:{
        type:String,
        required:true,
    },


    level : {
        type:String,
        required:true,
    },

    content : {
        type : String,
        required : true,
    },
   

 },{
    timestamps:true,
 }
)


const Cour = mongoose.model("cour",courSchema)
module.exports = Cour