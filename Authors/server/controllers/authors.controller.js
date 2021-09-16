const Author = require("../models/authors.model");

module.exports.helloworld = (req, res) => {
    res.json({ message: "Authors" });
}

module.exports.findall = (req, res) => {
    Author.find()
    .then(allAuthors=>{
        res.json({results: allAuthors})
    })
    .catch(err=>{
        res.json({err:err})
    })
}

module.exports.makeproduct = (req,res) => {
    Author.create(req.body)
        .then(newAuthor=>{
            res.json({results: newAuthor })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.getOne = (req,res) => {
    Author.findOne({_id:req.params.id})
        .then(getAuthor=>{
            res.json({results: getAuthor })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.updateProduct = (req,res) => {
    Author.findByIdAndUpdate(
        // find the item with the matching id
        { _id: req.params.id },

        //the info from the form 
        req.body,
        
        //new:true means return the newly updated info.
        { new: true, runValidators: true } 
    )
    .then(updatedAuthor => {
        res.json({ results: updatedAuthor })
    })
    .catch(err=>{
        res.json({err:err})
    })
}

module.exports.deleteProduct = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then(deletedAuthor => {
        res.json({results: deletedAuthor})
    })
    .catch(err=>{
        res.json({err:err})
    })
}