//Import Model
const {Author} = require("../models/author.model")

// Test
module.exports.test = (req,res) => {
    res.json("If you can read this, the route is working.")
}

//Create
module.exports.create = (req, res) => {
    // const {name, price, description} = req.body;
    Author.create(req.body)
        .then(Author => res.json(Author))
        .catch(err => res.status(400).json(err))
}

//Read
module.exports.get = (req, res) => {
    Author.find()
    .then(allAuthors => res.json(allAuthors))
    .catch(err => res.json(err))
}
module.exports.oneAuthor = (req,res) => {
    Author.findOne({_id: req.params.author_id})
    .then(oneAuthor => res.json(oneAuthor))
    .catch(err => res.status(400).json({err}));
}

//Update
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.author_id}, request.body, {new:true, runValidators:true} ) //Add for update validations
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err))
}

//Delete
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.author_id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}