const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const { body, validationResult } = require('express-validator');



router.get('/CreateUser',[
    body('email','Enter a valid email').isEmail(),
    body('name','Name should be minimum 3 character').isLength({ min: 3 }),
    body('password','Password should be minimum 5 character').isLength({ min: 5 })
] ,async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{

   
     let user = await User.findOne({email : req.body.email});
     if(user){
        return res.status(400).json({error : "Sorry a user with this email already exists"})
     }
    user = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
    })
    res.json(user)
}
catch(error){
    console.message(error.message);
    res.status(500).send("Some Error Occured");
}
})
module.exports = router