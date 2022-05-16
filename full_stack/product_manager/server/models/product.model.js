// import dependencies
const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    }
}, {timestamps:true})

module.exports.Product = mongoose.model("Product", ProductSchema)