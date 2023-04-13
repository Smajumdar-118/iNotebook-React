const mongoose = require('mongoose');
const express = require('express');

// const mongoURI = "mongodb://localhost:27017/iNotebook"
const mongoURI = "mongodb://127.0.0.1:27017/iNotebook"

const connectToMongo =()=>{
    mongoose.connect(mongoURI);
    
}
module.exports = connectToMongo;