const {Product} = require("../models/product.model")

// Test
module.exports.test = (req,res) => {
    res.json("If you can read this, the route is working.")
}

//Create
module.exports.create = (req, res) => {
    // const {name, price, description} = req.body;
    Product.create(req.body)
        .then(Product => res.json(Product))
        .catch(err => res.json(err))
}

//Read
module.exports.get = (req, res) => {
    Product.find()
    .then(allProducts => res.json(allProducts))
    .catch(err => res.json(err))
}
module.exports.oneProduct = (req,res) => {
    Product.findOne({_id: req.params.product_id})
    .then(oneProduct => res.json(oneProduct))
    .catch(err => res.status(400).json({err}));
}

//Update

//Delete