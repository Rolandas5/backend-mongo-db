const Book = require('../models/bookModel');

exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find(); // surandame visas knygas
    res.status(200).json(allBooks); // grąžiname .json formatu surastas knygas
  } catch (error) {
    // eroro atveju grąžiname klaidą
    res.status(500).json({ error: 'Error fetching books' });
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

// PATH /:id - atnaujinti knygą pagal id
exports.updateBook = async (req, res) => {
  try {
    const id = req.params.id; // gauname id iš URL
    const book = await Book.findById(id); // surandame knygą pagal ID

    if (!book) {
      return res.status(404).json({ error: 'Book not found' }); // jei knyga nerasta
    }

    Object.assign(book, req.body); // atnaujiname knygos laukus pagal užklausos duomenis
    await book.save(); // išsaugome duomenų bazėje

    res.status(200).json({ message: 'Book updated successfully', book }); // grąžiname sėkmingą atsakymą
  } catch (error) {
    res.status(500).json({ error: 'Error updating book' }); // klaidos atveju
  }
};

// DELETE /:id - ištrinti knygą pagal id
exports.deleteBook = async (req, res) => {
  try {
    const id = req.params; // gauname id iš užklausos
    const book = await Book.findByIdAndDelete(id); // surandame knygą pagal ID ir ištriname ją

    if (!deleteBook) {
      return res.status(404).json({ error: 'Book not found' }); // jei knyga nerasta
    }

    res.status(201).json({ message: 'Book deleted successfully' }); // grąžiname sėkmingą atsakymą
  } catch (error) {
    // eroro atveju grąžiname klaidą
    res.status(500).json({ error: 'Server error' }); // grąžiname klaidą
  }
};
