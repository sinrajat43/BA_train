const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('We are at home page');
})

module.exports=router;