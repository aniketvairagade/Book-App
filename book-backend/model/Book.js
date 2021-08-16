// model/Book.js

const mongoose = require('mongoose');


const BookSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        require: true
    },
    author: {
        type:String,
        require: true
    },
    description: {
        type: String,
    },
    published_date: {
        type: Date
    },
    publisher: {
        type: String
    },
    update_date:{
        type:Date,
        default: Date.now
    }
});


module.exports = Book = mongoose.model('book', BookSchema);
