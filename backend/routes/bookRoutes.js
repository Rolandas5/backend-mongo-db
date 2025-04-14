const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController'); // importuojame knygų kontrolerį

// GET gauti visas knygas
router.get('/', bookController.getAllBooks);

// POST sukurti naujos knygos įrašą
router.post('/', bookController.createBook);

// PATH /:id - gauti knygą pagal id
router.get('/:id', bookController.updateBook);

module.exports = router; // eksportuojame knygų maršrutus
