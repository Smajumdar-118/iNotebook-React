const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({


    name: {
        type: String,
        // require : true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        // require : true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;






// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const userSchema = new Schema({
//   title: String, // String is shorthand for {type: String}
//   author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number
//   }
// });