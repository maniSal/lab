const express = require('express')
const { addCour ,getAllCour,getOneCour, editCour, deleteCour} = require('../controllers/cour.controller')



const router = express.Router()


//test 
    router.get('/test',(req,res)=>{
    res.status(200).json({msg:'again and again'})
})
router.post('/AddCour',addCour)
router.get('/AllCour',getAllCour)
router.get('/:id',getOneCour)
router.put('/:id',editCour)
router.delete('/:id',deleteCour)
module.exports = router