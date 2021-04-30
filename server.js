const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

// const poetry = require('poetry-parser')

// poetry.fromString(string, json);


app.use('/poem', require('./src/Route/poem'))
    
mongoose.connect("mongodb+srv://bharathi:QuDyRDtDlow315wa@cluster0.ypdqk.mongodb.net/poem?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})