//Import Model
const {Pirate} = require("../models/pirate.model")

// Test
module.exports.test = (req,res) => {
    res.json("If you can read this, the route is working.")
}

//Create
module.exports.create = (req, res) => {
    // const {name, price, description} = req.body;
    Pirate.create(req.body)
        .then(Pirate => res.json(Pirate))
        .catch(err => res.status(400).json(err))
}

//Read
module.exports.get = (req, res) => {
    Pirate.find()
    .then(allPirates => res.json(allPirates))
    .catch(err => res.json(err))
}
module.exports.onePirate = (req,res) => {
    Pirate.findOne({_id: req.params.pirate_id})
    .then(onePirate => res.json(onePirate))
    .catch(err => res.status(400).json({err}));
}

//Delete
module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.pirate_id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}