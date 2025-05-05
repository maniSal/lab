// import express
const express = require("express")
const { register,login } = require("../controllers/auth.controller")
const { registerValidation, validation, loginValidation } = require("../middleware/validator")
const isAuth = require("../middleware/isAuth")
const router = express.Router()

//test
router.get('/test', (req, res) => {
    res.json('test test')
})
// register and validation 
router.post('/register', registerValidation(),validation, register)
// login and validation 
router.post('/login',loginValidation(),validation,login)
// current = current user
router.get('/current', isAuth,(req,res)=>{
    res.status(200).json({user:req.user})
})
module.exports = router;


