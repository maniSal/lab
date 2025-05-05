const jwt = require('jsonwebtoken')
const User = require("../model/User");
const isAdmin = async(req,res,next) =>{
    try {
        //token exist 
        const token = req.headers["authorization"] || req.query.Authorization;
        if(!token){
            return res.status(400).json({errors:[{msg:'token not founed'}]})
        }
// user match to the token
        const decode = jwt.verify(token,process.env.SECRET_KEY)
        const foundUser = await User.findOne({_id:decode.id})
        if(!foundUser){
            return res.status(400).json({errors:[{msg:'user not founed'}]})
        }

        if(!foundUser.isAdmin){
            return res.status(400).json({errors:[{msg:'You Are Not Admin'}]})
        }

        req.user = foundUser;
        next();

    
    } catch (error) {
        return res.status(400).json({errors:[{msg:'can not verify'}]})
    }
} 

module.exports = isAdmin;