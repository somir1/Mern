const mongoose = require('mongoose');

// make a table with these properties
const authors = new mongoose.Schema({
    //the properties with validations
    name: {
        type: String,
        required: [true, "Field can not be blank"],
        minlength: [3, "Title must be more then 3 charchters"]
    }
});

//Use the code above to make it a instance
const Author = mongoose.model('Author', authors);
module.exports = Author;