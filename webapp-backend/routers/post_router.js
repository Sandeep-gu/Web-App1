const express = require('express')
const router = express.Router();
const protectedRoute = require('../middleware/protectedResources')
const Post = require('../models/post.js')

//createpost
router.post('/createpost',protectedRoute,(req,res)=>{
    const {productname,quantity,amount}= req.body
    if(!productname || !quantity || !amount){
        return res.status(404).json({error:"Please Fill All Detail"})
    }
    req.user.password = undefined;
    Post.create({ProductName:productname,Quantity:quantity,Amount:amount,author:req.user})
    .then(newPost=>{
        res.status(200).json({post:newPost})
    })
    .catch((err)=>{
        res.status(400).json({error:err})
    })
})

//get all posts
router.get('/allposts', (req, res)=>{
    Post.find()
    .then(postAllData=>{
        res.status(200).json({post: postAllData})
    })
    .catch(err=>{
        res.status(500).json({error: err});
    });
})
module.exports = router

