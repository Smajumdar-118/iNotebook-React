const mongoose = require('mongoose')
const { Schema } = mongoose;

const noteSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    name : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
        
    },
    tag : {
        type : String
    },
    date : {
        type : Date,
        default : Date.now
    }
  });

 module.exports = mongoose.model('notes',noteSchema)