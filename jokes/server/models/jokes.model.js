const mongoose = require('mongoose');

// make a table with these properties
const JokeSchema = new mongoose.Schema({
    //the properties with validations
    setup: {
        type: String,
        required: [true, "A joke requires a good setup"],
        min: [5, "Jokes must be 5 characters long"]
},
    punchline: {
    type: String,
    required: [true, "A joke requires a good punchline"],
    min: [5, "Punchline must be 5 characters long"]
}
});

//Use the code above to make it a instance
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
