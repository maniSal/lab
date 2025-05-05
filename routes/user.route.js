const express = require('express');
const { getAllUsers, deleteUser, getOneUser } = require('../controllers/user.controller');
//const { getAllUsers } = require('../controllers/user.controller');
const isAdmin = require('../middleware/isAdmin'); // or wherever your file is


const router = express.Router()

router.get('/test',(req,res)=>{
    res.status(200).json({msg:" hello its the admin route"})
}) 
// User list 
router.get('/allUsers',isAdmin,getAllUsers);

// delete a user : 

router.delete('/:id',isAdmin,deleteUser)
// admin get a profile:
router.get('/:id',isAdmin,getOneUser)







//console.log(typeof isAdmin); // should print "function"


module.exports = router;