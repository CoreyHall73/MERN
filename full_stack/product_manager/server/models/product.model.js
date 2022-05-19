// import dependencies
const mongoose = require("mongoose")


//create schema
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


// register schema in mongoo
module.exports.Product = mongoose.model("Product", ProductSchema)