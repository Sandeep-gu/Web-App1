const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const {Secrete_JWT} = require('../CONFIG')

module.exports = (req,res,next)=>{
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({error:"User Not log In"})
    }

    const token = authorization.replace('Bearer ','')

    jwt.verify(token,Secrete_JWT,(error,payload)=>{
        if(error){
            return res.status(401).json({error:"User Not Logged In"})
        }

        const {_id} = payload

        User.findById(_id)
        .then((dbUser)=>{
            req.user = dbUser;
            next();
        })
        .catch((error)=>{
            res.status(501).json({error:'Error Finding user'})
        })
    })


}
