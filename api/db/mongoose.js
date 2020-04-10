// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');
require('dotenv').config()

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://klarv:karla2427@cluster0-uzn9e.mongodb.net/todoapp?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


module.exports = {
    mongoose
};