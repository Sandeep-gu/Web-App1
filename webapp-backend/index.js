const express = require('express')
const mongoose = require('mongoose')
const mongodb = require('./db.js')
const cors = require('cors');
const PORT = 4000;
const app = express();

mongodb()
app.use(cors())
app.use(express.json())

app.use('/api',require('./routers/userPost'))
app.use('/api',require('./routers/post_router'))
app.listen(PORT,()=>{
    console.log("POST 4000 Listen")
})