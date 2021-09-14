const Joke = require("../models/jokes.model");

module.exports.helloworld = (req, res) => {
    res.json({ message: "We Got jokes now huh ?" });
}

module.exports.findalljokes = (req,res) => {
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.makejokes = (req,res) => {
    Joke.create(req.body)
        .then(newJoke=>{
            res.json({results: newJoke })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.randomjoke = (req, res) => {
    Joke.find()
    .then(allJokes=>{
        let lengthOfJokes = allJokes.length;
        //get a random number from 0 to lengthOfAllJokes

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
        let randomIndex = getRandomInt(lengthOfJokes)

        console.log(allJokes[randomIndex])
        res.json({results: allJokes[randomIndex]})
    })
    .catch(err=>{
        res.json({err:err})
    })
}

module.exports.updatejoke = (req, res) => {
    Joke.findByIdAndUpdate(
        // find the joke with the matching id
        { _id: req.params.id },

        //the info from the form 
        req.body,
        
        //new:true means return the newly updated info.
        { new: true, runValidators: true } 
    )
    .then(updatedJoke => {
        res.json({ results: updatedJoke })
    })
    .catch(err=>{
        res.json({err:err})
    })
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(deletedJoke =>{
        res.json({results: deletedJoke})
    })
    .catch(err=>{
        res.json({err:err})
    })
}