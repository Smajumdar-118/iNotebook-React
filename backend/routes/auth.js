const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const fetchuser = require('../middleware/fetchuser')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const SECRET_KEY = "sayanisagoodprogrammer";

router.post('/CreateUser', [
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Name should be minimum 3 character').isLength({ min: 3 }),
    body('password', 'Password should be minimum 5 character').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {


        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        })
        const data = {
            user: { id: user.id }
        }
        const authToken = jwt.sign(data, SECRET_KEY)
        // res.json(user)
        res.json({ authToken });
    }
    catch (error) {
        console.message(error.message);
        res.status(500).send("Some Error Occured");
    }
})





router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password should not be empty').exists()
], async (req, res) => {


    const { email, password } = req.body
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please enter a valis credentials" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please enter a valis credentials" })
        }
        const data = {
            user: { id: user.id }
        }
        const authToken = jwt.sign(data, SECRET_KEY)

        res.json({ authToken });

    } catch (error) {
        console.message(error.message);
        res.status(500).send("Some Error Occured");
    }

})





router.post('/getuser', fetchuser, async (req, res) => {

    try {
        userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        res.send(user);
    } catch (error) {
        console.message(error.message);
        res.status(500).send("Some Error Occured");
    }



})





module.exports = router