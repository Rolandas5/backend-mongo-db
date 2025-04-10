const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes'); // importuojame knygų maršrutus

// .env failas nuo žoddžio enviromental (aplinka) - tai tekstinis failas, kuriame saugomi aplinkos kintamieji,
// kurių nenorime, kad kiti turetu. Dažniausiai tai yra slapta informacija, pavyzdžiui, slaptažodžiai, API raktai ir pan.
// Šis failas yra ignoruojamas git, todėl jis nėra viešai prieinamas.
// dotenv - tai paketas, kuris leidžia naudoti aplinkos kintamuosius
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);

// Mongoose biklioteka, kuri leidžia sukurti ryšį tarp mūsų serverio į mūsų MongoDB duomenu bazes
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
