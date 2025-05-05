const { JsonWebTokenError } = require("jsonwebtoken")
const User = require("../model/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.register = async(req,res)=>{
    try {
        const {name,email,password,phone}=req.body
        const foundUser = await User.findOne({email})
        if(foundUser){
            return res.status(400).json({errors:[{msg:"email should be unique !!"}]})
        }
       
       const saltRound = 10;
       const hashPassword = await bcrypt.hash(password,saltRound)
       const newUser = new User ({name,email,password:hashPassword,phone}) 
       await newUser.save()
       // create the token : 

       const token = jwt.sign({id:newUser._id},process.env.SECRET_KEY,{expiresIn:"2h"})
       res.status(200).json({success:[{msg:" congrats register done !!"}],user:newUser,token})
    } catch (error) {
        res.status(400).json({errors:[{msg:"There is a problem is signing up  !!"}],error})
        
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundUser = await User.findOne({ email });
        if (!foundUser) {
            return res.status(400).json({ errors: [{ msg: "Bad information 1" }] });
        }
        const checkPassword = await bcrypt.compare(password, foundUser.password);
        if (!checkPassword) {
            return res.status(400).json({ errors: [{ msg: "Bad information 2" }] });
        }

        //  token :
        const token = jwt.sign({ id: foundUser._id }, process.env.SECRET_KEY, { expiresIn: "2h" });

        res.status(200).json({ success: [{ msg: "Login done!" }], user: foundUser, token });
    } catch (error) {
        console.error(error); // Always print the error for debugging
        res.status(400).json({ errors: [{ msg: "There is a problem login!!" }], error });
    }
}
