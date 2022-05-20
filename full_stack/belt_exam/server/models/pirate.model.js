// import dependencies
const mongoose = require("mongoose")

//create schema
const PirateSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "Why you hab short name"],
    },
    url:{
        type:String,
        required: [true, "Show your face"]
    },
    chests:{
        type:Number,
        reuired: [true, "Get more treasure"]
    },
    catchPhrase:{
        type:String,
        required: [true, "Speak up!"]
    },
    position:{
        type:String,
        required: [true, "Pick position"]
    },
    pegLeg:{
        type:Boolean,
        default: true
    },
    eyePatch:{
        type:Boolean,
        default: true
    },
    hookHand:{
        type:Boolean,
        default: true
    }
}, {timestamps:true})

// register schema in mongoo
module.exports.Pirate = mongoose.model("Pirate", PirateSchema)