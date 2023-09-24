const mongoose = require('mongoose')
const {Schema} = mongoose;
const {ObjectId} = mongoose.Schema.Types;

const postSchema = Schema({
    ProductName:{
        type:String,
        require:true
    },
    Quantity:{
        type:String,
        require:true
    },
    Amount:{
        type:String,
        require:true
    },
    author:{
        type:ObjectId,
        require:'user'
    }
})
module.exports = mongoose.model('post',postSchema)