const express=require('express');
const router=express.Router();
const Posts=require('../model/posts');


router.get('/',(req,res)=>{
    res.send('We are at posts');
});

router.post('/',async (req,res)=>{
    console.log(req.body);
    const response=await Posts.create(req.body);
    console.log(response);
    res.json({status:'ok'})
});

router.get('/first',(req,res)=>{
    res.send('This is first post');
});

module.exports=router;