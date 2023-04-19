const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes')
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');




router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id })
    res.json(notes);
})


router.post('/addnotes', fetchuser, [
    body('title', 'Enter a valid Title').isLength({ min: 3 }),
    body('description', 'description should be minimum 5 character').isLength({ min: 5 })
], async (req, res) => {
    const { title, description, tag } = req.body;
    const note = new Notes({
        title, description, tag, user: req.user.id
    })
    const savedNotes = await note.save();
    res.send(savedNotes);
})
module.exports = router