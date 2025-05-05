const User = require("../model/User")
exports.getAllUsers=async(req,res)=>{
try {
   const listUsers = await User.find()
   res.status(200).json({success:{msg:"The List Of All Users"},listUsers})
} catch (error) {
    res.status(400).json({errors:{msg:"Can Not Find The List Of Users"}})
}
}


exports.deleteUser=async(req,res)=>{

    try {
        const{id} =req.params;
        const UserToDelete = await User.findByIdAndDelete(id)
        if(!UserToDelete){
            res.status(400).json({errors:{msg:"User Do Not Exists !"}})
        }
        res.status(200).json({success:{msg:"Delete Of User Done Perfectlyy !"}})
    } catch (error) {
        res.status(400).json({errors:{msg:"Can Not Delete !"}})
    }

}

exports.getOneUser=async(req,res)=>{

    try {
        const {id}=req.params
        const userToGet= await User.findById(id)
        if(!userToGet){
            res.status(400).json({errors:{msg:"User Do Not Exists !"}})
        }
        res.status(200).json({success:{msg:"User has been found:"},userToGet})
    } catch (error) {
        res.status(400).json({errors:{msg:"Can Search!"}})
    }

}