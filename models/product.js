const mongoose = require('mongoose');
const productschema = new mongoose.Schema({
    img:{
        type:String,
    },
    name:{
        type:String,
        required:true 
    },
    price:{
        type:Number,
        required:[true,"price must be provided"]
    },
    featured:{
        type:Boolean,
        default:true
    },
    rating:{
        type:Number,
        default:4.9
    },
    createdAt:{
        type:Date,
        default:Date().now
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","oneplus","dell","mi"],
            message:`{VALUE} is not supported`   
        }
    },
})
module.exports = mongoose.model('Product',productschema);