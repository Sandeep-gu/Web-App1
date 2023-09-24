const express = require('express')
const router = express.Router();
const User = require('../models/user.js')
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const {Secrete_JWT}  = require('../CONFIG.js')

router.post('/createuser', (req, res) => {
    const { name, lastname, email, password } = req.body;

    if (!name || !lastname || !email || !password) {
        return res.status(401).json({ error: 'Please Enter All the Detail' });
    }

    User.findOne({ Email: email })
        .then(userInDB => {
            if (userInDB) {
                return res.status(200).json({ error: 'This email id exists' });
            }
            bcrypt.hash(password,16)
            .then(bcryptPassword=>{
                User.create({
                    FullName: req.body.name,
                    LastName: req.body.lastname,
                    Email: req.body.email,
                    Password: bcryptPassword
                })
                    .then((result) => {
                        res.status(200).json({ message: result });
                    })
                    .catch((err) => {
                        res.status(500).json({ error: err.message });
                    });
            })
            })
            
        .catch(err => {
            res.status(500).json({ error: 'Internal server error' });
        });
});


//take data from the frontend and check the database that are available or not and return response.
router.post('/loginuser',(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(404).json({error:"please enter a valid email and password"})
    }
    console.log(email)
    User.findOne({Email:email})
    .then(userData=>{
        console.log(userData)
        bcrypt.compare(password,userData.Password)
        .then(result=>{
            console.log(result)
            if(result){
                const jwt_token = JWT.sign({_id:userData._id},Secrete_JWT)
                const user = {'name':userData.FullName,'email':userData.LastName,'_id':userData._id}

                res.status(200).json({'token':jwt_token, 'user':user})

            }else{
                res.status(500).json({error:"InValid Email or Password"})
            }
        }).catch(err=>{
            res.status(500).json({error:"Please Enter Right credentials"})
        })

    }).catch(err=>{
        res.status(500).json({error:"please Enter credentials"})
    })
})
module.exports = router;
