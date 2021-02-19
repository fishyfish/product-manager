const { default: axios } = require('axios');
const { response } = require('express');
const { findById } = require('../models/product.model');
const Product = require('../models/product.model');    /* this is new */

module.exports.index = (request, response) => {
    response.json({
        message: "My Foot Hurts"
    });
}

/* The method below is new */

// This works
module.exports.createProduct = (request, response) => {
    const { title, price,description } = request.body;
    Product.create({
        title,
        price,
        description,
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

// This works
module.exports.getAllProducts = (request, response) => {
    Product.find({})
    .then (product => response.json(product))
    .catch(err => response.json(err));
}

// This works

module.exports.getOneProduct = (request,response) => {
    // get a single product by ID
    Product.findById(request.params.id)
    .then((oneProduct) => {
        console.log(oneProduct);
        response.json(oneProduct);
    })
    .catch((err) => {
        console.log('error in getOneProduct: ' + err);
        response.json(err);
    })
}

// This works
module.exports.updateProduct = (request, response) => {
    Product.findByIdAndUpdate(request.params.id,request.body,)
    .then((updatedProduct) => {
        console.log(updatedProduct);
        response.json(updatedProduct);
    })
    .catch(err => response.json(err));
}

// This works
module.exports.deleteProduct = (request, response) => {
    Product.findByIdAndDelete(request.params.id,response.body,)
    .then((removedProduct) => {
        console.log(removedProduct);
        response.json(removedProduct);
    })

    .catch(err => response.json(err));
}




