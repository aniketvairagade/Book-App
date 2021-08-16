//app.js

const express = require('express');
const connectDB = require('./config/db');
var cors =require('cors');

// routes
const books = require('./routes/api/book');

const app=express();

// connneted Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

//Init  Middleware
app.use(express.json({ extended: false }));

app.get('/',(req,res) => res.send('Welcome to Orange city'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`server running on port ${port}`));