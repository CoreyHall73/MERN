// import dependencies
const mongoose = require("mongoose")


//create schema
const AuthorSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "Why you hab short name"],
        minLength: [3, "Must have at least 3 character"]
    }
}, {timestamps:true})


// register schema in mongoo
module.exports.Author = mongoose.model("Author", AuthorSchema)