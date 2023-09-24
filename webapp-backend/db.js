const mongoose = require('mongoose')
const {MONGODB_URL} = require('./CONFIG.js')
const mongodb = ()=>{
    console.log(MONGODB_URL)
    mongoose.connect(MONGODB_URL);
    mongoose.connection.on('connected',()=>{
    console.log("connected db")
    })
    mongoose.connection.on('error',()=>{
    console.log('Some error while connectiong')
    })
}
module.exports = mongodb;