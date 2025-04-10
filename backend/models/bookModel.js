const mongoose = require('mongoose');

// Schema - tai yra objektas, kuris aprašo, kaip atrodys mūsų duomenys duomenų bazėje.
// Tai yra pagrindas pagal kurį bus sukurtos mūsų lentelės (collections) MongoDB duomenų bazėje.
// Tai yra kaip šablonas, pagal kurį bus kuriami mūsų duomenys.

const bookSchema = new mongoose.Schema(
  {
    title: {
      // title - nurodom koks bus duomenu tipas
      type: String,
      // required - pasakom, kad yra privalomas laukas, kuris turi būti užpildytas
      required: true,
      // trim - pašalina nereikalingus tarpus iš pradžios ir pabaigos
      trim: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    // Nurodau kurią kolekciją noriu naudoti savo duoemenų bazėje
    collection: 'books', // kolekcijos pavadinimas, kurioje bus saugomi duomenys
    // Nurodau, kad noriu kad sukurtų createdAt ir updatedAt laukus, kurie bus automatiškai atnaujinami
    timestamps: true, // sukuriami createdAt ir updatedAt laukai
  }
);

module.exports = mongoose.model('Book', bookSchema);
// Book - tai yra kolekcijos pavadinimas, kuris bus sukurtas MongoDB duomenų bazėje
// bookSchema - tai yra schema, kurią sukūrėme anksčiau
// mongoose.model - tai yra funkcija, kuri sukuria modelį pagal schemą
