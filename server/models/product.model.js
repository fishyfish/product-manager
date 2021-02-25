const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "You must have a title."],
        minlength: [3, "Your title must be at least 3 characters long"],
    },
    price: { 
        type: String,
        required: [true, "You include a price."],
        minlength: [2, "Your price must be at least 2 characters long, and must be a number."],
    },
    description: { 
        type: String,
        required: [true, "You must include a description."],
        minlength: [3, "Your description must be at least 3 characters long."],
    },
}, { timestamps: true });
module.exports = mongoose.model('Product', ProductSchema);