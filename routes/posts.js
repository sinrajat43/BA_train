const express=require('express');
const router=express.Router();
const Posts=require('../model/posts');


router.get('/',(req,res)=>{
    res.send('We are at posts');
});

//CREATE operation
router.post('/create',async (req,res)=>{
    console.log(req.body);
    const response=await Posts.create(req.body);
    console.log(response);
    res.json({status:'ok'});
    res.json(response);
});

//READ Operation
router.get('/read',async (req,res)=>{
    console.log(req.body);
    const response=await Posts.find({});
    console.log(response);
    res.json(response);
});

//DELETE Operation
router.delete('/delete/:PostId',async (req,res)=>{
    const remPost=await Posts.remove({_id:req.params.PostId})
    res.json(remPost);
})


router.get('/first',(req,res)=>{
    res.send('This is first post');
});

module.exports=router;