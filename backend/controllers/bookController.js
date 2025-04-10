const Book = require('../models/bookModel');

exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find(); // surandame visas knygas
    res.status(200).json(allBooks); // grąžiname .json formatu surastas knygas
  } catch (error) {
    // eroro atveju grąžiname klaidą
    res.status(500).json({ error: 'Error fetching books' }); // grąžiname klaidą
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body); // sukuriame naują knygą pagal gautą užklausą
    await newBook.save(); // išsaugome naują knygą duomenų bazėje
    res.status(201).json({ message: 'Book created successfully' }); // grąžiname sukurtą knygą
  } catch (error) {
    // eroro atveju grąžiname klaidą
    res.status(500).json({ error: 'Error creating book' }); // grąžiname klaidą
  }
};
