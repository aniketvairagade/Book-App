// routes/ai/books.js

const express = require('express');
const router = express.Router();

// Load Book model

const Book = require('../../model/Book');

router.get('/test', (req, res) => res.send('Book route testing !'));

router.get('/', (req, res) => {
    Book.find()
       .then(books => res.json(books))
       .catch(err => res.status(404).json({ nobooksfound : 'No Books Found' }));
    });  
    

    router.get('/:id', (req, res) => {
        Book.findById(req.params.id)
            .then(book => res.json(book))
            .catch(err => res.status(404).json({ nobookfound : 'No Book Found' }));
    });  
    
    router.post('/', (req,res) => {
        Book.create(req.body)
        .then(books=>res.json({ msg: 'Book added successfully'}))
        .catch(err => res.status(404).json({ error : 'Unable to add this book'}));
    });

    router.put('/:id',(req,res) => {
        Book.findByIdAndUpdate(req.params.id, req.body)
         .then(books => res.json({ msg: 'Updated successfully' }))
         .catch(err => res.status(404).json({error : 'Unable to updated this Database' })
         );
    });

    router.delete('/:id',(req,res) => {
        Book.findByIdAndRemove(req.params.id)
         .then(books => res.json({ msg: 'Book entry deleted successfully' }))
         .catch(err  => res.status(404).json({error : 'NO such a book'}));
    });

module.exports=router;