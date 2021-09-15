const mongoose = require('mongoose');

// make a table with these properties
const products = new mongoose.Schema({
    //the properties with validations
    title: {
        type: String,
        required: [true, "Field can not be blank"],
        minlength: [3, "Title must be more then 3 charchters"]
},
    price: {
        type: Number,
        required: [true, "Field can not be blank"]
},
    description: {
        type: String,
        required: [true, "Field can not be blank"],
        minlength: [3, "Description must be more then 3 charchters"]
    }
});

//Use the code above to make it a instance
const Product = mongoose.model('Product', products);
module.exports = Product;