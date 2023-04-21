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





router.put('/updatenote/:id', fetchuser,  async (req, res) => {
    const {title,description,tag} = req.body;
    const newNote = {};
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag};

    let note = await Notes.findById(req.params.id);
    if(!note){res.status(404).send("NOt Found")}
    if(note.user.toString() != req.user.id){res.status(401).send("Not Allowed")};
    note  = await Notes.findByIdAndUpdate(req.params.id , {$set : newNote} , {new:true});
    res.json({note});

})



router.delete('/deletenote/:id', fetchuser,  async (req, res) => {
    const {title,description,tag} = req.body;
    

    let note = await Notes.findById(req.params.id);
    if(!note){res.status(404).send("NOt Found")}
    if(note.user.toString() != req.user.id){res.status(401).send("Not Allowed")};
    note  = await Notes.findByIdAndDelete(req.params.id);
    res.json({"Success" : "Note has been deleted successfully"});

})


module.exports = router