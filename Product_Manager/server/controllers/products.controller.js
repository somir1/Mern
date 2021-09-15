const Product = require("../models/products.models");

module.exports.helloworld = (req, res) => {
    res.json({ message: "We Got jokes now huh ?" });
}

module.exports.findall = (req, res) => {
    Product.find()
    .then(allProducts=>{
        res.json({results: allProducts})
    })
    .catch(err=>{
        res.json({err:err})
    })
}

module.exports.makeproduct = (req,res) => {
    Product.create(req.body)
        .then(newProduct=>{
            res.json({results: newProduct })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.getOne = (req,res) => {
    Product.findOne({_id:req.params.id})
        .then(getProduct=>{
            res.json({results: getProduct })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.updateProduct = (req,res) => {
    Product.findByIdAndUpdate(
        // find the item with the matching id
        { _id: req.params.id },

        //the info from the form 
        req.body,
        
        //new:true means return the newly updated info.
        { new: true, runValidators: true } 
    )
    .then(updatedProduct => {
        res.json({ results: updatedProduct })
    })
    .catch(err=>{
        res.json({err:err})
    })
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(deletedProduct => {
        res.json({results: deletedProduct})
    })
    .catch(err=>{
        res.json({err:err})
    })
}