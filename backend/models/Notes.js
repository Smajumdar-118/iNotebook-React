const mongoose = require('mongoose')

const noteSchema = new Schema({
    name : {
        type : string,
        require : true
    },
    description : {
        type : string,
        require : true
        
    },
    tag : {
        type : string
    },
    date : {
        type : Date,
        default : Date.now
    }
  });

 module.exports = mongoose.model('notes','noteSchema')