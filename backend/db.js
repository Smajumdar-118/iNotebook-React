const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Smajumdar_118:Sayan4444@mydb.xpjoxqo.mongodb.net/test"; 

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB Connection Successful!");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        // Exit the process if the database connection fails critically
        process.exit(1); 
    }
};

module.exports = connectToMongo;
